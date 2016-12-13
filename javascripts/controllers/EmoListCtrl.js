"use strict";

app.controller("EmoListCtrl", function($scope, $rootScope, EmoFactory){
  $scope.emotions = [];

  let getEmotions= function(){
  EmoFactory.getEmotionList($rootScope.student.studentId).then(function(fbEmotions){
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
