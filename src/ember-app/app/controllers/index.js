import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.sroki.caption'),
          title: i18n.t('forms.application.sitemap.sroki.title'),
          children: [{
            link: 'i-i-s-sroki-проект-l',
            caption: i18n.t('forms.application.sitemap.sroki.i-i-s-sroki-проект-l.caption'),
            title: i18n.t('forms.application.sitemap.sroki.i-i-s-sroki-проект-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-sroki-участник-l',
            caption: i18n.t('forms.application.sitemap.sroki.i-i-s-sroki-участник-l.caption'),
            title: i18n.t('forms.application.sitemap.sroki.i-i-s-sroki-участник-l.title'),
            icon: 'chart line',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.календарь.caption'),
          title: i18n.t('forms.application.sitemap.календарь.title'),
          children: [{
            link: 'i-i-s-sroki-календарь-l',
            caption: i18n.t('forms.application.sitemap.календарь.i-i-s-sroki-календарь-l.caption'),
            title: i18n.t('forms.application.sitemap.календарь.i-i-s-sroki-календарь-l.title'),
            icon: 'tags',
            children: null
          }]
        }
      ]
    };
  }),
})