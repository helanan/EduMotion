"use strict";

app.controller("EmotionListCtrl", function($scope, $rootScope, EmotionFactory, AuthFactory, StudentFactory) {

    let user = AuthFactory.getUser();

    EmotionFactory.getEmotionList(user)
        .then(function(emotionCollection) {
            $scope.emotions = emotionCollection;
        });

    let getEmotions = function() {
        EmotionFactory.getEmotionList(user).then(function(fbEmotions) {
            $scope.emotions = fbEmotions;
        });
    };

    getEmotions();

    $scope.deleteEmotion = function(emotionId) {
        EmotionFactory.deleteEmotion(emotionId).then(function(response) {
            getEmotions();
        });
    };

    $scope.inputChange = function(emotionId) {
        EmotionFactory.editEmotion(emotionId).then(function(response) {
            getEmotions();
        });
    };

});
