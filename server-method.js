const axios = require('axios');
//required for taxee api
var header = {
    headers: {
        'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElfS0VZX01BTkFHRVIiLCJodHRwOi8vdGF4ZWUuaW8vdXNlcl9pZCI6IjU4NDQ4MTA4Mzg2NjhhMTU4ZDU0ZmIzNSIsImh0dHA6Ly90YXhlZS5pby9zY29wZXMiOlsiYXBpIl0sImlhdCI6MTQ5OTA1MzU0NX0.pOwC5JEC7trLaaZVgHHGu_rvN0-EGa3RMm8BgJ-M9gk"
            //headers
    }
};

function taxee(data) {
    return new Promise((resolve, reject) => {
       
        var income = data.income;
        var state = data.state;
        var zip = data.zip;
        axios.post('https://taxee.io/api/v2/calculate/2017', {
            //data sent to Taxee.io
            "exemptions": 1
            , "filing_status": "single"
            , "pay_periods": 1
            , "pay_rate": income || 100000
            , "state": state || "NY"
        , }, header).then(function (response) {
            var taxData = {
                income: '$' + income
                , fica: response.data.annual.fica.amount
                , federal: response.data.annual.federal.amount
                , stateTax: response.data.annual.state.amount
                , state
                , zip: zip
            }
            resolve(taxData);
        }).catch(function (error) {
            console.log('break');
            resolve(error);
        });
    });
};

function rent(data) {
    return new Promise((resolve, reject) => {
        axios.get("https://www.quandl.com/api/v3/datasets/ZILL/Z" + data.zip + "_RMP.json?api_key=d7xQahcKCtWUC4CM1LVd").then(function (response) {
            console.log(response.status, ' status');
            var monthRent = response.data.dataset.data[0][1];
            data.rent = monthRent
            data.yearlyRent = Number(monthRent) * 12;
            return data;
        }).then(function (response) {
            resolve( data);
        }).catch(function (error) {
            reject(error);
        });
    });
}
module.exports = {
    taxee
    , rent
};