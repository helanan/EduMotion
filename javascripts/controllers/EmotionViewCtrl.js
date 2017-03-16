"use strict";

app.controller("EmotionViewCtrl", function($scope, $routeParams, EmotionFactory){

console.log("Emotion View Control Loaded");

//set selectedEmotion scope to an empty object
	$scope.selectedEmotion = {};
//set emotionId variable to routeParams variable
//TODO: double check on $routeParams
	let emotionId = $routeParams.id;

//access the emotion factory in order to get a Single Emotion by their emotion
//then call a function to set the variable oneEmotion's id to emotionId
//TODO: rename "oneEmotion" variable, double check on setting single Emotion id to Emotion ID
	EmotionFactory.getSingleEmotion(emotionId).then(function(oneEmotion){
		oneEmotion.id = emotionId;
		//set the scope of the selected Emotion to oneEmotion
		$scope.selectedEmotion = oneEmotion;
	});
});
