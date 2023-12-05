import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Sroki',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Sroki',
          title: 'Sroki'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
        },
        календарь: {
          caption: 'Календарь',
          title: 'Календарь',
          'i-i-s-sroki-календарь-l': {
            caption: 'Календарь',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
