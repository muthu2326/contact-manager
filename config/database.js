const mongoose = require('mongoose')
const mongodb = require('mongodb'); 
const URL = 'mongodb+srv://muthu:muthu@cluster0-kvmls.mongodb.net/contact-manager?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
//const URL = 'mongodb://localhost:27017/contact-manager-jan'
// DB Configuration
// const URL = 'mongodb://muthu:muthu@cluster0-shard-00-00-kvmls.mongodb.net:27017,cluster0-shard-00-01-kvmls.mongodb.net:27017,cluster0-shard-00-02-kvmls.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
mongoose.Promise = global.Promise   // default ES6 
//estabilsihing connection to DB
mongoose.connect(URL,{ useNewUrlParser: true})
//mongodb - protocol
//mongoose.connect('mongodb+srv://muthu2326:sainila@cluster0-regtk.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true})
    .then(function(){
        console.log('connected to db')
    })
    .catch(function(err){
        console.log(err)
        console.log('OOPS!! Something went wrong in DB Connection')
    })

// replace the uri string with your connection string.
    module.exports = {
        mongoose
    }
