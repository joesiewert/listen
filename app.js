'use strict';
$(document).ready(function() {

  $.getJSON('data.json', function(tracks) {
    var $playerTemplate = $('#playerTemplate').html();
    var playerHTML = Mustache.to_html($playerTemplate, tracks);
    $('#player').html(playerHTML);
  });

  $('#player').on('click', '.play', function() {
    $('.icon').removeClass('stop').addClass('play');
    $(this).removeClass('play').addClass('stop');

    var title = 'Now playing: <em>' + $(this).attr('data-title') + '</em>';
    $('#playerHeader h2').html(title);

    var file = 'tracks/' + $(this).attr('data-file') + '.mp3';
    $('audio').attr('src', file);
    $('audio')[0].play();
  });

  $('#player').on('click', '.stop', function() {
    $(this).removeClass('stop').addClass('play');

    var title = 'Select a song!';
    $('#playerHeader h2').html(title);

    $('audio')[0].pause();
  });

});
