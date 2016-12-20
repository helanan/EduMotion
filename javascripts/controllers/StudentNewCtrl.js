"use strict";

app.controller("StudentNewCtrl", function($scope, $rootScope, $location, StudentFactory){
	$scope.newTask = {};

	$scope.addNewStudent = function(){
		$scope.newTask.uid = $rootScope.user.uid;
		StudentFactory.postNewStudent($scope.newTask).then(function(studentId){
		 $location.url("/student/list/");
		$scope.newTask = {};
		});
	};
});

console.log("StudentNewCtrl Loaded");
