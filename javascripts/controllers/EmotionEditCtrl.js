"use strict";

app.controller("EmotionEditCtrl", function($scope, $location, $routeParams, EmotionFactory) {
  $scope.newEmotion= {};

  let getEmotions = function(){
    EmotionFactory.getEmotionList($rootScope.student.emotionId).then(function(fbEmotions){
      $scope.emotions = fbEmotions;
    });
  };

  getEmotions();
  $scope.deleteEmotion = function(emotionId){
    EmotionFactory.deleteEmotion(emotionId).then(function(response){
      getEmotions();
    });
  };

  $scope.inputChange = function(inputDiff){
    EmotionFactory.editEmotion(inputDiff).then(function(response){
      getEmotions();
    });
  };
  $scope.newEmotions = {};
  $location.url("/users/emotions/list");

});
