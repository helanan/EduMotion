"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {

    if (AuthFactory.isAuthenticated()) {
        resolve();
    } else {
        reject();
    }
});

app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory) {


    firebase.initializeApp(FIREBASE_CONFIG);


    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {

        let logged = AuthFactory.isAuthenticated();
        let appTo;

        if (currRoute.originalPath) {
            appTo = currRoute.originalPath.indexOf('/auth') !== -1;
        }
        if (!appTo && !logged) {
            event.preventDefault();
            $location.path('/auth');
        }
    });
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/auth', {
            templateUrl: 'partials/auth.html',
            controller: 'AuthCtrl'
        })

        .when('/user/classroom', {
            templateUrl: 'partials/classroom-view.html',
            controller: 'UserCtrl'
        })

        .when('/students/new', {
            templateUrl: 'partials/student-new.html',
            controller: 'StudentNewCtrl',
            resolve: {
                isAuth
            }
        })

        .when('/students/list', {
            templateUrl: 'partials/student-list.html',
            controller: 'StudentListCtrl',
            resolve: {
                isAuth
            }
        })

        .when('/students/:studentId/view', {
            templateUrl: 'partials/student-view.html',
            controller: 'StudentViewCtrl',
            resolve: {
                isAuth
            }
        })

        .when('/students/:studentId/edit', {
            templateUrl: 'partials/student-new.html',
            controller: 'StudentEditCtrl',
            resolve: {
                isAuth
            }
        })

        .when('/students/:studentId/emotions/new', {
            templateUrl: 'partials/emotion-new.html',
            controller: 'EmotionNewCtrl',
            resolve: {
                isAuth
            }
        })
        .when('/students/:studentId/emotions/list', {
            templateUrl: 'partials/emotion-list.html',
            controller: 'EmotionListCtrl',
            resolve: {
                isAuth
            }
        })
        .when('/emotions/:emotionId/view', {
            templateUrl: 'partials/emotion-view.html',
            controller: 'EmotionViewCtrl',
            resolve: {
                isAuth
            }
        })
        .when('/emotions/:emotionId/edit', {
            templateUrl: 'partials/emotion-new.html',
            controller: 'EmotionEditCtrl',
            resolve: {
                isAuth
            }
        })
        .when('/emotions/:emotionId/form', {
            templateUrl: 'partials/emotionform.html',
            controller: 'ChartCtrl',
            resolve: {
                isAuth
            }
        })
        .when('/emotions/emotion/exercises/angry', {
            templateUrl: 'partials/exercise-1-angry.html',
            controller: 'ExercisesCtrl',
            resolve: {
                isAuth
            }
        })
        .when('/emotions/emotion/exercises/anxiety', {
            templateUrl: 'partials/exercise-2-anxiety.html',
            controller: 'ExercisesCtrl',
            resolve: {
                isAuth
            }
        })
        .when('/emotions/emotion/exercises/happy', {
            templateUrl: 'partials/exercise-3-happy.html',
            controller: 'ExercisesCtrl',
            resolve: {
                isAuth
            }
        })
        .when('/emotions/emotion/exercises/calm', {
            templateUrl: 'partials/exercise-4-calm.html',
            controller: 'ExercisesCtrl',
            resolve: {
                isAuth
            }
        })
        .when('/logout', {
            templateUrl: 'partials/auth.html',
            controller: 'AuthCtrl',
            resolve: {
                isAuth
            }
        })
        .otherwise('/auth');

});
