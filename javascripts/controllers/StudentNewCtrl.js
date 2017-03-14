"use strict";

app.controller("StudentNewCtrl", function($scope, $rootScope, $location, StudentFactory, AuthFactory){

let user = AuthFactory.getUser();

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
	console.log("new full name", $scope.newStudentObject);



console.log("students obj loaded");
	// $scope.newClassroomName = {};
	// $scope.newImage = {};
	// $scope.newGrade = {};
	// $scope.newParentFirst = {};
	// $scope.newParentLast = {};
	// $scope.newParentEmail = {};
	// $scope.newAddress = {};
	// $scope.newPhone = {};
	// $scope.newEmergancyContact = {};
	// $scope.newTotalScore = {};



		// $scope.newFullName.classroomName = $rootScope.classroomName;
		// $scope.newFullName.image = $rootScope.image;
		// $scope.newFullName.grade = $rootScope.grade;
		// $scope.newFullName.parentFirst = $rootScope.parentFirst;
		// $scope.newFullName.parentLast = $rootScope.parentLast;
		// $scope.newFullName.parentEmail = $rootScope.parentEmail;
		// $scope.newFullName.newAddress = $rootScope.address;
		// $scope.newFullName.newPhone = $rootScope.phone;
		// $scope.newFullName.emergencyContact = $rootScope.emergencyContact;
		// $scope.newFullName.totalScore= $rootScope.totalScore;

$scope.addNewStudent = function() {
	console.log("add new student");

		StudentFactory.postNewStudent($scope.newFullName)
		.then(function(response) {
		 $location.url("/students/list/");
	 });
	 $scope.newFullName = {};
 };

 });
// 		$scope.newFullName = {};
// 		$scope.newClassroomName = {};
// 		$scope.newImage = {};
// 		$scope.newGrade = {};
// 		$scope.newParentFirst = {};
// 		$scope.newParentLast = {};
// 		$scope.newParentEmail = {};
// 		$scope.newAddress = {};
// 		$scope.newPhone = {};
// 		$scope.newEmergancyContact = {};
// 		$scope.newTotalScore = {};
// 		});
// 	};
// });

console.log("StudentNewCtrl Loaded");
