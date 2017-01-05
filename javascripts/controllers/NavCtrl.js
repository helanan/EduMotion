"use strict";

app.controller("NavCtrl", function($scope){
  $scope.navStudents = [
  	{
  		name:"Logout",
		url:"#/logout"
  	},
     {
  		name:"New Student",
		url:"#/students/new"
	},
  	{
  		name:"All Students",
  		url:"#/students/list"
  	},
  ];
});
