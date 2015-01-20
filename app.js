'use strict';

$.getJSON('data.json', function(tracks) {
  var $playerTemplate = $('#playerTemplate').html();
  var playerHTML = Mustache.to_html($playerTemplate, tracks);
  $('#player').html(playerHTML);
})

$('.container').on('click', '.play', function() {
  $('.icon').removeClass('pause').addClass('play');
  $(this).removeClass('play').addClass('pause');
})

$('.container').on('click', '.pause', function() {
  $(this).removeClass('pause').addClass('play');
})
