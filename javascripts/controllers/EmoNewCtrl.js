"use strict";

app.controller("EmoNewCtrl", function($scope, $rootScope, $location, EmoFactory){
  	$scope.newValue = {};

	$scope.addNewEmo = function(){
	  $scope.newValue.isSelected = false;
	  $scope.newValue.uid = $rootScope.student.uid;
	  EmoFactory.postNewEmo($scope.newValue).then(function(emoId){
	    $location.url("/emotions/list");
	    $scope.newValue = {};
	  });
  	};
});
