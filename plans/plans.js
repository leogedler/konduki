'use strict';

angular.module('konduki.plans', ['ngRoute', 'service.module'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/plans', {
    templateUrl: 'plans/plans.html',
    controller: 'PlansCtrl',
    controllerAs : 'plansCtrl'
  })
}])

.controller('PlansCtrl', ['$http', '$rootScope', '$location','CurrentData', function($http, $rootScope, $location, CurrentData) {
	var plansCtrl = this;
	plansCtrl.sendingLead = false;
	plansCtrl.plan1 = false;
	plansCtrl.plan2 = false;
	plansCtrl.plan3 = false;
	plansCtrl.plan4 = false;
	plansCtrl.plans = true;
	plansCtrl.form = false;
	plansCtrl.message = false;

	// Meta tags
	$rootScope.robot = mPlansRobot;
	$rootScope.pageTitle = mPlansTitle;
	$rootScope.pageDescription = mPlansPageDescription;
	$rootScope.ogPageDescription = mPlansOgPageDescription;
	$rootScope.ogPageImage = mPlansOgPageImage;
	$rootScope.ogPageTitle = mPlansOgPageTitle;
	$rootScope.url = 'http://konduki.co'+ $location.path();
	$rootScope.twitterDescription = mPlansTwitterDescription;
	$rootScope.twitterImage = mPlansTwitterImage;


	this.registerLead = function(){
		plansCtrl.sendingLead = true;

		if (plansCtrl.plan1) {
			plansCtrl.lead.plan = 'Start up';
		}else if(plansCtrl.plan2){
			plansCtrl.lead.plan = 'Company';
		}else if(plansCtrl.plan3){
			plansCtrl.lead.plan = 'Agency';
		}else if(plansCtrl.plan4){
			plansCtrl.lead.plan = 'Custom';
		}


    	// Register lead
		$http({
    		method : 'POST', 
			headers: mPostPutHeaderJson,
			data: plansCtrl.lead,
    		url : apiUrl+'/classes/Leads'

    		}).success(function(data){
    			console.log(data);	
    			plansCtrl.lead = {};
    			plansCtrl.sendingLead = false;
    			plansCtrl.form = false;
    			plansCtrl.message = true;

    		}).error(function(data){
    			console.log(data);
    			plansCtrl.sendingLead = false;

    		});


	}

}]);