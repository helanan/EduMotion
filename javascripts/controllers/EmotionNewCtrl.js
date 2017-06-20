"use strict";

app.controller("EmotionNewCtrl", function($scope, $rootScope, $location, $routeParams, EmotionFactory, AuthFactory, StudentFactory) {

    let user = AuthFactory.getUser();

    $(document).ready(function() {
        $('select').material_select();
    });

    $scope.title = "Log My Emotions";
    $scope.btnText = "Submit";

    let studentNames = [];
    let studentsInfo = firebase.database().ref('students');

    $scope.newEmotion = {
        emotionName: "",
        emotionImage: "",
        assignedTo: "",
        activityCompleted: "",
        score: "",
        dateCompleted: "",
        studentName: "",
        uid: user.uid
    };

    $scope.addNewEmotion = function() {
        EmotionFactory.postNewEmotion($scope.newEmotion)
            .then(function(response) {
                $location.url("students/:studentId/emotions/list");
            });
        $scope.newEmotion = {};
    };

    $scope.count = 0;
    $scope.counter = 0;
    $scope.emotionsLogged = function() {
        $scope.counter++;
    };

    $scope.viewSubj = false;
    $scope.showSubject = function() {
        $scope.viewSubj = !$scope.viewSubj;
    };

    $scope.viewEmo = false;
    $scope.showEmotions = function() {
        $scope.viewEmo = !$scope.viewEmo;
    };

    $scope.mathBtn = "math";
    $scope.historyBtn = true;
    $scope.scienceBtn = true;
    $scope.gymBtn = true;
    $scope.artBtn = true;
    $scope.studyhallBtn = true;
    $scope.lunchBtn = true;

    let emotionZone = {};
    emotionZone.zone = function() {
        this.name = "null";
        this.threshold = 0;
        this.toString = function() {
            return this.name;
        };
    };
    let emotionOptions = ["Happy", "Ready To Learn", "Excited", "Focused",
        "Calm", "Okay", "Bored", "Worried",
        "Frustrated", "Angry", "Out of Control"
    ];
});
