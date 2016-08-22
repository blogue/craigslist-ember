import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    save(params) {
      console.log(params);
      var newListing = this.store.createRecord('listing', params);
      var cat = params.category;
      cat.get('listings').addObject(newListing);
      newListing.save().then(function(){
        return cat.save();
      });
      this.transitionTo('category', params.category);
    }
  }
});
