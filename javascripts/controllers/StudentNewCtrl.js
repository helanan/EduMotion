"use strict";

app.controller("StudentNewCtrl", function($scope, $rootScope, $location, StudentFactory, AuthFactory){

console.log("Controller: Student New Controller Loaded");

let user = AuthFactory.getUser();
console.log("authfact", AuthFactory.getUser());
//binding to Student New Partial
$scope.title = "Add A New Student";
$scope.btnText = "Submit";

$scope.newStudentObject = {
		fullName: "",
		classroomName: "",
		image: "",
		gradeLevel: "",
		parentFirst: "",
		parentLast: "",
		parentEmail: "",
		address: "",
		emergencyNumber: "",
		totalScore: "0",
		uid: user.uid
	};


$scope.addNewStudent = function() {

		StudentFactory.postNewStudent($scope.newStudentObject)
		.then(function(response) {
		 $location.url("/students/list/");
	 });
	 $scope.newStudentObject = {};
 };
 });
