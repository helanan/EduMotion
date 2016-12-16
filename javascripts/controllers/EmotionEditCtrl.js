"use strict";

app.controller("EmotionEditCtrl", function($scope, $rootScope, EmotionFactory){
  $scope.editEmotion= [];

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

  $scope.inputChange = function(thingy){
    EmoFactory.editEmotion(thingy).then(function(response){
      getEmotions();
    });
  };
  $location.url("/emotions/new");
  $scope.newEmotions = {};

});
