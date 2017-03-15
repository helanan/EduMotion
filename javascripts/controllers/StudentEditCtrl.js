
"use strict";

app.controller("StudentEditCtrl", function($scope, $location, $routeParams, StudentFactory){
console.log("Controller: Edit A Student Control Loaded");

//scope the new student object to an empty object
//TODO: is this correct? wouldnt it clear values?
	$scope.newStudentObject = {};
	console.log("New Student Empty Object Created in Edit Mode", $scope.newStudentObject);

//se studentId variable to the route params by its studentId
	let studentId = $routeParams.studentId;
	console.log("Route Params Set to StudentId: ", studentId);

	StudentFactory.getSingleStudent(studentId).then(function(oneStudent){
		oneStudent.id = studentId;
		$scope.newStudentObject = oneStudent;
	});

	$scope.addNewStudent = function(){
		StudentFactory.editStudent($scope.newFullName).then(function(response){
			$scope.newStudentObject = {};
			$location.url("/students/list");
		});
	};
});
