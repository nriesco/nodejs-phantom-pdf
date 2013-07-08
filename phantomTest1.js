// var phantom = require('phantom');
var page = require('webpage').create(),
    url = 'http://scanwise.cl/campaign/phantom';

// url = 'http://google.com';
page.open(url, function (status) {

    setTimeout(function () {
        page.render('salida.pdf');

    }, 1000);
});
