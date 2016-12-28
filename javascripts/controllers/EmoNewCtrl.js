"use strict";

app.controller("EmotionNewCtrl", function($scope, $rootScope, $location, EmotionFactory){
    $location.url("/emotions/new");
    $scope.emotions = {};

let emotionId = $rootScope.emotionId;
});
