"use strict";

app.controller("NavCtrl", function($scope){


  $scope.navStudents = [

    {
      name:"Logout",
      url:"#!/logout"
    },
    {
      name:"My Games",
      url:"#!/emotions/emotion/exercises/anxiety"
    },
    {
      name:"My Class Emotion Chart",
      url:"#!/emotions/:emotionId/form"
    },
    {
     name:"My Students Emotions",
     url:"#!/students/:studentId/emotions/list"
    },
    {
     name:"Emotion Logger",
     url:"#!/students/:studentId/emotions/new"
    },
    {
     name:"New Student",
     url:"#!/students/new"
    },
    {
  		name:"My Students",
  		url:"#!/students/list"
  	},
  ];
});

//TODO: make sure all url links match Routes
