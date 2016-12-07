"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
	if(AuthFactory.isAuthenticated()){
		resolve();
	} else {
		reject();
	}
});

app.run(function($rootScope, $location, FIREBASE_CONFIG, AuthFactory){
  firebase.initializeApp(FIREBASE_CONFIG);

$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
	
	let logged = AuthFactory.isAuthenticated();
	let appTo;

	if(currRoute.originalPath){

		appTo = currRoute.originalPath.indexOf('/auth') !== -1;
	}

	if(!appTo && !logged){
		event.preventDefault();
		$location.path('/auth');
	}
});

});

app.config(function($routeProvider){
	$routeProvider
		.when('/auth', {
			templateUrl: 'partials/auth.html',
			controller:'AuthCtrl',
		})
		// .when('/user/list', {
		// 	templateUrl: 'partials/teacher-view.html',
		// 	controller: 'TeacherViewCtrl',
		// 	resolve: {isAuth}
		// })
		// .when('/students/new', {
		// 	templateUrl: 'partials/student-new.html',
		// 	controller: 'BoardNewCtrl',
		// 	resolve: {isAuth}
		// })
		// .when('/students/view/:id', {
		// 	templateUrl: 'partials/studentlist-view.html',
		// 	controller: 'StudentListViewCtrl',
		// 	resolve: {isAuth}
		// })
		// .when('/students/edit/:id', {
		// 	templateUrl: 'partials/student-new.html',
		// 	controller:'StudentEditCtrl',
		// 	resolve: {isAuth}
		// })
		// .when('/logout', {
		// 	templateUrl: 'partials/auth.html',
		// 	controller: 'AuthCtrl',
		// 	resolve: {isAuth}
		// })
		.otherwise('/auth');
});

console.log("AppConfig loaded");