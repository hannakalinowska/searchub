if(window.location.host !== 'github') {
  return false;
}


function showSearch() {

}

showSearch();
$('.news div.alert').each(function() {
  var currentElement = $(this);
  if(currentElement.find('a[href=/joliss]').length === 0) {
    currentElement.css('background-color', 'lightblue');
  }
});
