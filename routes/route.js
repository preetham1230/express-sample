const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

// retrieving contacts
router.get('/contacts',(req,res,next) =>{
    
/*connection(db =>{
    db.collection('contactList').find((err,contacts)=>{
        res.json(contacts);
    })
})*/

    Contact.find((err,contacts)=>{
        res.json(contacts);
    })
})


// add contact
router.post('/contact',(req,res,next) =>{
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
    });

    newContact.save((err,contact)=>{
        if(err){
            res.json({msg:"contact err saving"});
        }
        else {
            res.json({msg:"contact  saving"});
        }
    })
})


// delete contact
router.delete('/contacts/:id',(req,res,next) =>{
    //delete contact

    Contact.remove({_id:req.params.id},(err,result)=>{
        if(err){
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
})

module.exports = router;