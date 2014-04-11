define(function(require) {
    'use strict';

    var angular = require('angular');
    require('a/a');
    require('components/b/b');

    angular.module('notifications-app', [
        'module-a',
        'module-b'
    ])

    .controller('MasterCtrl', function($scope, $timeout, hello, world) {
        $scope.loaded = true;
        console.log(hello + ' ' + world);
    });

    angular.bootstrap(document.documentElement, [ 'notifications-app' ]);
});
