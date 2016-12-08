"use strict";

app.controller("EmoEditCtrl", function($scope, $location, $routeParams, EmoFactory){
	$scope.newValue= {};
	let emoId = $routeParams.id;

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
