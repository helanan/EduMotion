"use strict";

app.controller("EmotionEditCtrl", function($scope, $location, $routeParams, EmotionFactory) {
console.log("Emotion Edit Control Loaded");

//TODO: see what newEmotion scope is actually scoped to
  $scope.newEmotion= {};
  console.log("New Emotion Empty Object Created", $scope.newEmotion);

  let getEmotions = function(){
      EmotionFactory.getEmotionList($rootScope.student.emotionId).then(function(fbEmotions){
      $scope.emotions = fbEmotions;
      console.log("fbEmotions: ", fbEmotions);
      console.log("created a getEmotions function to call");
    });
  };

  getEmotions();

  $scope.deleteEmotion = function(emotionId){
  EmotionFactory.deleteEmotion(emotionId).then(function(response){
    getEmotions();
    });
    console.log("deleted emotions by emotionId");
  };

  $scope.inputChange = function(inputDiff){
    EmotionFactory.editEmotion(inputDiff).then(function(response){
      getEmotions();
    });
  };

  $scope.newEmotions = {};
  console.log("Now Lets Go to students/Emotions/List");
  $location.url("/students/emotions/list");

});
