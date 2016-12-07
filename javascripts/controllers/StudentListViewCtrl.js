"use strict";

app.controller("StudentListViewCtrl", function($scope, $routeParams, StudentFactory){
	$scope.selectedStudent = {};
	let StudentId = $routeParams.id;

	StudentFactory.getSingleStudent(studentId).then(function(oneStudent){
		oneStudent.id=studentId;
		$scope.selectedStudent = oneStudent;
	});
});