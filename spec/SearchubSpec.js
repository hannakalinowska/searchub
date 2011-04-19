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
      loadFixtures('spec/fixtures/dashboard.html');
      Searchub.insertStyles();
      expect($('head style').length).toEqual(1);
    });
  });
});
