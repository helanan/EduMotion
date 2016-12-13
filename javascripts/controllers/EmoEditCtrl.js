"use strict";

app.controller("EmoEditCtrl", function($scope, $location, $routeParams, EmoFactory){
	$scope.newValue = {};
	let emotionId = $routeParams.studentId;

<<<<<<< HEAD
	EmoFactory.getSingleEmotion(emotionId).then(function(oneEmotion){
		oneEmotion.studentId = emotionId;
		$scope.newValue = oneEmotion;
	});

	$scope.addNewEmotion = function(){
EmoFactory.editEmo($scope.newValue).then(function(response){
=======
	EmoFactory.getSingleEmo(emoId).then(function(oneEmo){
		oneEmo.id = emoId;
		$scope.newValue = oneEmo;
	});

	$scope.addNewEmo = function(){
		EmoFactory.editEmo($scope.newValue).then(function(response){
>>>>>>> 9c08756148b309fc1c648ba8597d630245ece61d
			$scope.newValue = {};
			$location.url("/emotions/list");
		});
	};
});

console.log("EmoEditCtrl")
