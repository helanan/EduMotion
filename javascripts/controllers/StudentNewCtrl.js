"use strict";

app.controller("StudentNewCtrl", function($scope, $rootScope, $location, StudentFactory){
	$scope.newTask = {};

	$scope.addNewStudent = function(){
		$scope.newTask.uid = $rootScope.user.uid;
		$scope.newClassroomName = $rootScope.user.classroomName;
		StudentFactory.postNewStudent($scope.newTask).then(function(studentId){
		 $location.url("/students/list/");
		$scope.newTask = {};
		});
	};
});

console.log("StudentNewCtrl Loaded");
