import JSONAPIAdapter from 'ember-data/adapters/json-api';
import RSVP from 'rsvp';

const comments = [{
  "type": "comment",
  "id": "1",
  "attributes": {
    "body": "1- JSON API paints my bikeshed!"
  }
},
{
  "type": "comment",
  "id": "2",
  "attributes": {
    "body": "2- JSON API paints my bikeshed!"
  }
}];

let requestCount = 0;

export default JSONAPIAdapter.extend({
  coalesceFindRequests: true,

  ajax() {
    if (this.coalesceFindRequests) {
      return RSVP.Promise.resolve({
        "data": comments
      });
    } else {
      return RSVP.Promise.resolve({
        "data": comments[requestCount++]
      });
    }
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
