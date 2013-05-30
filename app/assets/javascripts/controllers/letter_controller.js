App.LetterController = Em.ObjectController.extend({
  gifts:  [],

  addGift: function() {
    var gift = this.get('newGift');

    if (gift.get('name')) {
      this.get('gifts').addObject(gift);

      gift = giftsTransaction.createRecord(App.Gift, {});
      this.set('newGift', gift);
    }
  },

  setup: function() {
    letterTransaction = this.get('store').transaction();
    giftsTransaction = this.get('store').transaction();

    this.letterTransaction = letterTransaction;
    this.giftsTransaction = giftsTransaction;

    this.set('content', letterTransaction.createRecord(App.Letter, {}));
    this.set('newGift', giftsTransaction.createRecord(App.Gift, {}));
    this.set('gifts', []);
  },

  reset: function() {
    this.letterTransaction.rollback();
    this.giftsTransaction.rollback();

    this.setup();
  },

  sendToSanta: function() {
    var letterT = this.letterTransaction;
    var giftsT = this.giftsTransaction;
    var letter = this.get('content');
    var gifts = this.get('gifts');

    this.get('newGift').deleteRecord();

    letter.one('didCreate', this, function() {
      gifts.forEach(function(gift) {
        gift.set('letter', letter);
      });

      Ember.run.next(function() {
        giftsT.commit();
      });
    });

    letterT.commit();
    this.setup();
  },

  cancelLetter: function() {
    this.reset();
  },

  deleteGift: function(gift) {
    this.get('gifts').removeObject(gift);
    gift.deleteRecord();
  }
});
