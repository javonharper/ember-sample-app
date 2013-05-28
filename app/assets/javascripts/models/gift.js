App.Gift = DS.Model.extend({
  name: DS.attr('string'),
  letter: DS.belongsTo('App.Letter')
});
