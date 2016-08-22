import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: moment().format('M/D/YYYY'),
        content: this.get('content'),
        image: this.get('image'),
        category: this.get('category'),
      };
      this.sendAction('save', params);
    }
  }
});
