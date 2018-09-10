import JSONAPIAdapter from 'ember-data/adapters/json-api';
import RSVP from 'rsvp';

export default JSONAPIAdapter.extend({
  ajax() {
    return RSVP.Promise.resolve({
      "data": {
        "type": "post",
        "id": "1",
        "attributes": {
          "title": "JSON API paints my bikeshed!"
        },
        "relationships": {
          "author": {
            "data": {"id": "1", "type": "author" }
          },
          "comments": {
            "data": [{"id": "1", "type": "comment"}, {"id": "2", "type": "comment"}]
          }
        }
      }
    });
  }
});
