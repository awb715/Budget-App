const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const hbs = require('hbs');
const {rent} = require('./server-method');
const {taxee} = require('./server-method');
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
//render index.html

app.use(express.static(__dirname + '/views'));
app.get('/', function (req, res) {
    res.render('index');
});
app.post('/Info', function (req, res) {
    
    var uData ={
         state: req.body.State,
        income : Number(req.body.income),
        zip: req.body.ZIP
    };
    
    taxee(uData).then(function(data){
        
      return rent(data)  ;
    }).then(function(fullData){
       
        res.send(fullData);
    }).catch(function (error) {
    res.send('fail');
});
    
    
    
    
});
app.listen(3000, function(){
    
    console.log('Server Running on Port 3000')
});