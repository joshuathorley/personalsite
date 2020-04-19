$(document).ready(function() {
  $('[data-tooltip]').hover(function(){
    $('<div class="div-tooltip"></div>').text($(this).attr('data-tooltip')).appendTo('body').fadeIn('fast');
  }, function() {
    $('.div-tooltip').remove();
  }).mousemove(function(e) {
    $('.div-tooltip').css({ top: e.pageY + 10, left:  e.pageX + 20 })
  });
});
