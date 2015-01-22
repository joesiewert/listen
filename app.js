'use strict';

$.getJSON('data.json', function(tracks) {
  var $playerTemplate = $("[data-template='playerTemplate']").html();
  var playerHTML = Mustache.to_html($playerTemplate, tracks);
  $("[data-body='player']").html(playerHTML);
});

$("[data-body='player']").on('click', '.play', function() {
  $('.icon').removeClass('pause').addClass('play');
  $(this).removeClass('play').addClass('pause');
});

$("[data-body='player']").on('click', '.pause', function() {
  $(this).removeClass('pause').addClass('play');
});
