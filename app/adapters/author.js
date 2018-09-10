import JSONAPIAdapter from 'ember-data/adapters/json-api';
import RSVP from 'rsvp';

export default JSONAPIAdapter.extend({
  ajax() {
    return RSVP.Promise.resolve({
      "data": {
        "type": "author",
        "id": "1",
        "attributes": {
          "name": "Nathan Hammond"
        },
        "relationships": {
          "posts": {
            "data": [{"id": "1", "type": "post"}]
          }
        }
      }
    });
  },

  findRecord(store, type, id, snapshot) {
    const adapterOptions = snapshot.adapterOptions;
    console.log(adapterOptions);
    debugger;
    return this._super(...arguments);
  },

  findMany(store, type, ids, snapshots) {
    const adapterOptions = snapshots[0].adapterOptions;
    console.log(adapterOptions);
    debugger;
    return this._super(...arguments);
  }
});
