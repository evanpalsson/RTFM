angular.module('rtfmApp');

	app.controller('loginCtrl', function($scope, $location, EnvironmentService){

		$scope.login = function(username){
			EnvironmentService.saveUsername(username);
			console.log(EnvironmentService.getUsername());
			$location.path('/threads');
		}



	});
	