(function () {
    angular.module('myApp')
        .controller('AppCtrl', AppController);

    AppController.$inject = ['$log', '$state', '$rootScope', '$scope', '$location'];

    function AppController($log, $state, $rootScope, $scope, $location) {

        vm = this;
        vm.pageTitle ='Noteless';

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (angular.isDefined(toState.data.pageTitle)) {
                vm.pageTitle = toState.data.pageTitle;
                console.log(vm.pageTitle);
            }
        });
    };
})();
