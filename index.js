const express = require('express')
const app = express()
const {mongoose} = require('./config/database')
const {contactRouter} = require('./app/controllers/ContactsController')
const {noteRouter} = require('./app/controllers/NotesController')


app.use(express.json())

app.use('/contacts',contactRouter)

app.use('/notes',noteRouter)

app.listen(process.env.PORT || 3000,function(){
    console.log('listening ports')
})  
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
   
