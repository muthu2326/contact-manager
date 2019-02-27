const express = require('express')
const router = express.Router()
const {Contact} = require('../models/Contact')


router.get('/', function(req,res){ 
   res.send('Welcome connected to DB')
})
 //   will return all the documents in the collection  - model
 router.get('/', function(req,res){ 
     Contact.find()              // Database query  - not AJAX request - returns promises
        .then(function(contacts){
            res.send(contacts)      // id generated by DB has '_id' has property
        })
        .catch(function(err){
            res.send(err)
        })
})

// adding a record
router.post('/',function(req,res){
    const body = req.body
    const contact = new Contact(body)
    contact.save()
        .then(function(contact){
            res.send(contact)
        })
        .catch(function(){
            res.send(err)
        })
})

// fiding a record
router.get('/:id', function(req,res){
    const id = req.params.id
    Contact.findById(id)
        .then(function(contact){
            res.send(contact)
        })
        .catch(function(err){
            res.send(err)
        })
})

// deleting a record
router.delete('/:id', function(req,res){
    const id = req.params.id
    Contact.findByIdAndDelete(id)
        .then(function(contact){
            res.send(contact)
        })
        .catch(function(err){
            res.send(err)
        })
})

// updating the record
router.put(':id', function(req,res){
    const id = req.params.id
    const body = req.body
    // findByIdAndUpadte - by default will not run validations
    // new - return the newly updated record
    // runValidators - to run validations while updating

    Contact.findByIdAndUpdate(id,{ $set: body}, {new: true, runValidoators: true})
        .then(function(contact){
            res.send(contact)
        })
        .catch(function(err){
            res.send(err)
        })
})


    module.exports = {
        contactRouter: router
    }