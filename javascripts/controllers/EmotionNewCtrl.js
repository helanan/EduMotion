"use strict";

app.controller("EmotionNewCtrl", function($scope, $rootScope, $location, EmotionFactory){
    $location.url("/students/:studentId/emotions/new");
    $scope.emotions = {};

let emotionId = $rootScope.emotionId;
});
