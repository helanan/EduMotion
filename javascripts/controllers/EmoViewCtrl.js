"use strict";

app.controller("EmoViewCtrl", function($scope, $routeParams, EmoFactory){
	$scope.selectedEmo = {};
	let emoId = $routeParams.studentId;

	EmoFactory.getSingleEmo(emoId).then(function(oneEmo){
<<<<<<< HEAD
		oneEmo.studentId = emoId;
=======
		oneEmo.id = emoId;
>>>>>>> 9c08756148b309fc1c648ba8597d630245ece61d
		$scope.selectedEmo = oneEmo;
	});
});
console.log("EmoNewCtrl")
