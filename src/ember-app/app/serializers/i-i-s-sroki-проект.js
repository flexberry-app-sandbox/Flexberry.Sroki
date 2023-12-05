import { Serializer as ПроектSerializer } from
  '../mixins/regenerated/serializers/i-i-s-sroki-проект';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПроектSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
