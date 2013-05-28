App.Letter = DS.Model.extend({
  author: DS.attr('string'),
  pitch: DS.attr('string'),
  ask: DS.attr('string'),
  gifts: DS.hasMany('App.Gift')
});
