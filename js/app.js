var app = angular.module('rtfmApp', ['ngRoute', 'firebase']);

	app.config(function($routeProvider){
		$routeProvider

			.when('/login', {
				templateUrl: 'js/login/login.html',
				controller: 'loginCtrl'
			})			

			.when('/threads', {
				templateUrl: 'js/threads/threads.html',
				controller: 'threadsCtrl',
				resolve: {
					threadsThing: function(threadsService){
						return threadsService.getThreads();
					}
				}
			})			

			.when('/thread/:threadId', {
				templateUrl: 'js/threads/thread.html',
				controller: 'threadCtrl',
				resolve: {
					threadRef: function(threadsService, $route){
						return threadsService.getThread($route.current.params.threadId);
					},
					commentsRef: function(threadsService, $route){
			      		return threadsService.getComments($route.current.params.threadId);
			    	}
				}		
			})
			
			.otherwise({
				redirectTo: '/login'
			});

			
	}).run(function($rootScope, $location, EnvironmentService){
				$rootScope.$on('$routeChangeStart', function(event, next, current){
					if(EnvironmentService.getUsername()){
						$rootScope.username = EnvironmentService.getUsername();
					}
					else {
						$location.path('/login')
					}
				})
			});