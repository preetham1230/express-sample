var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');



var app = express();
const route = require('./routes/route');

const port = 3000;


app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api',route);

//testing server
app.get('/',(req,res) =>{
    res.send('working server');
})

app.listen(port , ()=>{
    console.log("server started at post 3000");
})


