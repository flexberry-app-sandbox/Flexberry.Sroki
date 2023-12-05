import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  трудозатраты: DS.attr('number'),
  проект: DS.belongsTo('i-i-s-sroki-проект', { inverse: null, async: false }),
  участник: DS.belongsTo('i-i-s-sroki-участник', { inverse: null, async: false })
});

export let ValidationRules = {
  трудозатраты: {
    descriptionKey: 'models.i-i-s-sroki-календарь.validations.трудозатраты.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  проект: {
    descriptionKey: 'models.i-i-s-sroki-календарь.validations.проект.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  участник: {
    descriptionKey: 'models.i-i-s-sroki-календарь.validations.участник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КалендарьE', 'i-i-s-sroki-календарь', {
    трудозатраты: attr('Трудозатраты', { index: 0 }),
    участник: belongsTo('i-i-s-sroki-участник', 'Участник', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    проект: belongsTo('i-i-s-sroki-проект', 'Проект', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('КалендарьL', 'i-i-s-sroki-календарь', {
    трудозатраты: attr('Трудозатраты', { index: 0 }),
    участник: belongsTo('i-i-s-sroki-участник', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true }),
    проект: belongsTo('i-i-s-sroki-проект', 'Наименование', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
