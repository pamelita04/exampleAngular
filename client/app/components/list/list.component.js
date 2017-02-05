var myList = {
    templateUrl: 'list.html',
    controller: "ListController"
}

angular
    .module('list')
    .component('list', myList)
    .config(function($stateProvider) {
    $stateProvider
      .state('myList', {
        url: '/list',
        component: 'list'
      });
});