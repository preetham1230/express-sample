const express = require('express');
const router = express.Router();

router.get('/contacts',(req,res,next) =>{
    res.send('Retreiving list');
})


module.exports = router;