'use strict';

angular.module('primesApp.view', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view', {
        templateUrl: 'view/view.html',
        controller: 'ViewCtrl'
      });
    }])

    .controller('ViewCtrl', ['$scope', function($scope) {
      $scope.model = {
        n: 0,
        firstNPrimes: []
      };

      $scope.getPrimes = function(n) {

        //the first prime number is 2
        var firstNPrimes = [2];

        //if more than 1 prime number is requested
        if(n > 1) {
          //the second prime number is 3
          firstNPrimes.push(3);
          //skip 4 as divisible by 2 and set the first number to check as 5
          var primeNumber = 5;

          while (firstNPrimes.length < n) {
            var innerCounter = 0;
            var isPrime = true;

            //check if number is prime
            while(firstNPrimes[innerCounter] <= Math.sqrt(primeNumber)) {
              if(primeNumber % firstNPrimes[innerCounter] === 0) {
                isPrime = false;
                break;
              }

              innerCounter++;
            }

            if(isPrime)	{
              firstNPrimes.push(primeNumber);
            }
            //omit even numbers as these are always divisible by 2
            primeNumber += 2;
          }
        }

        $scope.model.firstNPrimes = firstNPrimes;
        return firstNPrimes;
      };
    }]);