'use strict';

angular.module('primesApp.view', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view', {
        templateUrl: 'view/view.html',
        controller: 'ViewCtrl'
      });
    }])

    .controller('ViewCtrl', ['$scope', function($scope) {
      $scope.n = 0;
    }]);