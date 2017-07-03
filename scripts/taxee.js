//going to run to the api

const request = require('request');
const unirest= require('unirest');


//
//request.post('https://taxee.io/api/v2/calculate/2017', {
//  'auth': {
//    'Bearer': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElfS0VZX01BTkFHRVIiLCJodHRwOi8vdGF4ZWUuaW8vdXNlcl9pZCI6IjU4NDQ4MTA4Mzg2NjhhMTU4ZDU0ZmIzNSIsImh0dHA6Ly90YXhlZS5pby9zY29wZXMiOlsiYXBpIl0sImlhdCI6MTQ5OTA1MzU0NX0.pOwC5JEC7trLaaZVgHHGu_rvN0-EGa3RMm8BgJ-M9gk'
//  }
//});

unirest.post("https://stylinandy-taxee.p.mashape.com/v2/calculate/2017")
.headers({
    "X-Mashape-Key":"rfipjZgXz5mshFWhwo0CIqoTSqTRp1rzH8hjsn2w7e1bnc7Xkf",
    'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElfS0VZX01BTkFHRVIiLCJodHRwOi8vdGF4ZWUuaW8vdXNlcl9pZCI6IjU4NDQ4MTA4Mzg2NjhhMTU4ZDU0ZmIzNSIsImh0dHA6Ly90YXhlZS5pby9zY29wZXMiOlsiYXBpIl0sImlhdCI6MTQ5OTA1MzU0NX0.pOwC5JEC7trLaaZVgHHGu_rvN0-EGa3RMm8BgJ-M9gk", 
          'Content-Type': 'application/x-www-form-urlencoded'}
        )
.send({ "exemptions":1,
      "filing_status": "single", 
       "pay_periods": 1,
      "pay_rate":65000,
       "state":"NY"
      })
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});