"use strict";

app.controller("EmotionEditCtrl", function($scope, $location, $routeParams, EmotionFactory) {

    $scope.title = "Edit Emotion";
    $scope.btnText = "Update";
    $scope.newEmotion = {};

    let emotionId = $routeParams.emotionId;

    EmotionFactory.getSingleEmotion(emotionId)
        .then(function successCallback(response) {
            $scope.newEmotion = response;
        });

    $scope.addNewEmotion = function() {
        EmotionFactory.updateEmotion($routeParams.emotionId, $scope.newEmotion)
            .then(function successCallback(response) {
                $location.url("/students/:studentId/emotions/list");
            });
    };
});
