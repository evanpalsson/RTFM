angular.module('rtfmApp');

app.controller('threadsCtrl', function($scope, $rootScope, threadsService, threadsThing){
	
	$scope.threads = threadsThing.$asArray();

	// $scope.threads.$loaded().then(function(threads) {
 //      console.log(threads);
 //    });

	$scope.createThread = function(title) {
      $scope.threads.$add({
        username: $rootScope.username,
        title: title
      });
    }
})