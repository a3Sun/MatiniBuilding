$(".fade-in").css("opacity",0);
$(".fade-inBack").css("opacity",0);

$(document).ready(function() {



    $(window).scroll( function(){

      var topOfGalleryTitle = $("#galleryTitle").offset().top;
      var middle_of_window = $(window).scrollTop() + ($(window).height()/2);

      if( middle_of_window > topOfGalleryTitle ){

           $("#galleryTitle").css("position","sitcky");

      }

        });

    });
