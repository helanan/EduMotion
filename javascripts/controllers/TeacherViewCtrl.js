"use strict";

app.controller("TeacherViewCtrl", function($scope, $rootScope, StudentFactory){
	$scope.students = [];

	let getStudents = function(){
		StudentFactory.getStudentList($rootScope.user.uid).then(function(fbStudents){
		$scope.students = fbStudents;
	});
};

getStudents();

$scope.deleteStudent = function(studentId){
		StudentFactory.deleteStudent(studentId).then(function(response){
			getStudents();
		});
	};

	$scope.inputChange = function(thingy){
		StudentFactory.editStudent(thingy).then(function(response){
		 	getStudents();
		});
	};
});

console.log("TeacherViewCtrl Loaded");
