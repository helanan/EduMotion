"use strict";

app.controller("NavCtrl", function($scope){
  $scope.navStudents = [
  	{
  		name:"Logout",
		url:"#/logout"
  	},
  	{
  		name:"All Students",
  		url:"#/students/list"
  	},
  	{
  		name:"New Student",
		url:"#/students/new"
	}
  ];
});
