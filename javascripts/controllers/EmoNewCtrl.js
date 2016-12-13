"use strict";

app.controller("EmoNewCtrl", function($scope, $rootScope, $location, EmoFactory){
  	$scope.newValue = {};

<<<<<<< HEAD
	$scope.addNewEmotion = function(){
	  $scope.newValue.isCompleted = false;
	  $scope.newValue.studentId = $rootScope.student.studentId;
	  EmoFactory.postNewEmotion($scope.newValue).then(function(emotionId){
=======
	$scope.addNewEmo = function(){
	  $scope.newValue.isSelected = false;
	  $scope.newValue.uid = $rootScope.student.uid;
	  EmoFactory.postNewEmo($scope.newValue).then(function(emoId){
>>>>>>> 9c08756148b309fc1c648ba8597d630245ece61d
	    $location.url("/emotions/list");
	    $scope.newValue = {};
	  });
  	};
});

console.log("EmoNewCtrl")
