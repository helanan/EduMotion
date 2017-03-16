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
					let users = [];
					Object.keys(userObject).forEach(function(key){
						users.push(userObject[key]);
					});
					resolve(users[0]);
					//resolved and added the users at their index
				})

				.catch(function(error){
					reject(error);
				});
			});
		};

//This function handles google sign in
//TODO: make sure its linked to google button in partial
		let provider = new firebase.auth.GoogleAuthProvider();
		// console.log("provider: ", provider);
		let authWithProvider = function(){
				return firebase.auth().signInWithPopup(provider);

			};

	return {addUser, getUser, authWithProvider};

});
