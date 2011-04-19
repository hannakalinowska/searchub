describe('Searchub', function() {
  describe('#initialize', function() {
    it('inserts styles and shows search box', function() {
      spyOn(Searchub, 'insertStyles');
      spyOn(Searchub, 'showSearch');

      Searchub.initialize();

      expect(Searchub.insertStyles).toHaveBeenCalled();
      expect(Searchub.showSearch).toHaveBeenCalled();
    });
  });
});
