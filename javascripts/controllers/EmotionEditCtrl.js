"use strict";

app.controller("EmotionEditCtrl", function($scope, $location, $routeParams, EmotionFactory) {
console.log("Emotion Edit Control Loaded");

	$scope.title = "Edit Emotion";
	$scope.btnText = "Update";
	$scope.newEmotion = {};


//se studentId variable to the route params by its studentId
	let emotionId = $routeParams.emotionId;


	EmotionFactory.getSingleEmotion(emotionId)
	.then(function successCallback(response){
		console.log("getSingleEmotionresponse", response);
		$scope.newEmotion = response;
	});

	$scope.addNewEmotion = function(){
		EmotionFactory.updateEmotion($routeParams.emotionId, $scope.newEmotion)
		.then(function successCallback(response){
			console.log(response);
			// $scope.newStudentObject = {};
			$location.url("/students/:studentId/emotions/list");
		});
	};
});
