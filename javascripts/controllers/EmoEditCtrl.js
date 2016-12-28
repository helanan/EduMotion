"use strict";

app.controller("EmoEditCtrl", function($scope, $location, $routeParams, EmoFactory){
	$scope.newValue = {};
	let emotionId = $routeParams.studentId;

	EmoFactory.getSingleEmo(emoId).then(function(oneEmo){
		oneEmo.id = emoId;
		$scope.newValue = oneEmo;
	});

	$scope.addNewEmo = function(){
		EmoFactory.editEmo($scope.newValue).then(function(response){
			$scope.newValue = {};
			$location.url("/emotions/list");
		});
	};
});

console.log("EmoEditCtrl")
