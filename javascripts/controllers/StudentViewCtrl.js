"use strict";

app.controller("StudentViewCtrl", function($scope, $routeParams, AuthFactory, StudentFactory){
	$scope.currentUser = {};
	console.log("Selected Student :", $scope.currentUser);
	let studentId = $routeParams.studentId;

	StudentFactory.getSingleStudent(studentId).then(function(oneStudent){
		oneStudent.id = studentId;
		$scope.selectedStudent = oneStudent;
	});
});
console.log("Student View Control Loaded Fifth");
