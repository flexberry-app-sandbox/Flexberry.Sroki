import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  бюджет: DS.attr('number'),
  наименование: DS.attr('string'),
  срок: DS.attr('string')
});

export let ValidationRules = {
  бюджет: {
    descriptionKey: 'models.i-i-s-sroki-проект.validations.бюджет.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-sroki-проект.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  срок: {
    descriptionKey: 'models.i-i-s-sroki-проект.validations.срок.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПроектE', 'i-i-s-sroki-проект', {
    бюджет: attr('Бюджет', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    срок: attr('Срок', { index: 2 })
  });

  modelClass.defineProjection('ПроектL', 'i-i-s-sroki-проект', {
    бюджет: attr('Бюджет', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    срок: attr('Срок', { index: 2 })
  });
};
