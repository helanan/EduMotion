"use strict";

app.controller("EmotionViewCtrl", function($scope, $routeParams, EmotionFactory){
$location.url("/emotions/new");
	$scope.emotions = {};
	let emotionId = $routeParams.emotions.Id;

	EmotionFactory.getSingleEmotion(emotionId).then(function(oneEmotion){
		oneEmotion.id=emotionId;
		$scope.selectedEmotion = oneEmotion;
	});
});
