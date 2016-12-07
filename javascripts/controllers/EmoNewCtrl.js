"use strict";

app.controller("EmoNewCtrl", function($scope, $rootScope, $location, EmoFactory){
	$scope.newEmo = {};

	$scope.addNewEmo = function(){
		$scope.newEmo.isSelected = false;
		$scope.newEmo.uid = $rootScope.user.uid;
		EmoFactory.postNewEmo($scope.newEmo).then(function(emoId){
			$location.url("/emotions/list");
			$scope.newEmo = {};
		});
	};
});

console.log("EmoNewCtrl")