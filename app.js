if(window.location.host === 'github.com') {
  var baseUrl = 'http://localhost/searchub/';

  var a = document.getElementsByTagName('head')[0];
  var b = document.createElement('script');
  b.type = 'text/javascript';
  b.src = baseUrl + 'src/searchub.js';
  a.appendChild(b);

else {
  alert("You're not on Github!");
}
  var timeout = setInterval(function() {
    if(typeof(Searchub) != 'undefined') {
      initializeSearchub();
      clearInterval(timeout);
    }
  }, 100);

  function initializeSearchub() {
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
  }

