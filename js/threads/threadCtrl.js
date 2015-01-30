angular.module('rtfmApp');

app.controller('threadCtrl', function($scope, $rootScope, threadRef, threadsService, commentsRef){

	var thread = threadRef.$asObject();

	thread.$bindTo($scope, 'thread');

	$scope.comments = commentsRef.$asArray();

	$scope.createComment = function(text) {
      $scope.comments.$add({
        username: $rootScope.username,
        text: text
      });
    };
})