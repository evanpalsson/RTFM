angular.module('rtfmApp');

app.service('threadsService', function($firebase, EnvironmentService){
	var firebaseUrl = EnvironmentService.getEnv().firebase;
	this.getThreads = function(){
		return $firebase(new Firebase(firebaseUrl + '/threads'));
	}

	this.getThread = function(id){
		return $firebase(new Firebase(firebaseUrl + '/threads/' + id))
	}
})

		// var url = EnvironmentService.getEnv().firebase;
		// var ref = new Firebase(url); //this is vanilla javascript way
		// var thing = $firebase(ref) //this is the angular way to connect firebase
		// var thingObject = thing.$asObject();
		// var thingArray = thing.$asArray();