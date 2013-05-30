DS.RESTAdapter.map('App.Letter', {
    gifts: {
      embedded: 'always'
    }
});

App.Store = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.create()
});
