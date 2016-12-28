"use strict";

app.controller("EmoViewCtrl", function($scope, $routeParams, EmoFactory){
	$scope.selectedEmo = {};
	let emoId = $routeParams.studentId;

	EmoFactory.getSingleEmo(emoId).then(function(oneEmo){
		oneEmo.studentId = emoId;
		$scope.selectedEmo = oneEmo;
	});
});
console.log("EmoNewCtrl")
