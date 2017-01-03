"use strict";

app.controller("EmotionListCtrl", function($scope, $rootScope, EmoFactory){
  $scope.emotions = [];

  let getEmotions= function(){
  EmoFactory.getEmotionList($rootScope.emotion.emotionId).then(function(fbEmotions){
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
    })
  };

});
