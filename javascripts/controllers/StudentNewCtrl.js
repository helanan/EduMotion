"use strict";

app.controller("StudentNewCtrl", function($scope, $rootScope, $location, StudentFactory){
	$scope.newTask = {};

	$scope.addNewStudent = function(){
		$scope.newTask.uid = $rootScope.user.uid;
		$scope.newClassroomName = $rootScope.user.classroomName;
		StudentFactory.postNewStudent($scope.newTask).then(function(studentId){
		 $location.url("/students/list/");
		$scope.newTask = {};
		$scope.newClassroomName = {};
		});
	};
});

console.log("StudentNewCtrl Loaded");

// "task": "Bob",
// "uid": "iBnGP7NgXmZZer8vB7yR5QgW4nl1",
// "classroomName": "Bears",
// "image": "http://res.cloudinary.com/emma/image/upload/v1477765162/TODO_p4izbh.png",
// "grade": "5th",
// "age": "8",
// "parentFirst": "Meg",
// "parentLast": "Backus",
// "parentEmail": "mbackus@gmail.com",
// "address": "293 South Ivy Lane City: Glen Mills State: PA Zip: 37216",
// "phone": "267-443-8860",
// "emergancy contact": "610-459-0433",
// "totalScore": 0
