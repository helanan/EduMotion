"use strict";

app.controller("StudentNewCtrl", function($scope, $rootScope, $location, StudentFactory, AuthFactory){

console.log("Controller: Student New Controller Loaded");

let user = AuthFactory.getUser();
console.log("User: ", "Email: " + user.email, "uid: " + user.uid, "Display Name: " + user.displayName, "Email Verified: " + user.emailVerified);
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
		uid: user
	};
	console.log("newStudentObj called: A New Student Object has now been created with empty properties", $scope.newStudentObject);

$scope.addNewStudent = function() {
	console.log("Lets call the function to add a new student");

		StudentFactory.postNewStudent($scope.newStudentObject)
		.then(function(response) {
		 $location.url("/students/list/");
		 console.log("Lets post a new student to /students/list");
	 });
	console.log("New Student Added with the newStudentObject: ", $scope.newStudentObject);
	 $scope.newStudentObject = {};

	 console.log("cleared the scoped data!", $scope.newStudentObject);
 };
 });
