var box = {
    templateUrl: "test.html"
};

angular 
    .module('test')
    .component('box', box)
    .config(function($stateProvider) {
    $stateProvider
      .state('test1', {
        url: '/test',
        component: 'box'
      });
});