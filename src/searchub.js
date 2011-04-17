var Searchub = {
  initialize: function() {
    this.insertStyles();
    this.showSearch();
  },

  filter: function(query) {
    var userQuery = 'href=/' + query;
    var repoQuery = 'href$=/' + query;

    $('.news div.alert').each(function() {
      var currentElement = $(this);
      if(currentElement.find('a[' + repoQuery + ']').length === 0) {
        currentElement.hide();
      }
      else {
        currentElement.show();
      }
    });
  },

  unfilter: function() {
    $('.news div.alert').show();
  },

  insertStyles: function() {
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
  },

  showSearch: function() {
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
};
