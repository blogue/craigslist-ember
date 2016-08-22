import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: moment().format('h:mm a, M/D/YYYY'),
        content: this.get('content'),
        image: this.get('image') ? this.get('image'): "https://www.craigslist.org/images/peace.jpg",
        category: this.get('category'),
      };
      this.sendAction('save', params);
    }
  }
});
