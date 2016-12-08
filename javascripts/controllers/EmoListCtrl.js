"use strict";

app.controller("EmoListCtrl", function($scope, $rootScope, EmoFactory){
  $scope.emotions= [];

  let getEmotions = function(){
    EmoFactory.getEmoList($rootScope.student.uid).then(function(fbEmotions){
      $scope.emotions = fbEmotions;
    });
  };

  getEmotions();

  $scope.deleteEmo = function(emoId){
    EmoFactory.deleteEmo(emoId).then(function(response){
      getEmotions();
    });
  };

  $scope.inputChange = function(thingy){
    EmoFactory.editEmo(thingy).then(function(response){
      getEmotions();
    });
  };

});
