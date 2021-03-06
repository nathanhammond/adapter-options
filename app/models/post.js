import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title: attr(),
  comments: hasMany('comments'),
  author: belongsTo('author')
});
