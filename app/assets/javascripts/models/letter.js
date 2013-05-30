App.Letter = DS.Model.extend({
  author: DS.attr('string', { defaultValue: 'Timmy'}),
  pitch: DS.attr('string', {  defaultValue: 'I have really tried to be good this year.'}),
  ask: DS.attr('string', { defaultValue: 'Please bring me'}),
  gifts: DS.hasMany('App.Gift')
});
