"use strict";

app.controller("StudentViewCtrl", function($scope, $routeParams, StudentFactory){
	$scope.selectedStudent = {};
	let studentId = $routeParams.studentId;

	StudentFactory.getSingleStudent(studentId).then(function(oneStudent){
		oneStudent.id = studentId;
		$scope.selectedStudent = oneStudent;
	});
});
