(function() {

    'use strict';

    var app = angular.module('app', [ 'ngRoute', 'ui.router', 'rzModule' ]);

    app.config(config);
    app.run(run);

    config.$inject = [ '$stateProvider' ];
    function config($stateProvider) {

        $stateProvider.state('view', {
            url : '/',
            controller : "ViewController",
            templateUrl : 'main.view.html',
            controllerAs : 'vm'
        })

    }

    run.$inject = [ '$rootScope', '$log', '$state' ];

    function run($scope, $log, $state) {
        $state.go("view");
    }

})();
