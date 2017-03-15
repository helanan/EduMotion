"use strict";

app.controller("StudentListCtrl", function($scope, $rootScope, StudentFactory, AuthFactory, UserFactory){
console.log("Controller: Student List Control Loaded");

//set students scope to an empty array
  // $scope.students= [];
  // $scope.searchText = SearchTermData;
  let user = AuthFactory.getUser();
  console.log("user", user);
  console.log("user uid", user.uid);



  StudentFactory.getStudentList(user)
  .then(function(studentCollection){
    $scope.students = studentCollection;
    console.log("studentCollection", studentCollection);
  });

    let getStudents = function(){
        StudentFactory.getStudentList(user.uid).then(function(fbStudents){
          console.log("User Id", user.uid);
            $scope.students = fbStudents;
            console.log("fb Students", fbStudents);
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
