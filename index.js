const express = require('express')
const app = express()
const {mongoose} = require('./config/database')
const {contactRouter} = require('./app/controllers/ContactsController')
const {noteRouter} = require('./app/controllers/NotesController')
const {welcomeRouter} = require('./app/controllers/welcome')
const { usersRouter } = require('./app/controllers/UsersController')

app.use(express.json())

app.use('/', welcomeRouter)

app.use('/contacts',contactRouter)

app.use('/notes',noteRouter)

app.use('/users',usersRouter)

// app.listen(3000,  function(){
//     console.log('listening port', 3000)
// })

const port = process.env.PORT || 3005;
app.listen(port, function(){
    console.log('listening ports', port)
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
   
