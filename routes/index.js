
/*
 * GET home page.
 */

exports.index = function(req, res){

  phantom = require('phantom')
  // phantom = require('node-phantom')


  phantom.create(function(ph){
    ph.createPage(function(page) {
      // console.log(page);
      page.set('settings.userAgent', "User-Agent:Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36");
      // 

      // page.paperSize = {
      //   format: "Letter",
      //   orientation: "portrait",
      //   margin: {left:"2.5cm", right:"2.5cm", top:"10cm", bottom:"1cm"}
      // };
      // page.zoomFactor = 10.0;
      // page.paperSize = { format: "20cm*20cm", orientation: 'portrait', margin: '10cm' };
      // page.set('zoomFactor', 10);
      // page.set('paperSize', { format: "20cm*20cm", orientation: 'portrait', margin: '1cm' } );
      
      // page.set('viewportSize', {width:1200,height:800});
      // page.set('viewportSize', {width:40,height:40});
      // page.set('paperSize', { 
      //   // format: "20cm*30cm", 
      //   format: "20cm*30cm", 
      //   orientation: 'portrait', 
      //   margin: {
      //       left:"2.5cm", 
      //       right:"2.5cm", 
      //       top:"1cm", 
      //       bottom:"1cm"
      //     } 
      //   } 
      // );
      page.set('paperSize', { 
        // format: "20cm*30cm", 
        // format: "2cm*2cm", 
        width: '8cm',
        height: '12cm',
        orientation: 'portrait', 
        margin: {
            left:"0.0cm", 
            right:"0.0cm", 
            top:"0.0cm", 
            bottom:"0.0cm"
          } 
        } 
      );

      var url = '';
      url = 'http://knockoutjs.com/examples/grid.html';
      url = 'http://scanwise.cl/campaign';
      url = 'http://scanwise.cl/campaign/phantom';
      // page.open("http://scanwise.cl/campaign", function(status) {
      // page.open("http://en.wikipedia.org/w/index.php?title=Jakarta&printable=yes", function(status) {
      // page.open("http://chimera.labs.oreilly.com/books/1234000001654/ch01.html", function(status) {
      // page.open("http://nodejs-knockout.scanwise.cl/full", function(status) {
      page.open(url, function(status) {
        
        console.log("opened site? ", status);
        page.evaluate(function() {
          // document.body.bgColor = 'red';
        });
        // page.evaluate(function() {
        //   // console.log(finishedLoading);
        //   var temp = document.getElementById('algo');
        //   console.log(temp);
        // });
        setTimeout(function() {
          // console.log(finishedLoading);
          page.render('salida.pdf', function(){
            console.log('Page Rendered');
            ph.exit();
          });
          // page.render('salida.pdf');
        }, 0);
      });
    });
  });


  console.log(req.headers);

  res.send('hola');
};