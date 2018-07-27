$(window).ready(function(){

  // Scroll position. Change to control when to change background to blue
  var windowHeight = window.innerHeight;
  var midHeight = windowHeight * 1.6;
  var twiceHeight = windowHeight * 2;

  $(function() {
     $(window).scroll(function () {
        if ($(document).scrollTop() > midHeight) {
           $('.scrollbg')
           .removeClass('removeColor')
           .addClass('changeColor')
        }
        if ($(document).scrollTop() < midHeight) {
           $('.scrollbg')
           .removeClass('changeColor')
           .addClass('removeColor')
        }
     });
  });

  $('.projectlink').hover(
       function(){ $('.focusme').removeClass('focusme') },
       function(){ $(this).addClass('focusme') }
  )

  $('.projectlink.two').hover(
       function(){ $('#greycircle').addClass('testclasslol') }
  )

  $('.projectlink.three').hover(
       function(){ $('#greycircle').removeClass('testclasslol') }
  )


  $(function () {
      $('.textcarousel').marquee({
           duration: 24000,
           duplicated: true,
           direction: 'left',
           pauseOnHover: false,
           loop: 'infinite',
           delayBeforeStart: 0,
           startVisible: true
      });
  });

  $(function() {
    var controller = new ScrollMagic.Controller();
    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#pausetrigger',
        duration: windowHeight*0.8,
        triggerHook: 0.5,
        gap: 0,
        reverse: true
    })
    .setPin('#greycircle')
    .addTo(controller);
  });

});
