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
			.when('/threads/:threadId', {
				templateUrl: 'js/threads/threads.html',
				controller: 'threadsCtrl'
			})
			.otherwise({
				redirectTo: '/login'
			})

			
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