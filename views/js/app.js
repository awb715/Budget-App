//will load the proper questions on the page
//https://github.com/kswedberg/jquery-smooth-scroll
var quest = ['../partials/income.hbs', '../partials/state.hbs', '../partials/zip.hbs', '../partials/roomate.hbs'];
var iterator = 0;
//creates object that gets sent to api
function Obj(name, val) {
    event.preventDefault();
    $('.form').load(quest[iterator]).addClass('animated fadeIn');
    if (name) {
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