import Ember from 'ember';

export default Ember.Component.extend({
  showListingEditForm: false,
  actions: {
    toggleEditForm() {
      console.log(this.showListingEditForm);
      this.set('showListingEditForm', true);
    },
    edit(listing) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        content: this.get('content'),
        location: this.get('location'),
        image: this.get('image'),
        category: this.get('category'),
      };
      this.set('showListingEditForm', false);
      this.sendAction('edit', listing, params);
    },
    delete(listing) {
      this.sendAction('delete', listing);
    }

  }
});
