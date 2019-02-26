const express = require('express')
const router = express.Router()
const {Note} = require('../models/Note')

router.get('/', function(req,res){
    Note.find()             
    .then(function(contacts){
        res.send(contacts)    
    })
    .catch(function(err){
        res.send(err)
    })
})

// find by id
router.get('/:id',function(req,res){
  
    Note.findById(req.params.id)
        .then(function(note){
            if(note){
                res.send(note)                   
            }else{
                res.send('Record not found')
            }
        })
        .catch(function(err){
            res.send(err)
        })
})

// create
router.post('/',function(req,res){
    const note = new Note(req.body)
    note.save()
        .then(function(note){
            res.send(note)
        })
        .catch(function(err){
            res.send(err)
        })
})

// delete
router.delete('/:id',function(req,res){
    Note.findByIdAndDelete(req.params.id)
        .then(function(note){
            res.send(note)
        })
        .catch(function(err){
            res.send(err)
        })
})

// Update
router.put('/:id',function(req,res){
   
    Note.findByIdAndUpdate(req.params.id,{$set: req.body},{ new: true,runValidoators: true})
        .then(function(note){
            res.send(note)
        })
        .catch(function(err){
            res.send(err)
        })
})

    module.exports = {
        noteRouter: router
    }