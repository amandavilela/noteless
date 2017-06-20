(function () {
    angular.module('myApp')
        .config(['$stateProvider', '$urlRouterProvider', function appConfig($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/notes');
        }])
})();
