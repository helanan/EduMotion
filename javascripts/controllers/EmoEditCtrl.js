"use strict";

app.controller("EmoEditCtrl", function($scope, $location, $routeParams, EmoFactory){
	$scope.newValue = {};
	let emotionId = $routeParams.studentId;

	EmoFactory.getSingleEmotion(emotionId).then(function(oneEmotion){
		oneEmotion.studentId = emotionId;
		$scope.newValue = oneEmotion;
	});

	$scope.addNewEmotion = function(){
EmoFactory.editEmo($scope.newValue).then(function(response){
			$scope.newValue = {};
			$location.url("/emotions/list");
		});
	};
});

console.log("EmoEditCtrl")
