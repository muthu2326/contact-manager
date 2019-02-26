const mongoose = require('mongoose')

// DB Configuration
mongoose.Promise = global.Promise   // default ES6 
// estabilsihing connection to DB
mongoose.connect('mongodb://localhost:27017/contact-manager-jan',{ useNewUrlParser: true})
mongodb - protocol
mongoose.connect('mongodb+srv://muthu2326:sainila@cluster0-regtk.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true})
    .then(function(){
        console.log('connected to db')
    })
    .catch(function(){
        console.log('OOPS!! Something went wrong in DB Connection')
    })

    module.exports = {
        mongoose
    }
