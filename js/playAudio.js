$("a").each(function(index) {
  var element = $(this);
  if(element.data() != null && element.data('musicFile') != null) {
    // This is a music link
    (function() {
      var myelement = element;
      var song = element.data('musicFile');
      element.click(function() {
        $('#musicplayer').attr('src', song);
        $('#musicplayer').trigger('play');
        return false;
      });
    })();
  }
});
$("a").each(function(index) {
  if($(this).attr('class') == 'stop') {
    $(this).click(function() {
      $('#musicplayer').trigger('pause');
      return false;
    });
  }
});