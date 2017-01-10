"use strict";

app.controller("EmotionNewCtrl", function($scope, $rootScope, $location, EmotionFactory){
  	$scope.newFullName = {};

	$scope.addNewEmotion = function(){
	  $scope.newFullName.isCompleted = false;
	  $scope.newFullName.studentId = $rootScope.emotionId;

	  EmotionFactory.postNewEmotion($scope.newFullName).then(function(emotionId){
	    $location.url("/emotions/list/");
	    $scope.newFullName = {};
	  });
  	};
});
