"use strict";

app.controller("StudentListCtrl", function($scope, $rootScope, $http, StudentFactory, AuthFactory){

  let user = AuthFactory.getUser();


  StudentFactory.getStudentList(user)
  .then(function(studentCollection){
    console.log("studentCollection", studentCollection);
    $scope.students = studentCollection;
  });

    let getStudents = function(){
        StudentFactory.getStudentList(user).then(function(fbStudents){
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


//
//     let getAvatar = function(){
//       $http.get("http://api.adorable.io/avatar/{{user}}").then(function(response) {
//       $scope.image = response.data;
//       console.log("avatar", response.data);
//   });
// };
});
