var usStates = {
    Alabama: "AL"
    , Alaska: "AK"
    , Arizona: "AZ"
    , Arkansas: "AR"
    , California: "CA"
    , Colorado: "CO"
    , Connecticut: "CT"
    , Delaware: "DE"
    , Florida: "FL"
    , Georgia: "GA"
    , Hawaii: "HI"
    , Idaho: "ID"
    , Illinois: "IL"
    , Indiana: "IN"
    , Iowa: "IA"
    , Kansas: "KS"
    , Kentucky: "KY"
    , Louisiana: "LA"
    , Maine: "ME"
    , Maryland: "MD"
    , Massachusetts: "MA"
    , Michigan: "MI"
    , Minnesota: "MN"
    , Mississippi: "MS"
    , Missouri: "MO"
    , Montana: "MT"
    , Nebraska: "NE"
    , Nevada: "NV"
    , New_Hampshire: "NH"
    , New_Jersey: "NJ"
    , New_Mexico: "NM"
    , New_York: "NY"
    , North_Carolina: "NC"
    , North_Dakota: "ND"
    , Ohio: "OH"
    , Oklahoma: "OK"
    , Oregon: "OR"
    , Pennsylvania: "PA"
    , Rhode_Island: "RI"
    , South_Carolina: "SC"
    , South_Dakota: "SD"
    , Tennessee: "TN"
    , Texas: "TX"
    , Utah: "UT"
    , Vermont: "VT"
    , Virginia: "VA"
    , Washington: "WA"
    , West_Virginia: "WV"
    , Wisconsin: "WI"
    , Wyoming: "WY"
};
//will load the proper questions on the page
//https://github.com/kswedberg/jquery-smooth-scroll
var quest = ['../partials/income.hbs', '../partials/state.hbs', '../partials/zip.hbs', '../partials/roomate.hbs'];
var iterator = 0;
//creates object that gets sent to api
function Obj(name, val) {
    event.preventDefault();
    $('.form').load(quest[iterator]).addClass('animated fadeIn');
    if (name) {
        if (name === "state") {
            val = usStates[stateConvert(val)];
        }
        data[name] = val;
        console.log(data);
    }
    iterator++;
}
var data = {};
//page scroll sliding
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

function stateConvert(value) {
    return value.split(" ").join('_').toString();
}