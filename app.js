if(window.location.host === 'github.com') {
  function showSearch() {

  }

  showSearch();
  $('.news div.alert').each(function() {
    var currentElement = $(this);
    if(currentElement.find('a[href=/joliss]').length === 0) {
      currentElement.css('background-color', 'lightblue');
    }
  });
}
else {
  alert("You're not on Github!");
}
