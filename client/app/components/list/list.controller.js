function ListController(ListService) {
    var ctrl = this;
    this.$onInit = function() {
        ctrl.name ='xD';
        ctrl.lists = ListService.getLists();
    }

    this.walk = function () {
        console.log("I'm walking");
    };
}
angular
    .module('list')
    .controller('ListController', ListController);
