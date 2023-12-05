import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-sroki-календарь-l');
  this.route('i-i-s-sroki-календарь-e',
  { path: 'i-i-s-sroki-календарь-e/:id' });
  this.route('i-i-s-sroki-календарь-e.new',
  { path: 'i-i-s-sroki-календарь-e/new' });
  this.route('i-i-s-sroki-проект-l');
  this.route('i-i-s-sroki-проект-e',
  { path: 'i-i-s-sroki-проект-e/:id' });
  this.route('i-i-s-sroki-проект-e.new',
  { path: 'i-i-s-sroki-проект-e/new' });
  this.route('i-i-s-sroki-участник-l');
  this.route('i-i-s-sroki-участник-e',
  { path: 'i-i-s-sroki-участник-e/:id' });
  this.route('i-i-s-sroki-участник-e.new',
  { path: 'i-i-s-sroki-участник-e/new' });
});

export default Router;
