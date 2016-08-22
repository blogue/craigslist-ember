import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model(params) {
    var apiKey = config.myApiKey;
    return Ember.RSVP.hash({
      listing: this.store.findRecord('listing', params.listing_id),
      key: apiKey
    });
  },
  actions: {
    edit(listing, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          listing.set(key, params[key]);
        }
      });
      listing.save();
      this.transitionTo('listing', listing);
    },
    delete(listing) {
      listing.destroyRecord();
      this.transitionTo('index');
    }
  }
});
