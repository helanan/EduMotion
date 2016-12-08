"use strict";

app.controller("EmoViewCtrl", function($scope, $routeParams, EmoFactory){
	$scope.selectedEmo = {};
	let emoId = $routeParams.id;

	EmoFactory.getSingleEmo(emoId).then(function(oneEmo){
		oneEmo.id=emoId;
		$scope.selectedEmo = oneEmo;
	});
});
