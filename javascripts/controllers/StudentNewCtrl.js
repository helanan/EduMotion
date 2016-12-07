"use strict";

app.controller("StudentNewCtrl", function($scope, $rootScope, $location, StudentFactory){
	$scope.newStudent = {};

	$scope.addNewStudent = function(){
		$scope.newStudent.isSelected = false;
		$scope.newStudent.uid = $rootScope.user.uid;
		StudentFactory.postNewStudent($scope.newStudent).then(function(studentId){
			$location.url("/students/list");
			$scope.newStudent = {};
		});
	};
});

console.log("StudentNewCtrl")