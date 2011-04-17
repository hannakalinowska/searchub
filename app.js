if(window.location.host === 'github.com') {
  $('#searchub_filter').live('submit', function() {
    filter($('#searchub_filter input[type=text]').attr('value'));
    return false;
  });
  $('#searchub_filter a.reset').live('click', function() {
    unfilter();
    return false;
  });
  $('#searchub_filter a.close').live('click', function() {
    $(this).parents('#searchub_filter').slideUp('fast');
    $('.searchub_style').remove();
    return false;
  });

  function insertStyles() {
    var style = '<style type="text/css" class="searchub_style"> \
      #searchub_filter { \
        -moz-border-radius: 5px; \
        background: url("https://github.com/images/modules/pagehead/tab_background.gif?v2") repeat-x scroll 0 0 transparent; \
        border: 1px solid #dddddd; \
        height: 26px; \
        padding: 6px 10px; \
        margin: -3px 0 0 16px;\
        width: 500px; \
      } \
      #searchub_filter .close { \
        float: right; \
      } \
    </style>';
    $('head').append(style);
  }

  function showSearch() {
    var html = '<div> \
      <form id="searchub_filter"> \
        <input type="text" /> \
        <input type="submit" value="Filter"/> \
        or \
        <a href="#" class="reset">reset</a> \
        <a href="#" class="close">close</a> \
      </form> \
    </div>';
    $('.pagehead').append(html);
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

  function unfilter() {
    $('.news div.alert').show();
  }

  insertStyles();
  showSearch();
}
else {
  alert("You're not on Github!");
}
