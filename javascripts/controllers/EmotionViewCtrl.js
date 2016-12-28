"use strict";

app.controller("EmotionViewCtrl", function($scope, $routeParams, EmotionFactory){
	$scope.selectedEmotion = {};
	let emotionId = $routeParams.id;

	EmotionFactory.getSingleEmotion(emotionId).then(function(oneEmotion){
		oneEmotion.id=emotionId;
		$scope.selectedEmotion = oneEmotion;
	});
});
