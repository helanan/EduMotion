"use strict";

app.factory("UserFactory", function($q, $http, FIREBASE_CONFIG){
console.log("Factory: User Factory Loaded");

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
				console.log("User Has Been Stored Successfully!", storeUserSuccess);
			})
			.then(function(storeUserError){
				reject(storeUserError);
				console.log("User Has NOT been stored", storeUserError);
			});
		});
	};


	let getUser = (userId) => {
		console.log("Get User By Thier userId: ", userId);
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/users.json?orderBy="uid"&equalTo="${userId}"`)
				.then(function(userObject) {
					let users = [];
					console.log("User Array Initiaized :", users);
					Object.keys(userObject).forEach(function(key){
						users.push(userObject[key]);
						console.log("add a user object key on to each firebase key");
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
			console.log("log in with google", authWithProvider);
				return firebase.auth().signInWithPopup(provider);

			};

	return {addUser, getUser, authWithProvider};

});

console.log("User Factory Loaded Third");
