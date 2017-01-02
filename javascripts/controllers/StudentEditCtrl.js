"use strict";

app.controller("StudentEditCtrl", function($scope, $location, $routeParams, StudentFactory){
	$scope.title = "Edit Item";
	$scope.submitButtonText = "Update"
	$scope.newTask = {};
	
	let studentId = $routeParams.id;

	StudentFactory.getSingleStudent(studentId).then(function(oneStudent){
		oneStudent.id = studentId;
		$scope.newTask = oneStudent;
	});

	$scope.addNewStudent = function(){
		StudentFactory.editStudent($scope.newTask).then(function(response){
			$scope.newTask = {};
			$location.url("/students/list");
		});
	};
});
