"use strict";

app.controller("NavCtrl", function($scope){


  $scope.navStudents = [

    {
  		name:"My Students",
  		url:"#!/students/list"
  	},
     {
  		name:"New Student",
		  url:"#!/students/new"
	   },
     {
  		name:"My Students Emotions",
		  url:"#!/students/:studentId/emotions/new"
	   },
    {
      name:"Logout",
      url:"#!/logout"
    },

  ];
});

//TODO: make sure all url links match Routes
