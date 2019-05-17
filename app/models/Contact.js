const mongoose = require('mongoose')

const Schema = mongoose.Schema // const { Schemce } = mongoose - object destructing

const contactSchema = new Schema({  // passing an object as parameter to send multiple arguments
    name: { 
        type: String,  // built in properties for backend validations
        required: true
    },
    email: { 
        type: String,
    },
    mobile: { 
        type: String,   // mobile number must be stored has a string in DB
        required: true,
        minlength: 10,
        maxlength: 10
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

})      // node-express way of creating an object

const Contact = mongoose.model('Contact',contactSchema) 

module.exports = {
    Contact
}