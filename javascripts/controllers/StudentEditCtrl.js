"use strict";

app.controller("StudentEditCtrl", function($scope, $location, $routeParams, StudentFactory){
	$scope.newName = {};
	let studentId = $routeParams.id;

	StudentFactory.getSingleStudent(studentId).then(function(oneStudent){
		oneStudent.id = studentId;
		$scope.newName = oneStudent;
	});

	$scope.addNewStudent = function(){
		StudentFactory.editStudent($scope.newName.then(function(response){
			$scope.newName = {};
			$location.url("/students/list");
		});
	};
});

console.log("StudentEditCtrl")
