const mongoose = require('mongoose')
const mongodb = require('mongodb'); 
//const CONNECTION_URI = 'mongodb+srv://muthu:muthu@cluster0-kvmls.mongodb.net/contact-manager?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';

const CONNECTION_URI = 'mongodb://muthu:muthu@cluster0-shard-00-00-kvmls.mongodb.net:27017,cluster0-shard-00-01-kvmls.mongodb.net:27017,cluster0-shard-00-02-kvmls.mongodb.net:27017/contact-manager?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'

// const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/contact-manager-jan'

// const URL = 'mongodb://localhost:27017/contact-manager-jan'
// DB Configuration
//const CONNECTION_URI = 'mongodb://muthu:muthu@cluster0-shard-00-00-kvmls.mongodb.net:27017,cluster0-shard-00-01-kvmls.mongodb.net:27017,cluster0-shard-00-02-kvmls.mongodb.net:27017/contact-manager?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'

mongoose.Promise = global.Promise   // default ES6 
//estabilsihing connection to DB
mongoose.connect(CONNECTION_URI, { useNewUrlParser: true})
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
