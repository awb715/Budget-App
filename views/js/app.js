var quest = ['../partials/income.hbs', '../partials/state.hbs', '../partials/rent.hbs', '../partials/zip.hbs', '../partials/roomate.hbs', "../partials/summary.hbs"]; //various templates and questions
var iterator = 0; //used to access next question on submit of answers
//creates object that gets sent to api
function Obj(name, vale) {
    if (iterator == 0) {
        $('p#income').addClass('next');
    }
    event.preventDefault();
    next(name, vale);
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
    //only call if this element as a certain class 
    if ($('p#' + id).hasClass('next') && q + 1 != iterator) {
        $('.form').load(quest[q], function () {
            setter(id);
            iterator = q + 1;
        });
    }
};
$(document).on('click', '.rentanswer p', function () {
    var answer = $(this).text();
    if (answer == "Yes") {
        $('.form').load('../partials/rentinput.hbs');
        quest[2] = "../partials/rentinput.hbs";
    }
    else {
        $('.form').load(quest[iterator], function () {
            styler('rent');
            setter('zip');
            iterator++;
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

function next(name, vale) { //will load next question
    $('.form').load(quest[iterator], function () {
        styler(name);
        setter(nextAppend[name]);
    });
}
var nextAppend = { //allows for past answer to be set as proper value on next question when resubmitting with Obj function
    income: 'state'
    , state: 'rent'
    , rent: 'zip'
    , zip: 'roommate'
};

function setter(prop) {
    if (data[prop]) { //sets value of input being loaded
        $('#p').val(data[prop]);
    }
};

function styler(id) {
    $('.bar p#' + id).addClass('enter').next().addClass('next');
}