import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISSrokiКалендарьLForm from './forms/i-i-s-sroki-календарь-l';
import IISSrokiПроектLForm from './forms/i-i-s-sroki-проект-l';
import IISSrokiУчастникLForm from './forms/i-i-s-sroki-участник-l';
import IISSrokiКалендарьEForm from './forms/i-i-s-sroki-календарь-e';
import IISSrokiПроектEForm from './forms/i-i-s-sroki-проект-e';
import IISSrokiУчастникEForm from './forms/i-i-s-sroki-участник-e';
import IISSrokiКалендарьModel from './models/i-i-s-sroki-календарь';
import IISSrokiПроектModel from './models/i-i-s-sroki-проект';
import IISSrokiУчастникModel from './models/i-i-s-sroki-участник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-sroki-календарь': IISSrokiКалендарьModel,
    'i-i-s-sroki-проект': IISSrokiПроектModel,
    'i-i-s-sroki-участник': IISSrokiУчастникModel
  },

  'application-name': 'Sroki',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Sroki',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sroki',
          title: 'Sroki'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        sroki: {
          caption: 'Sroki',
          title: 'Sroki',
          'i-i-s-sroki-проект-l': {
            caption: 'Проект',
            title: ''
          },
          'i-i-s-sroki-участник-l': {
            caption: 'Участник',
            title: ''
          },
          'i-i-s-sroki-календарь-l': {
            caption: 'Календарь',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-sroki-календарь-l': IISSrokiКалендарьLForm,
    'i-i-s-sroki-проект-l': IISSrokiПроектLForm,
    'i-i-s-sroki-участник-l': IISSrokiУчастникLForm,
    'i-i-s-sroki-календарь-e': IISSrokiКалендарьEForm,
    'i-i-s-sroki-проект-e': IISSrokiПроектEForm,
    'i-i-s-sroki-участник-e': IISSrokiУчастникEForm
  },

});

export default translations;
