"use strict";

app.controller("NavCtrl", function($scope) {
    $scope.navItems = [
    {
    	name: "Logout",
		  url:"#/logout"
	},
    {
    	name:"My Students",
    	url:"/students/view"
	},
    {
    	name:"Emotional Log",
    	url:"/emotions/list"
	}
   ];
});
