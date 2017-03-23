"use strict";

app.controller("EmotionNewCtrl", function($scope, $rootScope, $location, $routeParams, EmotionFactory, AuthFactory, StudentFactory){
console.log("New Emotion Control Loaded");

$scope.subjects = [
{
  name: 'math',
  label: 'math'
},
{
  name: 'english',
  label: 'english'
},
{
  name:'science',
  label: 'science'
},
{
  name: 'gym',
  label: 'gym'
},
{
  name: 'art',
  label: 'art'
},
{
  name: 'music',
  label: 'music'
},
{
  name: 'speech',
  label: 'speech'
},
{
  name: 'history',
  label: 'history'
}
];

$scope.selected = $scope.subjects[0];
console.log($scope.subjects[0]);

// console.log("subjects", $scope.subjects);

// var subjectName = [];
// angular.forEach(subjects, function(subject, key) {
//   this.push(key + ': ' + subject);
// }, subjectName);
//
// console.log("subjectName", subjectName);




$(document).ready(function() {
  $('select').material_select();
});

// $('input.autocomplete').autocomplete({
//    data: {
//      "Student Name": user.uid,
//      "Microsoft": null,
//      "Google": 'http://placehold.it/250x250'
//    },
//    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
//    onAutocomplete: function(val) {
//      // Callback function when value is autcompleted.
//    },
//    minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
//  });



$scope.title = "Log My Emotions";
$scope.btnText = "Submit";

let studentNames = [];
console.log("studentNames", studentNames);

// let studentId = $routeParams.Id;
// console.log("studentId", studentId);

// dropdown
$('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
  }
);

var students = $("#studentNames");
console.log($("#studentNames"));

let user = AuthFactory.getUser();
console.log("user", user);

let emotionUser = user.uid;
console.log ("emotionUser", emotionUser);

let emotionName = EmotionFactory.getStudentEmotions();
console.log("emotionName", emotionName);



let names = StudentFactory.getSingleStudent(user.uid)
	.then(function successCallback(response){
		$scope.names = response;
    		console.log("getEmotionresponse", response);
 	});

// studentCollection
//   $scope.students = studentCollection;
//   console.log("studentCollection", studentCollection);
  // $scope.dropdown1 = studentCollection[1].fullName;
  // $scope.dropdown2 = studentCollection[2].fullName;
  // $scope.dropdown3 = studentCollection[3].fullName;
  // $scope.dropdown4 = studentCollection[4].fullName;
  //



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


    // });

});

//TODO: make sure all closing brackets match
