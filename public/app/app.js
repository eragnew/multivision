angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $routeProvider
    .when('/', { templateUrl: '/partials/main', controller: 'mainCtlr' });
});

angular.module('app').controller('mainCtlr', function($scope) {
  $scope.myVar = 'hello angular!';
});
