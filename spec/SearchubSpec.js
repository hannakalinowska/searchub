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
});
