"use strict";

app.controller("StudentViewCtrl", function($scope, $routeParams, AuthFactory, StudentFactory) {
    $scope.currentUser = {};
    let studentId = $routeParams.studentId;

    StudentFactory.getSingleStudent(studentId).then(function(oneStudent) {
        oneStudent.id = studentId;
        $scope.selectedStudent = oneStudent;
    });
});
