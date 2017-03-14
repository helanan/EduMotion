"use strict";

app.controller("StudentListCtrl", function($scope, $rootScope, StudentFactory){
          $scope.students= [];

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

    $scope.inputChange = function(studentId){
      StudentFactory.editStudent(studentId).then(function(response){
        getStudents();
      });
    };

});
