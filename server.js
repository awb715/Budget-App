const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const hbs = require('hbs');
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'hbs');
//render index.html
var header = {
    headers: {
        'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElfS0VZX01BTkFHRVIiLCJodHRwOi8vdGF4ZWUuaW8vdXNlcl9pZCI6IjU4NDQ4MTA4Mzg2NjhhMTU4ZDU0ZmIzNSIsImh0dHA6Ly90YXhlZS5pby9zY29wZXMiOlsiYXBpIl0sImlhdCI6MTQ5OTA1MzU0NX0.pOwC5JEC7trLaaZVgHHGu_rvN0-EGa3RMm8BgJ-M9gk"
            //headers
    }
};
app.use(express.static(__dirname + '/views'));
app.get('/', function (req, res) {
    res.render('index');
});
app.post('/Info', function (req, res) {
    var State = req.body.State;
    var income = Number(req.body.income);
    var zip = req.body.ZIP;
    axios.post('https://taxee.io/api/v2/calculate/2017', {
        //data sent to Taxee.io
        "exemptions": 1
        , "filing_status": "single"
        , "pay_periods": 1
        , "pay_rate": income || 100000
        , "state": State || "NY"
    , }, header).then(function (response) {
        var obj = {
            income: '$' + income
            , fica: response.data.annual.fica.amount
            , federal: response.data.annual.federal.amount
            , residence: State + ", " + zip
            , state: response.data.annual.state.amount
        }
        console.log('h')
        axios.get("https://www.quandl.com/api/v3/datasets/ZILL/Z" + zip + "_RMP.json?api_key=d7xQahcKCtWUC4CM1LVd").then(function (response) {
            console.log(response.status, ' status');
            var monthRent = response.data.dataset.data[0][1]
            obj.rent = monthRent
            obj.yearlyRent = Number(monthRent) * 12;
        }).then(function (response) {
            res.send(obj);
        }).catch(function (error) {
            res.status(404).send();
        });;
    }).catch(function (error) {
        res.status(404).send();
    });
});
app.listen(3000);