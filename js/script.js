

$('#btn2').on('click', () => {
  $('#mw').fadeOut("slow");
  $('#btnShow').fadeIn("slow");
}
);

$('#btnShow').click(function (e) {
  $(this).fadeOut('slow');
  var id = $('#mw');
  var winH = $(window).height();
  var winW = $(window).width();
  id.css('top', winH / 2 - id.height() / 2); /* centering */
  id.css('left', winW / 2 - id.width() / 2);
  id.fadeIn("slow");
});
