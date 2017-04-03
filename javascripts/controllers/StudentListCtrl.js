"use strict";

app.controller("StudentListCtrl", function($scope, $rootScope, $http, StudentFactory, AuthFactory){

  $(document).ready(function(){
     $('.large material-icons tooltipped').tooltip({delay: 50});
   });
  // $('.dropdown-button').dropdown({
  //     inDuration: 300,
  //     outDuration: 225,
  //     constrainWidth: false, // Does not change width of dropdown to that of the activator
  //     hover: true, // Activate on hover
  //     gutter: 0, // Spacing from edge
  //     belowOrigin: false, // Displays dropdown below the button
  //     alignment: 'left', // Displays dropdown with edge aligned to the left of button
  //     stopPropagation: false // Stops event propagation
  //   }
  // );
//set students scope to an empty array
  // $scope.students= [];
  // $scope.searchText = SearchTermData;
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
