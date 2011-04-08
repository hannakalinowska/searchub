if(window.location.host === 'github.com') {
  $('#searchub_filter').live('submit', function() {
    filter($('#searchub_filter input[type=text]').attr('value'));
    return false;
  });

  function showSearch() {
    $('.pagehead').append('<div><form id="searchub_filter">Filter: <input type="text" /><input type="submit" name="ok"/></form></div>');
  }

  function filter(query) {
    $('.news div.alert').each(function() {
      var currentElement = $(this);
      if(currentElement.find('a[href=/' + query + ']').length === 0) {
        currentElement.hide();
      }
      else {
        currentElement.show();
      }
    });
  }

  showSearch();
}
else {
  alert("You're not on Github!");
}
