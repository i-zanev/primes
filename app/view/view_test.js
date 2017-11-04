'use strict';

describe('primesApp.view module', function() {
    var $scope;

    beforeEach(module('primesApp.view'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        $controller('ViewCtrl', {
            $scope: $scope
        });
    }));

    describe('gets prime numbers', function(){

        it('calculates 10000 primes', function() {
            var primes = $scope.getPrimes(10000);
            expect(primes[9999]).toBe(104729);
        });

        it('calculates 20000 primes', function() {
            var primes = $scope.getPrimes(20000);
            expect(primes[19999]).toBe(224737);
        });

    });
});