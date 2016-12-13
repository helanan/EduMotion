"use strict";

app.controller("EmoNewCtrl", function($scope, $rootScope, $location, EmoFactory){
  	$scope.newValue = {};

	$scope.addNewEmotion = function(){
	  $scope.newValue.isCompleted = false;
	  $scope.newValue.studentId = $rootScope.student.studentId;
	  EmoFactory.postNewEmotion($scope.newValue).then(function(emotionId){
	    $location.url("/emotions/list");
	    $scope.newValue = {};
	  });
  	};
});

console.log("EmoNewCtrl")
