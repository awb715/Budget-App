var stateAbv = {
        "AL": "Alabama"
        , "AK": "Alaska"
        , "AS": "American Samoa"
        , "AZ": "Arizona"
        , "AR": "Arkansas"
        , "CA": "California"
        , "CO": "Colorado"
        , "CT": "Connecticut"
        , "DE": "Delaware"
        , "DC": "District Of Columbia"
        , "FM": "Federated States Of Micronesia"
        , "FL": "Florida"
        , "GA": "Georgia"
        , "GU": "Guam"
        , "HI": "Hawaii"
        , "ID": "Idaho"
        , "IL": "Illinois"
        , "IN": "Indiana"
        , "IA": "Iowa"
        , "KS": "Kansas"
        , "KY": "Kentucky"
        , "LA": "Louisiana"
        , "ME": "Maine"
        , "MH": "Marshall Islands"
        , "MD": "Maryland"
        , "MA": "Massachusetts"
        , "MI": "Michigan"
        , "MN": "Minnesota"
        , "MS": "Mississippi"
        , "MO": "Missouri"
        , "MT": "Montana"
        , "NE": "Nebraska"
        , "NV": "Nevada"
        , "NH": "New Hampshire"
        , "NJ": "New Jersey"
        , "NM": "New Mexico"
        , "NY": "New York"
        , "NC": "North Carolina"
        , "ND": "North Dakota"
        , "MP": "Northern Mariana Islands"
        , "OH": "Ohio"
        , "OK": "Oklahoma"
        , "OR": "Oregon"
        , "PW": "Palau"
        , "PA": "Pennsylvania"
        , "PR": "Puerto Rico"
        , "RI": "Rhode Island"
        , "SC": "South Carolina"
        , "SD": "South Dakota"
        , "TN": "Tennessee"
        , "TX": "Texas"
        , "UT": "Utah"
        , "VT": "Vermont"
        , "VI": "Virgin Islands"
        , "VA": "Virginia"
        , "WA": "Washington"
        , "WV": "West Virginia"
        , "WI": "Wisconsin"
        , "WY": "Wyoming"
    }
    //will load the proper questions on the page
    //https://github.com/kswedberg/jquery-smooth-scroll
var quest = ['../partials/income.hbs', '../partials/state.hbs', '../partials/rent.hbs', '../partials/zip.hbs', '../partials/roomate.hbs', "../partials/summary.hbs"];
var iterator = 0;
//creates object that gets sent to api
function Obj(name, vale) {
    event.preventDefault(); //prevents pg refresh
    $('.form').load(quest[iterator], function () {
        $('.bar p#' + name).addClass('enter').next().css({
            "border": "2px solid black"
            , "pointer-events": "auto"
            , "cursor": "pointer"
        });
        $('#p').val(data[name]);
    });
    //loads next html question to page
    if (name) {
        data[name] = vale;
    }
    //move array accessor up to next question
    iterator++;
    console.log(data);
}
var data = {};
//user can click already submitted values to load that orignal question and change it/
function redo(q, id) {
    q = Number(q);
    //if the current queston on the page is not the one being clicked we then change it to the one being clicked
    if (q + 1 != iterator) {
        $('.form').load(quest[q], function () {
            $('#p').val(data[id]);
        });
        iterator = q + 1;
    };
};
$(document).on('click', '.rentanswer p', function () {
    var answer = $(this).text();
    if (answer == "Yes") {
        $('.form').load('../partials/rentinput.hbs', function () {
            $('#p').val(data.rent);
        });
        quest[2] = "../partials/rentinput.hbs";
        console.log(quest[2]);
    }
    else {
        $('.form').load(quest[iterator], function () {
            $('.bar p#rent').css("border", "2px solid black").addClass('enter').next().css({
                "border": "2px solid black"
                , "pointer-events": "auto"
                , "cursor": "pointer"
            });
            iterator++;
            $('#p').val(data[zip]);
        });
    };
});
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
            };
        };
    });
});