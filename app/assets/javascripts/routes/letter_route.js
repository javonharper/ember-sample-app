App.LetterRoute = Em.Route.extend({
  setupController: function(controller) {
    controller.transaction = controller.get('store').transaction();
    controller.set('content', controller.transaction.createRecord(App.Letter, {}));
    controller.set('newGift', controller.transaction.createRecord(App.Gift, {}));
  }
});
