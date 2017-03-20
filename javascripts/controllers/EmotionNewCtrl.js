"use strict";

app.controller("EmotionNewCtrl", function($scope, $rootScope, $location, EmotionFactory, AuthFactory){
console.log("New Emotion Control Loaded");

let user = AuthFactory.getUser();
console.log("user", user);

//scoped newEmotion set to an empty object
//TODO: make sure newEmotion is scoped correctly to partial
  // let student = ;
  // console.log("studentId: ", student);
  // $scope.newEmotion = {};
  // console.log("Empty Emotion Object Created", $scope.newEmotion);
//call the function from the emotion factory addNewEmotion

  $scope.newEmotion = {
    emotionName: "",
    emotionImage: "",
    assignedTo: "",
    activityCompleted: "",
    score: "",
    dateCompleted: "",
    uid: user
  };

  $scope.addNewEmotion = function() {
    console.log("add new emotion");
    EmotionFactory.postNewEmotion($scope.newEmotion)
    .then(function(response){
      $location.url("students/:studentId/emotions/list");
    });
    $scope.newEmotion = {};
  };

});

//   let counting =  function($scope) {
//       $scope.count = 0;
//       $scope.counter = 0;
//       $scope.emotionsLogged = function() {
//             $scope.counter++;
//         };
// };
//       $scope.viewSubj = false;
//       $scope.showSubject = function() {
//           $scope.viewSubj = !$scope.viewSubj;
//       };
//
//        $scope.viewEmo = false;
//       $scope.showEmotions = function() {
//           $scope.viewEmo = !$scope.viewEmo;
//       };

    // let emotions = {};
    // emotions.zone = function() {
    //   this.name= "null";
    //   this.threshold= 0;
    //   this.toString = function() {
    //     console.log(this);
    //       return this.name;
    //     };
    // };

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


    // let emotionOptions =
    // ["Happy", "Ready To Learn", "Excited", "Focused",
    // "Calm", "Okay", "Bored", "Worried",
    // "Frustrated", "Angry", "Out of Control"];

    // console.log(emotions);
    // console.log(emotions[10]);

    // });

// });

//TODO: make sure all closing brackets match
