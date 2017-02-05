angular
  .module('components', [
    'components.auth',
    'test',
    'list'
  ]);

require('./auth/auth.module');
require('./test/test.module');
require('./list/list.module');