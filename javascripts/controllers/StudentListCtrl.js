"use strict";

app.controller("StudentListCtrl", function($scope, $rootScope, $http, StudentFactory, AuthFactory) {

    let user = AuthFactory.getUser();


    StudentFactory.getStudentList(user)
        .then(function(studentCollection) {
            $scope.students = studentCollection;
            console.log(studentCollection);
        });

    let getStudents = function() {
        StudentFactory.getStudentList(user).then(function(fbStudents) {
            $scope.students = fbStudents;
        });
    };

    getStudents();

    $scope.deleteStudent = function(studentId) {
        StudentFactory.deleteStudent(studentId).then(function(response) {
            getStudents();
        });
    };

    $scope.inputChange = function(studentId) {
        StudentFactory.editStudent(studentId).then(function(response) {
            getStudents();
        });
    };
});
