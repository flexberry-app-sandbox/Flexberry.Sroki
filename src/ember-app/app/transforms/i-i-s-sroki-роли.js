import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ролиEnum from '../enums/i-i-s-sroki-роли';

export default FlexberryEnum.extend({
  enum: ролиEnum,
  sourceType: 'IIS.Sroki.роли'
});
