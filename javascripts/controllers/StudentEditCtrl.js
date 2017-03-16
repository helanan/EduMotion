
"use strict";

app.controller("StudentEditCtrl", function($scope, $location, $routeParams, StudentFactory){

	$scope.title = "Edit Student";
	$scope.btnText = "Update";
	$scope.newStudentObject = {};


//se studentId variable to the route params by its studentId
	let studentId = $routeParams.studentId;


	StudentFactory.getSingleStudent(studentId)
	.then(function successCallback(response){
		console.log("getSingleItemresponse", response);
		$scope.newStudentObject = response;
	});

	$scope.addNewStudent = function(){
		StudentFactory.updateStudent($routeParams.studentId, $scope.newStudentObject)
		.then(function successCallback(response){
			console.log(response);
			// $scope.newStudentObject = {};
			$location.url("/students/list");
		});
	};
});
