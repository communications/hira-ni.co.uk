import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
$(document).foundation();

//slick slider
require('slick-carousel');
jQuery(document).ready(function() {
  jQuery('.uls-slick').each(function() {
    jQuery(this).slick({
      infinite: false,
    	//swipeToSlide: true,
      prevArrow: jQuery('#' + jQuery(this).data('controls-id') + ' .uls-prev'),
      nextArrow: jQuery('#' + jQuery(this).data('controls-id') + ' .uls-next'),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    var status = jQuery('#' + jQuery(this).data('controls-id') + ' .uls-paging-info');
    jQuery(this).on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        status.text(i + '/' + slick.slideCount);
    });
  });
});
