var Searchub = {
  initialize: function() {
    this.insertStyles();
    this.showSearch();
  },

  filter: function(formInput) {
    var cssQuery = this.buildQuery(formInput);

    $('.news div.alert').each(function() {
      var currentElement = $(this);
      if(currentElement.find(cssQuery).length) {
        currentElement.show();
      }
      else {
        currentElement.hide();
      }
    });
  },

  buildQuery: function(query) {
    var userNames = this.extractUserNames(query);
    var repoNames = this.extractRepoNames(query);

    var userCssQuery = this.buildUserQuery(userNames);
    var repoCssQuery = this.buildRepoQuery(repoNames);

    var cssQuery = [userCssQuery, repoCssQuery].join(', ');
    return cssQuery;
  },

  extractUserNames: function(query) {
    var userNames = [];
    var elements = query.split(' ');

    for(var i in elements) {
      if(name = elements[i].match(/^(?:user:)?(\w+)$/)) {
        userNames.push(name[1]);
      }
    }

    return userNames;
  },

  extractRepoNames: function(query) {
    var repoNames = [];
    var elements = query.split(' ');

    for(var i in elements) {
      if(name = elements[i].match(/^(?:repo:)?(\w+)$/)) {
        repoNames.push(name[1]);
      }
    }

    return repoNames;
  },

  buildUserQuery: function(userNames) {
    var userQuery = [];
    for(var i in userNames) {
      userQuery.push('a[href=/' + userNames[i] + ']');
    }
    return userQuery.join(', ');
  },

  buildRepoQuery: function(repoNames) {
    var repoQuery = [];
    for(var i in repoNames) {
      repoQuery.push('a[href$=/' + repoNames[i] + ']');
    }
    return repoQuery.join(', ');
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
