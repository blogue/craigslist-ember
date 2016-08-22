import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        name: this.get('name')
      };
      this.sendAction('save', params);
      this.set('name', null);
    }
  }
});
