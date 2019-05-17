const express = require('express')
const router = express.Router()
const { User } = require('../models/User')
const { authenticateUser } = require('../middlewares/authentication')

// localhost:3000/users/register

router.post('/register', function(req,res){
    const body = req.body
    const user = new User(body)
    user.save()
        .then(function(user){
            res.send(user)
        })
        .catch(function(err){
            res.send(err)
        })
})

router.get('/', (req,res) => {
    User.find()
        .then(function(users){
            res.send(users)
        })
        .catch(function(err){
            res.send(err)
        })
})
// localhost:3000/users/login
router.post('/login',function(req,res){
    const body = req.body
    User.findByCredentials(body.email,body.password)    // our own static method to find the Credentials
        .then(function(user){ 
            return user.generateToken()      // returns a Promise
        })
        .then(function(token){      
            console.log('resolved token')                        // when the returned promise is resolved token is sent
            res.send({ token })
        })
        .catch(function(err){                   
            console.log('err')
            res.status(404).send(err)
        })
    })
//     User.findOne({                 // if record found or not found it always gets resolved
//         email: body.email           // returns null if not record found 
//     })                              
//         .then(function(user){
//             console.log(user)
//             if(!user){
//                 res.status('404').send('invalid email / password')
//             }
//             bcryptjs.compare(body.password, user.password) 
//             .then(function(reslut){     // takes 2 args login password and the stored encrypted password
//                 if(reslut){                // returns boolean when resolved
//                     res.send(user)
//                 }else{
//                     res.status('404').send('invalid password / password')
//                 }
//             })
//         })
//         .catch(function(err){
//             res.send(err)
//         })
// })


// localhost:3000/users/account
router.get('/account', authenticateUser, function(req, res){
    const { user } = req
    res.send(user)
})  

// localhost:3000/users/logout
router.delete('/logout', authenticateUser, function(req, res){
    const { user, token } = req
    console.log(user,token)
    User.findByIdAndUpdate(user._id, { $pull: { tokens: { token: token}}})
        .then(function(user){
            console.log(user)
            res.send({ notice: 'successfully logged out'})
        })
        .catch(function(err){
            res.send(err)
        })
})


module.exports = {
    usersRouter: router
}
