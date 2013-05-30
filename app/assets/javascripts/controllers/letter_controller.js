App.LetterController = Em.ObjectController.extend({
  addGift: function() {
    var gift = this.get('newGift');

    if (gift.get('name')) {
      this.get('gifts').addObject(gift);
      this.reset();
    }
  },

  reset: function() {
    this.set('newGift', App.Gift.createRecord());
  },

  sendToSanta: function() {
    console.log('should persist this');
  },

  deleteGift: function(gift) {
    this.get('gifts').removeObject(gift);
  }
});
