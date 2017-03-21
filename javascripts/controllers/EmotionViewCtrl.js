"use strict";

app.controller("EmotionViewCtrl", function($scope, $routeParams, EmotionFactory){

console.log("Emotion View Control Loaded");

$scope.currentUser = {};
console.log("Selected Emotion :", $scope.currentUser);

let emotionId = $routeParams.emotionId;

EmotionFactory.getSingleEmotion(emotionId).then(function(oneEmotion){
	oneEmotion.id = emotionId;
	$scope.selectedEmotion = oneEmotion;
});
});
