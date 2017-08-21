const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');

const {rent} = require('./server-method');
const {taxee} = require('./server-method');
const port = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/views'));


//render index.html


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
    res.render('error');
});
  

    
    
});




    app.get('/Tool' , function(req, res){
        res.render('tool');
    });
app.listen(port, function(){
    
    console.log(`Server Running on ${port}`);
}
);