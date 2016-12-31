"use strict";

app.controller("StudentNewCtrl", function($scope, $rootScope, $location, StudentFactory){
	$scope.newTask = {};
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

	$scope.addNewStudent = function(){
		$scope.newTask.uid = $rootScope.user.uid;
		$scope.newClassroomName = $rootScope.user.classroomName;
		$scope.newImage = $rootScope.user.image;
		$scope.newGrade = $rootScope.user.grade;
		$scope.newParentFirst = $rootScope.user.parentFirst;
		$scope.newParentLast = $rootScope.user.parentLast;
		$scope.newParentEmail = $rootScope.user.parentEmail;
		$scope.newAddress = $rootScope.user.address;
		$scope.newPhone = $rootScope.user.phone;
		$scope.newEmergancyContact = $rootScope.user.emergancyContact;
		$scope.newTotalScore= $rootScope.user.totalScore;

		StudentFactory.postNewStudent($scope.newTask).then(function(studentId){
		 $location.url("/students/list/");
		$scope.newTask = {};
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
