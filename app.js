'use strict';
$(document).ready(function() {

  $.getJSON('data.json', function(tracks) {
    var $playerTemplate = $("[data-template='playerTemplate']").html();
    var playerHTML = Mustache.to_html($playerTemplate, tracks);
    $("[data-body='player']").html(playerHTML);
  });

  $("[data-body='player']").on('click', '.play', function() {
    $('.icon').removeClass('pause').addClass('play');
    $(this).removeClass('play').addClass('pause');

    $('audio').each(function(i, element) {
      element.pause();
    });

    var id = $(this).data('id');
    var track = document.getElementsByTagName('audio')[id];
    track.load();
    track.play();
  });

  $("[data-body='player']").on('click', '.pause', function() {
    $(this).removeClass('pause').addClass('play');

    var id = $(this).data('id');
    var track = document.getElementsByTagName('audio')[id];
    track.pause();
  });

});
