function ListService() {
    var lists = [   
        {
            name: 'Lista 1'
        },
        {
            name: 'Lista 2'
        }
    ]

    this.getLists = function() {
        return lists;
    }
}

angular
    .module('list')
    .service('ListService',ListService);