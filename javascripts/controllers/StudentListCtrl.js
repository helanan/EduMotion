"use strict";

app.controller("StudentListCtrl", function($scope, $rootScope, StudentFactory){
<<<<<<< HEAD
  $scope.students = [];

  let getStudents = function(){
    StudentFactory.getStudentList($rootScope.student.uid).then(function(fbStudents){
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
    })
  };

});

console.log("StudentListCtrl")
