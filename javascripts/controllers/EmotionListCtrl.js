"use strict";

app.controller("EmotionListCtrl", function($scope, $rootScope, EmotionFactory, AuthFactory, StudentFactory){

console.log("Emotion List Control Loaded");

// $scope.searchText = FilterFactory;
  let user = AuthFactory.getUser();
  console.log("Get User BY Emotions: ", user);



EmotionFactory.getEmotionList(user)
  .then(function(emotionCollection){
    $scope.emotions = emotionCollection;
      console.log("emotion collection: ", emotionCollection);
  });

  let getEmotions = function(){
      EmotionFactory.getEmotionList(user).then(function(fbEmotions){
          $scope.emotions = fbEmotions;
          console.log("fb Emotions", fbEmotions);
        });
      };

  getEmotions();


$scope.deleteEmotion = function(emotionId){
  EmotionFactory.deleteEmotion(emotionId).then(function(response){
    getEmotions();
  });
};

$scope.inputChange = function(emotionId){
  EmotionFactory.editEmotion(emotionId).then(function(response){
    getEmotions();
  });
};


});


//TODO: change function of thingy to a different name to avoid confusion
