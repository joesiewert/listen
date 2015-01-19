$.getJSON('data.json', function(tracks) {
  var $playerTemplate = $('#playerTemplate').html();
  var playerHTML = Mustache.to_html($playerTemplate, tracks);
  $('#player').html(playerHTML);
})
