import { Serializer as КалендарьSerializer } from
  '../mixins/regenerated/serializers/i-i-s-sroki-календарь';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КалендарьSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
