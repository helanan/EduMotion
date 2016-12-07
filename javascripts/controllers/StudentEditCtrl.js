"use strict";

app.controller("StudentEditCtrl", function($scope, $location, $routeParams, StudentFactory){
	$scope.newEmo = {};
	let studentId = $routeParams.id;

	StudentFactory.getSingleStudent(studentId).then(function(oneStudent){
		oneStudent.id = studentId;
		$scope.newEmotion = oneStudent;
	});

	$scope.addNewStudent = function(){
		StudentFactory.editStudent($scope.newEmotion).then(function(response){
			$scope.newStudent = {};
			$location.url("/students/list");
		});
	};
});