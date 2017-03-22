"use strict";

app.controller("EmotionNewCtrl", function($scope, $rootScope, $location, EmotionFactory, AuthFactory){
console.log("New Emotion Control Loaded");

$scope.title = "Log My Emotions";
$scope.btnText = "Submit";

let user = AuthFactory.getUser();
console.log("user", user);

// let studentEntry = StudentFactory.getSingleStudent();
// console.log("studentEntry", studentEntry);

//scoped newEmotion set to an empty object
//TODO: make sure newEmotion is scoped correctly to partial


  $scope.newEmotion = {
    emotionName: "",
    emotionImage: "",
    assignedTo: "",
    activityCompleted: "",
    score: "",
    dateCompleted: "",
    uid: user.uid
  };

  $scope.addNewEmotion = function() {
    console.log("add new emotion");
    EmotionFactory.postNewEmotion($scope.newEmotion)
    .then(function(response){
      $location.url("students/:studentId/emotions/list");
    });
    $scope.newEmotion = {};
  };



$scope.count = 0;
$scope.counter = 0;
$scope.emotionsLogged = function() {
      $scope.counter++;
  };

  $scope.viewSubj = false;
  $scope.showSubject = function() {
    $scope.viewSubj = !$scope.viewSubj;
};

 $scope.viewEmo = false;
$scope.showEmotions = function() {
    $scope.viewEmo = !$scope.viewEmo;
};


    let emotionZone = {};
    emotionZone.zone = function() {
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

    console.log(emotionOptions);
    // console.log(emotions[10]);

    // });

});

//TODO: make sure all closing brackets match
