'use strict';

angular.module('service.module', [])


/* Factories */

// Current data factory
.factory("CurrentData", ['$http', '$q', function($http, $q){

	return {

		getVideos: function(ref){
			return $http(
					{
					method: 'GET',
					headers: mGetHeaderJson,
					params: {
						// 'where':{
						// 	'reference': ref
						// },
			         	'include':'instructor.userPointer'
					},
					url: apiUrl+'/classes/Videos'
					});
		},

	};
}]);
