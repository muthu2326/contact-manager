const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(value){
                return validator.isEmail(value)
            },
            message: function(){
                return 'invalid email format'
            }
        }
        // how to check the format of the email
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 128
    },
    tokens: [                     // genrate tokens for every login and store it in the tokens array of objects
        {                         // user can login from any device - mobile,tablet or from PC
            token: {
                type: String
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
})


userSchema.methods.generateToken = function(){
    const user = this
    const tokenData = {
        _id: user._id,
        username: user.username,
        createdAt: Number(new Date()) // epoc date - in  milliseconds
    }

    const token = jwt.sign(tokenData, 'jwt123')
    user.tokens.push({
        token
    })

    return user.save()
        .then(function(user){
            return Promise.resolve(token)
        })
        .catch(function(err){
            return Promise.reject(err)
        })
}



// mongoose middleware - prehooks and posthooks
//pre hooks
userSchema.pre('save',function(next){   // - password is encrypted before saving - after presave() executed then next() is invoked
    const user = this
          // when ever the record is being saved - inserting new record and while updating a record hence user.isNew propery is used to check wheather a new record is being created or not and it returns true or false
        if(user.isNew){       
        bcryptjs.genSalt(10)       
        .then(function(salt){
            bcryptjs.hash(user.password, salt)
                .then(function(encryptedpassword){
                    user.password = encryptedpassword
                    next()
                })
        })
    }else{
        next()
    }
})

// scheni controllers and fact modules way

// own static method
userSchema.statics.findByCredentials = function(email,password){    // our own static method to check the credentials
    const User = this
    return User.findOne({ email }) // consise property - passing an object as an argument for findOne method
        .then(function(user){
          //  console.log(user)
            if(!user){
                return Promise.reject({notice: 'invalid email / password'})
            }

            return bcryptjs.compare(password,user.password) // returns true or false
                .then(function(result){
                    if(result){
                        console.log(user._id)
                        return Promise.resolve(user)      // - shorthand method
                        // return new Promise(function(resolve,reject){
                        //     resolve(user)
                        // })
                    }else{
                        return Promise.reject({notice: 'invalid email / password'})             // - shorthand method
                        //  return new Promise(function(resolve,reject){
                        //     reject('invalid email / password')
                        // })
                    }
                })
        })
        .catch(function(err){
            return Promise.reject(err)  // -- shorthand method

            // return new Promise(function(resolve,reject){
            //     reject(err)
            // })
        })
}

userSchema.statics.findByToken = function(token){
    const User = this
    let tokenData
    try {
        tokenData = jwt.verify(token, 'jwt123')
    }
    catch(err) {
        return Promise.reject(err)
    }

    return User.findOne({
        _id: tokenData._id,
        'tokens.token': token  // if your searching a field of an array of objects wrap it under single quotes
    })
    
}

const User = mongoose.model('User', userSchema)

module.exports = {
    User
}