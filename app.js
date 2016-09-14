
(function(){

	angular.module('konduki', ['ngRoute','ui.bootstrap', 'angular-loading-bar', 'service.module',
			'konduki.plans',
		])


	// App Routes
	.config(function($routeProvider, $locationProvider) {

		// Use the HTML5 History API
	    $locationProvider.html5Mode(true);
		$locationProvider.hashPrefix('!');
		
		$routeProvider
			.when('/', {
				templateUrl : 'home/home.html',
				controller  : 'MainController',
				controllerAs : 'mainCtrl'
			})

			.otherwise({
		        redirectTo: '/'
		    });
	})

	// Run
	.run(['$rootScope','$location', '$routeParams', function($rootScope, $location, $routeParams) {
	    $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
	    	// console.log('Current route name: ' + $location.path());

	    	// Tracking Current Location for Google Analytics 
	    	// ga('send', 'pageview', $location.path());

	    });
	}])


	// Main Controller
	.controller('MainController', ['$http','$location', '$routeParams', '$rootScope', '$scope', 'CurrentData', function($http, $location, $routeParams, $rootScope, $scope, CurrentData) {
		var mainCtrl = this;
		mainCtrl.sendingLead = false;
		mainCtrl.formDiv = true;

		// Meta tags
		$rootScope.robot = mMainRobot;
		$rootScope.pageTitle = mMainTitle;
		$rootScope.pageDescription = mMainPageDescription;
		$rootScope.ogPageDescription = mMainOgPageDescription;
		$rootScope.ogPageImage = mMainOgPageImage;
		$rootScope.ogPageTitle = mMainOgPageTitle;
		$rootScope.url = 'http://konduki.co'+ $location.path();
		$rootScope.twitterDescription = mMainTwitterDescription;
		$rootScope.twitterImage = mMainTwitterImage;



	}])



})();