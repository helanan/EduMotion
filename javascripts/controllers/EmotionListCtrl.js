"use strict";

app.controller("EmotionListCtrl", function($scope, $rootScope, EmoFactory){
console.log("Emotion List Control Loaded");

//create an empty emotion arry
  $scope.emotions = [];

//create a function called getEmotions
//TODO: are we puling getEmotionList by the right credentials??

  let getEmotions= function(){
      EmoFactory.getEmotionList($rootScope.emotion.emotionId).then(function(fbEmotions){
//set the scope of emotions to link them to firebase with fbEmotions
      $scope.emotions = fbEmotions;
    });
  };

//call the function
  getEmotions();

//TODO: create function to delete emotions

  // $scope.deleteEmotion = function(emotionId){
  //   EmotionFactory.deleteEmotion(emotionId).then(function(response){
  //     getEmotions();
  //   });
  // };

//input change Handles the navbar links
//TODO: change function of thingy to a different name to avoid confusion
//TODO: Make sure all navbar links are linked up correctly with inputChange
  $scope.inputChange = function(thingy){
    EmoFactory.editEmotion(thingy).then(function(response){
      getEmotions();
    });
  };

});
