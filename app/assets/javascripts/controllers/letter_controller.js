App.LetterController = Em.ObjectController.extend({
  addGift: function() {
    var gift = this.get('newGift');

    if (gift.get('name')) {
      this.get('gifts').addObject(gift);
      this.reset();
    }
  },

  reset: function() {
    this.set('newGift', this.transaction.createRecord(App.Gift, {}));
  },

  sendToSanta: function() {
    this.transaction.commit();
  },

  cancelLetter: function() {
    this.transaction.rollback();  
  },

  deleteGift: function(gift) {
    this.get('gifts').removeObject(gift);
  }
});
