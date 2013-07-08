
/*
 * GET users listing.
 */

exports.list = function(req, res){
  // phantom = require('phantom');
  var page = require('webpage').create(),
    // system = require('system'),
    address, output, size;

  if (false) {
      console.log('Usage: rasterize.js URL filename [paperwidth*paperheight|paperformat] [zoom]');
      console.log('  paper (pdf output) examples: "5in*7.5in", "10cm*20cm", "A4", "Letter"');
      phantom.exit(1);
  } else {
      address = 'http://scanwise.cl';
      output = 'scnw.png';
      page.viewportSize = { width: 1200, height: 800 };
      if (true) {
          size = "20cm*20cm".split('*');
          page.paperSize = size.length === 2 ? { width: size[0], height: size[1], margin: '0px' }
                                             : { format: "20cm*20cm", orientation: 'portrait', margin: '1cm' };
      }
      if (true) {
          page.zoomFactor = 2;
      }
      page.open(address, function (status) {
          if (status !== 'success') {
              console.log('Unable to load the address!');
              phantom.exit();
          } else {
              window.setTimeout(function () {
                  page.render(output);
                  phantom.exit();
              }, 200);
          }
      });
  }
};