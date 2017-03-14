"use strict";
app.factory("UserFactory", function($q, $http, FIREBASE_CONFIG){

	let addUser = (authData) => {
		return $q((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/users.json`,
			  JSON.stringify({
				uid: authData.uid,
				username: authData.username
				})
			)
			.then(function(storeUserSuccess){
				resolve(storeUserSuccess);
			})
			.then(function(storeUserError){
				reject(storeUserError);

			});

		});

	};


	let getUser = (userId) => {
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/users.json?orderBy="uid"&equalTo="${userId}"`)
				.then(function(userObject) {
					console.log('resolved', userObject); // "resolved, 10"
					let users = [];
					console.log("Users created :", users);
					Object.keys(userObject).forEach(function(key){
						users.push(userObject[key]);
					});
					resolve(users[0]);
				})

				.then(function(error){
					reject(error);
				});
			});

		};

		let provider = new firebase.auth.GoogleAuthProvider();

let authWithProvider= function(){
		return firebase.auth().signInWithPopup(provider);
	};

	return {addUser:addUser, getUser:getUser};

});

console.log("UserFactoryLoaded");
