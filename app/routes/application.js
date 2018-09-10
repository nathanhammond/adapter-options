import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return this.store.findRecord('post', '1').then((response) => {
      return RSVP.hash({
        comments: response.hasMany('comments').load({ adapterOptions: { from: 'hasMany' } }),
        author: response.belongsTo('author').load({ adapterOptions: { from: 'belongsTo' } })
      });
    }).then(result => {
      // debugger;
      return result;
    });
  }
});
