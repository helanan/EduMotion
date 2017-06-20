"use strict";

app.controller("StudentEditCtrl", function($scope, $location, $routeParams, StudentFactory) {

    $scope.title = "Edit Student";
    $scope.btnText = "Update";
    $scope.newStudentObject = {};

    let studentId = $routeParams.studentId;

    StudentFactory.getSingleStudent(studentId)
        .then(function successCallback(response) {
            $scope.newStudentObject = response;
        });

    $scope.addNewStudent = function() {
        StudentFactory.updateStudent($routeParams.studentId, $scope.newStudentObject)
            .then(function successCallback(response) {
                $location.url("/students/list");
            });
    };
});
