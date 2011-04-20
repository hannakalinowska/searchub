describe('Searchub', function() {
  describe('#initialize', function() {
    it('calls insertStyles and showSearch', function() {
      spyOn(Searchub, 'insertStyles');
      spyOn(Searchub, 'showSearch');

      Searchub.initialize();

      expect(Searchub.insertStyles).toHaveBeenCalled();
      expect(Searchub.showSearch).toHaveBeenCalled();
    });
  });

  describe('#insertStyles', function() {
    it('inserts style tag into head', function() {
      loadFixtures('dashboard.html');
      Searchub.insertStyles();
      expect($('head style')).toExist();
    });
  });

  describe('#showSearch', function() {
    it('loads the search form into the page', function() {
      loadFixtures('dashboard.html');
      Searchub.showSearch();
      expect($('#searchub_filter')).toExist();
    });
  });

  describe('#filter', function() {
    it('filters by username or repo', function() {
      spyOn(Searchub, 'buildQuery');

      Searchub.filter('rickastley');

      expect(Searchub.buildQuery).toHaveBeenCalled();
    });
  });

  describe('#buildQuery', function() {
    it('returns an object with lists of user/repo names', function() {
      spyOn(Searchub, 'extractUserNames');
      spyOn(Searchub, 'extractRepoNames');
      spyOn(Searchub, 'buildUserQuery');
      spyOn(Searchub, 'buildRepoQuery');

      Searchub.buildQuery('repo:node user:astley');

      expect(Searchub.extractUserNames).toHaveBeenCalled();
      expect(Searchub.extractRepoNames).toHaveBeenCalled();
      expect(Searchub.buildUserQuery).toHaveBeenCalled();
      expect(Searchub.buildRepoQuery).toHaveBeenCalled();
    });
  });

  describe('#extractUserNames', function() {
    it('returns an array of specified user names', function() {
      expect(Searchub.extractUserNames('rick repo:node user:astley')).toEqual(['rick', 'astley']);
    });
  });

  describe('#extractRepoNames', function() {
    it('returns an array of specified repo names', function() {
      expect(Searchub.extractRepoNames('rick repo:node user:astley')).toEqual(['rick', 'node']);
    });
  });

  describe('#buildUserQuery', function() {
    it('builds a user CSS query from an array of user names', function() {
      expect(Searchub.buildUserQuery(['rick', 'astley'])).
        toEqual('a[href=/rick], a[href=/astley]');
    });
  });

  describe('#buildRepoQuery', function() {
    it('builds a repo CSS query from an array of repo names', function() {
      expect(Searchub.buildRepoQuery(['rick', 'node'])).
        toEqual('a[href$=/rick]', 'a[href$=/node]');
    });
  });
});
