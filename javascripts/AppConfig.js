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

<<<<<<< HEAD
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
=======
$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){

	let logged = AuthFactory.isAuthenticated();
	let appTo;
>>>>>>> 9c08756148b309fc1c648ba8597d630245ece61d

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

<<<<<<< HEAD
app.config(function($routeProvider) {
    $routeProvider
        .when('/auth', {
            templateUrl: 'partials/auth.html',
            controller: 'AuthCtrl',
        })
        .when('/students/view/{{student.id}}', {
            templateUrl: 'partials/student-list.html',
            controller: 'StudentListCtrl',
            resolve: {
                isAuth
            }
        })
        .when('students/new', {
            templateUrl: 'partials/student-new.html',
            controller: 'StudentNewCtrl',
            resolve: {
                isAuth
            }
        })
        .when('/view/:id', {
            templateUrl: 'partials/studentlist-view.html',
            controller: 'StudentListViewCtrl',
            resolve: {
                isAuth
            }
        })
        .when('/edit/:id', {
            templateUrl: 'partials/student-new.html',
            controller: 'StudentEditCtrl',
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
=======
app.config(function($routeProvider){
	$routeProvider
		.when('/auth', {
			templateUrl: 'partials/auth.html',
			controller:'AuthCtrl'
		})
		  .when('/students/list', {
			templateUrl: 'partials/studentlist-view.html',
			controller: 'StudentListViewCtrl',
			resolve: {isAuth}
		})
		  .when('/students/new', {
			templateUrl: 'partials/student-new.html',
			controller: 'StudentNewCtrl',
			resolve: {isAuth}
		})
		.when('/students/view/:id', {
			templateUrl: 'partials/teacher-view.html',
			controller: 'StudentListViewCtrl',
			resolve: {isAuth}
		})
		.when('/students/edit/:id', {
			templateUrl: 'partials/student-new.html',
			controller:'StudentEditCtrl',
			resolve: {isAuth}
		})
		.when('/logout', {
			templateUrl: 'partials/auth.html',
			controller: 'AuthCtrl',
			resolve: {isAuth}
		})
		.otherwise('/auth');
>>>>>>> 9c08756148b309fc1c648ba8597d630245ece61d
});

console.log("AppConfig loaded");
