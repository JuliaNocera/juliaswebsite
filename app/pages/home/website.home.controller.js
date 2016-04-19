angular
	
	.module('WebsiteControllers', ['ngResource'])

	.controller('HomeCtrl', function(GetWeather, $scope, $http) {
		$scope.test = "Hello world"
	});