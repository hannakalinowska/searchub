if(window.location.host === 'github.com') {
  Searchub.initialize();

  $('#searchub_filter').live('submit', function() {
    Searchub.filter($('#searchub_filter input[type=text]').attr('value'));
    return false;
  });
  $('#searchub_filter a.reset').live('click', function() {
    Searchub.filter();
    return false;
  });
  $('#searchub_filter a.close').live('click', function() {
    $(this).parents('#searchub_filter').slideUp('fast');
    $('.searchub_style').remove();
    return false;
  });

else {
  alert("You're not on Github!");
}
