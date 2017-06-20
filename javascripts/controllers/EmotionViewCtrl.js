"use strict";

app.controller("EmotionViewCtrl", function($scope, $routeParams, EmotionFactory, AuthFactory) {

    $scope.currentUser = {};
    let emotionId = $routeParams.emotionId;

    EmotionFactory.getSingleEmotion(emotionId).then(function(oneEmotion) {
        oneEmotion.id = emotionId;
        $scope.selectedEmotion = oneEmotion;
    });
});
