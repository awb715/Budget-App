const express = require('express');
const bodyParser = require('body-parser');

const axios = require('axios');
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
//render index.html
app.use(express.static(__dirname + '/views'));
app.get('/', function (req, res) {
    res.render('index.html');
});


app.post('/info', function (req, res) {
    var State = req.body.State;
    var income = Number(req.body.income);
    axios.post('https://taxee.io/api/v2/calculate/2017', {
        //data
        "exemptions": 1
        , "filing_status": "single"
        , "pay_periods": 1
        , "pay_rate": income || 100000
        , "state": State || "NY"
    }, {
        headers: {
            'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElfS0VZX01BTkFHRVIiLCJodHRwOi8vdGF4ZWUuaW8vdXNlcl9pZCI6IjU4NDQ4MTA4Mzg2NjhhMTU4ZDU0ZmIzNSIsImh0dHA6Ly90YXhlZS5pby9zY29wZXMiOlsiYXBpIl0sImlhdCI6MTQ5OTA1MzU0NX0.pOwC5JEC7trLaaZVgHHGu_rvN0-EGa3RMm8BgJ-M9gk"
    
                //headers
        }
    }).then(function (response) {
        console.log(response.data, 'this is RESPONSE')
        res.send(response.data.annual);
    }).catch(function (error) {
        console.log(error);
    });
});
app.listen(3000);