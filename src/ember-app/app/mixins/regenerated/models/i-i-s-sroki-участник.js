import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  роль: DS.attr('i-i-s-sroki-роли'),
  фИО: DS.attr('string')
});

export let ValidationRules = {
  роль: {
    descriptionKey: 'models.i-i-s-sroki-участник.validations.роль.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-sroki-участник.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УчастникE', 'i-i-s-sroki-участник', {
    фИО: attr('ФИО', { index: 0 }),
    роль: attr('Роль', { index: 1 })
  });

  modelClass.defineProjection('УчастникL', 'i-i-s-sroki-участник', {
    фИО: attr('ФИО', { index: 0 }),
    роль: attr('Роль', { index: 1 })
  });
};
