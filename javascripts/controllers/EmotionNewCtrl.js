"use strict";

app.controller("EmotionNewCtrl", function($scope, $rootScope, $location, EmotionFactory){
  	$scope.newTask = {};

	$scope.addNewEmotion = function(){
	  $scope.newTask.isCompleted = false;
	  $scope.newTask.studentId = $rootScope.emotionId;

	  EmotionFactory.postNewEmotion($scope.newTask).then(function(emotionId){
	    $location.url("/emotions/list/");
	    $scope.newTask = {};
	  });
  	};
});
