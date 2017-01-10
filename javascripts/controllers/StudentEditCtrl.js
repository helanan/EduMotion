
"use strict";

app.controller("StudentEditCtrl", function($scope, $location, $routeParams, StudentFactory){
	$scope.newFullName = {};

	let studentId = $routeParams.studentId;

	StudentFactory.getSingleStudent(studentId).then(function(oneStudent){
		oneStudent.id = studentId;
		$scope.newFullName = oneStudent;
	});

	$scope.addNewStudent = function(){
		StudentFactory.editStudent($scope.newFullName).then(function(response){
			$scope.newFullName = {};
			$location.url("/students/list");
		});
	};
});
