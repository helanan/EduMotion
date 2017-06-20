"use strict";

app.controller("StudentNewCtrl", function($scope, $rootScope, $location, StudentFactory, AuthFactory) {

    let user = AuthFactory.getUser();
    $scope.title = "Add A New Student";
    $scope.btnText = "Submit";

    $scope.newStudentObject = {
        fullName: "",
        classroomName: "",
        image: "https://api.adorable.io/avatars/285/" + Math.random() + "@adorable.io.png",
        gradeLevel: "",
        parentFirst: "",
        parentLast: "",
        parentEmail: "",
        address: "",
        emergencyNumber: "",
        totalScore: "",
        age: "",
        dateEnrolled: "",
        allergies: "",
        uid: user.uid
    };


    $scope.addNewStudent = function() {

        StudentFactory.postNewStudent($scope.newStudentObject)
            .then(function(response) {
                $location.url("/students/list/");
            });
        $scope.newStudentObject = {};
    };
});
