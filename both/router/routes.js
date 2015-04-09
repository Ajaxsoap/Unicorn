Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/enrollment', {
  name: 'enrollments'
});

Router.route('/claims', {
  name: 'claims'
});

Router.route('/users', {
  name: 'users'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard','enrollments','claims','users']
});
