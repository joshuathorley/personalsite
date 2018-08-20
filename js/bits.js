$(window).ready(function(){

  // Scroll position. Change to control when to change background to blue
  var windowHeight = 1000;
  var midHeight = windowHeight * 1.6;
  var twiceHeight = windowHeight * 2;

  $(function() {
     $(window).scroll(function () {
        if ($(document).scrollTop() > 2000) {
           $('.scrollbg')
           .removeClass('removeColor')
           .addClass('changeColor')
        }
        if ($(document).scrollTop() < 2000) {
           $('.scrollbg')
           .removeClass('changeColor')
           .addClass('removeColor')
        }
     });
  });

  $(function() {
     $(window).scroll(function () {
        if ($(document).scrollTop() > 2000) {
           $('.herobg')
           .removeClass('fadeInScroll')
           .addClass('fadeOutScroll')
        }
        if ($(document).scrollTop() < 2000) {
           $('.herobg')
           .removeClass('fadeOutScroll')
           .addClass('fadeInScroll')
        }
     });
  });

  $(function() {
     $(window).scroll(function () {
        if ($(document).scrollTop() > 2120) {
           $('.contactsection')
           .removeClass('fadeOutScroll')
           .addClass('fadeInScroll')
        }
        if ($(document).scrollTop() < 2120) {
           $('.contactsection')
           .removeClass('fadeInScroll')
           .addClass('fadeOutScroll')
        }
     });
  });

  $('.projectlink').hover(
       function(){ $('.focusme').removeClass('focusme') },
       function(){ $(this).addClass('focusme') }
  )

  $('.projectlink.one').hover(
       function(){ $('.projectimgone').addClass('appear') }
  )

  $('.projectlink.two').hover(
       function(){ $('.projectimgone').removeClass('appear') }
  )

  $('.projectlink.three').hover(
       function(){ $('.projectimgone').removeClass('appear') }
  )

  $(function() {
     $(window).scroll(function () {
        if ($(document).scrollTop() < 900) {
           $('.featuredimgs')
           .addClass('disappear')
        }
        if ($(document).scrollTop() > 900) {
           $('.featuredimgs')
           .removeClass('disappear')
           .addClass('reappear')
        }
     });
  });


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
        duration: windowHeight*0.75,
        triggerHook: 0.5,
        gap: 0,
        reverse: true
    })
    .setPin('#greycircle')
    .addTo(controller);
  });

});
