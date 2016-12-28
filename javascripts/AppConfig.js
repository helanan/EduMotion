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

        if(currRoute.originalPath){
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

        .when('/students/list/:studentId', {
            templateUrl: 'partials/student-list.html',
            controller: 'StudentListCtrl',
            resolve: {
                isAuth
            }
        })

        .when('/students/view/:id',{
			templateUrl: 'partials/student-view.html',
			controller:'StudentViewCtrl',
			resolve: {isAuth}
		})

        .when('/students/edit/:Id', {
            templateUrl: 'partials/student-new.html',
            controller: 'StudentEditCtrl',
            resolve: {
                isAuth
            }
        })

        .when('/students/:studentId/emotion/new', {
            templateUrl: 'partials/emotion-new.html',
            controller: 'EmotionNewCtrl',
            resolve: {
                isAuth
            }
        })
        .when('/students/:studentId/emotion/:emotionId', {
            templateUrl: 'partials/emotion-view.html',
            controller: 'EmotionViewCtrl',
            resolve: {
                isAuth
            }
        })
        .when('/students/:studentId/emotion/edit/:emotionId', {
            templateUrl: 'partials/emotion-view.html',
            controller: 'EmotionEditCtrl',
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

console.log("AppConfig loaded");
