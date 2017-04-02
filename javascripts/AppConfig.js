"use strict";

console.log("Application Config Script Now Running");

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
    if (AuthFactory.isAuthenticated()) {
      console.log("User Exists");
        resolve();
    } else {
      console.log("No User Found");
        reject();
    }
});

app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory) {


    firebase.initializeApp(FIREBASE_CONFIG);


    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {

        let logged = AuthFactory.isAuthenticated();
        let appTo;

        if(currRoute.originalPath){
            appTo = currRoute.originalPath.indexOf('/auth') !== -1;
        }
//if not logged in or not at the original path or /auth prevent default logging in and take back to auth
        if (!appTo && !logged) {
            event.preventDefault();
            $location.path('/auth');
        }
    });
});

//where we handle routing with $routeProvider
//TODO: add emotion routing, add to tooltip location for routing
app.config(function($routeProvider) {
    $routeProvider
    .when('/auth', {
            templateUrl: 'partials/auth.html',
            controller: 'AuthCtrl'
        })

     .when('/students/new', {
            templateUrl: 'partials/student-new.html',
            controller: 'StudentNewCtrl',
            resolve: {isAuth}
        })

        .when('/students/list', {
            templateUrl: 'partials/student-list.html',
            controller: 'StudentListCtrl',
            resolve: {isAuth}
        })

        .when('/students/:studentId/view', {
      			templateUrl: 'partials/student-view.html',
      			controller:'StudentViewCtrl',
      			resolve: {isAuth}
  		  })

        .when('/students/:studentId/edit', {
            templateUrl: 'partials/student-new.html',
            controller: 'StudentEditCtrl',
            resolve: {isAuth}
        })

        .when('/students/:studentId/emotions/new', {
            templateUrl: 'partials/emotion-new.html',
            controller: 'EmotionNewCtrl',
            resolve: {isAuth}
        })
        .when('/students/:studentId/emotions/list', {
            templateUrl: 'partials/emotion-list.html',
            controller: 'EmotionListCtrl',
            resolve: {isAuth}
        })
        .when('/emotions/:emotionId/view', {
      			templateUrl: 'partials/emotion-view.html',
      			controller:'EmotionViewCtrl',
      			resolve: {isAuth}
  		  })
        .when('/emotions/:emotionId/edit', {
            templateUrl: 'partials/emotion-new.html',
            controller: 'EmotionEditCtrl',
            resolve: {isAuth}
        })
        .when('/emotions/:emotionId/form', {
            templateUrl: 'partials/emotionform.html',
            controller: 'ChartCtrl',
            resolve: {isAuth}
        })
        .when('/logout', {
            templateUrl: 'partials/auth.html',
            controller: 'AuthCtrl',
            resolve: {isAuth}
        })
        .otherwise('/auth');

});
