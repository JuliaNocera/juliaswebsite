angular
	
	.module('artistSite', [
		'ngRoute', 
		'WebsiteServices',
		'WebsiteControllers'
	])
	
	.config(function($routeProvider, $locationProvider) {
	  $routeProvider
	  .when('/', {
	    templateUrl: 'pages/home/website.home.view.html',
	    controller: 'HomeCtrl'
	  })
	  .when('/painting', {
	    templateUrl: 'pages/painting/website.painting.view.html',
	    controller: 'PaintingCtrl'
	  })
	  .when('/drawing', {
	    templateUrl: 'pages/drawing/website.drawing.view.html',
	    controller: 'DrawingCtrl'
	  })
	  .when('/ceramics', {
	    templateUrl: 'pages/ceramics/website.ceramics.view.html',
	    controller: 'CeramicsCtrl'
	  })
	  .when('/photos', {
	    templateUrl: 'pages/photos/website.photos.view.html',
	    controller: 'PhotosCtrl'
	  })
	  .when('/contact', {
	    templateUrl: 'pages/contact/website.contact.view.html',
	    controller: 'ContactCtrl'
	  })
	  .otherwise({
        redirectTo: '/'
      });

	});