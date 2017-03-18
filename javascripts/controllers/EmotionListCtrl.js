"use strict";

app.controller("EmotionListCtrl", function($scope, $rootScope, EmotionFactory, AuthFactory){

console.log("Emotion List Control Loaded");

// $scope.searchText = FilterFactory;
  let user = AuthFactory.getUser();
  console.log("Get User BY Emotions: ", user);

EmotionFactory.getEmotionList(user)
  .then(function(emotionCollection){
    $scope.emotions = emotionCollection;
      console.log("emotion collection: ", emotionCollection);
  });

$scope.emotionDelete = function(emotionId){
  console.log("delete this item", emotionId);
  EmotionFactory.deleteEmotion(emotionId)
  .then(function(response){
    EmotionFactory.getEmotionList(user)
    .then(function(emotionCollection){
        $scope.emotions = emotionCollection;
          console.log("emotion collection", emotionCollection);
      });
    });
  };
$scope.inputChange = function(emotion){
  EmotionFactory.updateCompletedStatus(emotion)
  .then(function(response){
    console.log(response);
  });
};
});
//create a function called getEmotions
// //TODO: are we puling getEmotionList by the right credentials??
//
//   let getEmotions = function(){
//       EmotionFactory.getEmotionList($rootScope.emotion.emotionId).then(function(fbEmotions){
// //set the scope of emotions to link them to firebase with fbEmotions
//       $scope.emotions = fbEmotions;
//     });
//   };
//
// //call the function
//   getEmotions();

//TODO: create function to delete emotions

  // $scope.deleteEmotion = function(emotionId){
  //   EmotionFactory.deleteEmotion(emotionId).then(function(response){
  //     getEmotions();
  //   });
  // };

//input change Handles the navbar links
//TODO: change function of thingy to a different name to avoid confusion
//TODO: Make sure all navbar links are linked up correctly with inputChange
//   $scope.inputChange = function(thingy){
//     EmotionFactory.editEmotion(thingy).then(function(response){
//       getEmotions();
//     });
//   };
//
// });
