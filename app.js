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

    var title = '<h2>Now playing: <em>' + $(this).attr('data-title') + '</em></h2>';
    $("[data-header='playerHeader'] h2").html(title);

    var file = 'tracks/' + $(this).attr('data-track') + '.mp3';
    $('audio').attr('src', file);

    var track = document.getElementsByTagName('audio')[0];
    track.play();
  });

  $("[data-body='player']").on('click', '.pause', function() {
    $(this).removeClass('pause').addClass('play');

    var title = '<h2>Select a track!</h2>';
    $("[data-header='playerHeader'] h2").html(title);

    var track = document.getElementsByTagName('audio')[0];
    track.pause();
  });

});
