"use strict";

app.controller("EmotionNewCtrl", function($scope, $rootScope, $location, EmotionFactory){
console.log("New Emotion Control Loaded");

//scoped newEmotion set to an empty object
//TODO: make sure newEmotion is scoped correctly to partial
  $scope.newEmotionObject = {};

//call the function from the emotion factory addNewEmotion
	$scope.addNewEmotion = function(){
//TODO: make sure New Emotion is scoped ro the right thing in partial
	  $scope.newEmotionObject.studentId = $rootScope.emotionId;

//post a New Emotion by pulling values its scoped to and call the function with a value of emotionId
	  EmotionFactory.postNewEmotion($scope.newEmotionObject).then(function(emotionId){
	    $location.url("/students/:studentId/emotions/list");
      console.log("Lets go to the /emotions/list");
	    $scope.newEmotionObject = {};
	  });
  	};

  let counting =  function($scope) {
      $scope.count = 0;
      $scope.counter = 0;
      $scope.emotionsLogged = function() {
            $scope.counter++;
        };
};
      $scope.viewSubj = false;
      $scope.showSubject = function() {
          $scope.viewSubj = !$scope.viewSubj;
      };

       $scope.viewEmo = false;
      $scope.showEmotions = function() {
          $scope.viewEmo = !$scope.viewEmo;
      };

    let emotions = {};
    emotions.zone = function() {
      this.name= "null";
      this.threshold= 0;
      this.toString = function() {
        console.log(this);
          return this.name;
        };
    };

    // emotions[0] = "Happy";
    // emotions[1] = "Ready To Learn";
    // emotions[2] = "Excited";
    // emotions[3] = "Focused";
    // emotions[4] = "Calm";
    // emotions[5] = "Okay";
    // emotions[6] = "Bored";
    // emotions[7] = "Worried";
    // emotions[8] = "Frustrated";
    // emotions[9] = "Angry";
    // emotions[10] = "Out of Control";


    let emotionOptions =
    ["Happy", "Ready To Learn", "Excited", "Focused",
    "Calm", "Okay", "Bored", "Worried",
    "Frustrated", "Angry", "Out of Control"];

    console.log(emotions);
    console.log(emotions[10]);

    // });

});

//TODO: make sure all closing brackets match
