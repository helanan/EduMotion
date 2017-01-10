"use strict";

app.controller("StudentNewCtrl", function($scope, $rootScope, $location, StudentFactory){
	$scope.newFullName = {};
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

	$scope.addNewStudent = function(){
		$scope.newFullName.fullName = $rootScope.studentId;
		$scope.newFullName.classroomName = $rootScope.classroomName;
		$scope.newFullName.image = $rootScope.image;
		$scope.newFullName.grade = $rootScope.grade;
		$scope.newFullName.parentFirst = $rootScope.parentFirst;
		$scope.newFullName.parentLast = $rootScope.parentLast;
		$scope.newFullName.parentEmail = $rootScope.parentEmail;
		$scope.newFullName.newAddress = $rootScope.address;
		$scope.newFullName.newPhone = $rootScope.phone;
		$scope.newFullName.emergencyContact = $rootScope.emergencyContact;
		$scope.newFullName.totalScore= $rootScope.totalScore;

		StudentFactory.postNewStudent($scope.newFullName).then(function(studentId){
		 $location.url("/students/list/");
		$scope.newFullName = {};
		$scope.newClassroomName = {};
		$scope.newImage = {};
		$scope.newGrade = {};
		$scope.newParentFirst = {};
		$scope.newParentLast = {};
		$scope.newParentEmail = {};
		$scope.newAddress = {};
		$scope.newPhone = {};
		$scope.newEmergancyContact = {};
		$scope.newTotalScore = {};
		});
	};
});

console.log("StudentNewCtrl Loaded");
