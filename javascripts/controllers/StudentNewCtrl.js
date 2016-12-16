"use strict";

app.controller("StudentNewCtrl", function($scope, $rootScope, $location, StudentFactory){
	$scope.newStudent= {};
	let studentId = $routeParams.id;

	$scope.addNewStudent = function(){
								$scope.newStudent.name = $rootScope.student.name;
								$scope.newStudent.studentId = $rootScope.student.studentId;
								StudentFactory.postNewStudent($scope.newStudent).then(function(studentId){
									  $location.url("/students/new");
									$scope.newStudent = {};
		});
	};
});

console.log("StudentNewCtrl")
