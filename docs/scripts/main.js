/**
 * This is the default Javascript file
 **/
$(document).ready(function() {
  $('a.expand-collapse-anchor').on('click', function(e){
    e.preventDefault();
    var parentNode = e.currentTarget.parentNode;
    var pageContent = $(parentNode)
    pageContent.toggleClass('enable-preview');
  });

});