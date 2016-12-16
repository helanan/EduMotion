"use strict";

app.controller("StudentEditCtrl", function($scope, $location, $routeParams, StudentFactory){
	$scope.editStudent = {};
	let studentId = $routeParams.id;

	StudentFactory.getSingleStudent(studentId).then(function(oneStudent){
		oneStudent.id = studentId;
		$scope.newStudent = oneStudent;
	});

	$scope.addNewStudent = function(){
		StudentFactory.editStudent($scope.newStudent).then(function(response){
			$scope.newStudent = {};
			$location.url("/students/list");
		});
	};
});
