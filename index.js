const express = require('express')
const app = express()
const {mongoose} = require('./config/database')
const {contactRouter} = require('./app/controllers/ContactsController')
const {noteRouter} = require('./app/controllers/NotesController')
const {welcomeRouter} = require('./app/controllers/welcome')


app.use(express.json())

app.use('/', welcomeRouter)

app.use('/contacts',contactRouter)

app.use('/notes',noteRouter)

app.listen(3000,  function(){
    console.log('listening port', 3000)
})

// const PORT = process.env.PORT || 5000;
// app.listen(5000, function(){
//     console.log('listening ports')
// })  
    //NOSQL Terminolgies
    //database 
    //collection - collection of documents
    //document - colection fields
    //field - properties of document

    // Schema creations

      // Note - Manager

   // Contact becomes our object constructor function
    // hence it has many methods of mongoose that can be used in the server

    // client request
   
        // note manager application
        
    // getting all the notes
   
