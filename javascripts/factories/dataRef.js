'use strict';

app.factory('dataRef', function($location, $route, $q, FIREBASE_CONFIG) {

//Get elements
const preObject = document.getElementById('feelings');
const ulList = document.getElementById('list');

//Create references
const dbRefObject = firebase.database().ref().child('feelings');
const dbRefList = dbRefObject.child('angry');

//Sync Feeling Changes
dbRefObject.on('value', snap => {
	preObject.innerText = JSON.stringify(snap.val(), null, 3);
	});

//Sync list changes
	dbRefList.on('child_added', snap => {
		const li = document.createElement('li');
		li.innerText = snap.val();
		li.id = snap.key;
		ulList.appendChild(li);
	});

	dbRefList.on('child_changed', snap => {
		const liChanged = document.getElementById(snap.key);
		liChanged.innerText = snap.val();
	});

	//fires anytime child item is removed
	dbRefList.on('child_removed', snap => {
		const liToRemove = document.getElementById(snap.key);
		liToRemove.remove();
	});



	// console.log(snap.val()));


//users
let fbUserDb = firebase.database().ref('users');
//Sync User Changes
fbUserDb.on('value', snap => {
console.log(snap.val());
});

//emotions
let fbEmotionsDb = firebase.database().ref('emotions');
//Sync Emotion Changes
fbEmotionsDb.on('value', snap => {
console.log(snap.val());
});

//students
let fbStudentsDb = firebase.database().ref('students');
//Sync Student Changes
fbStudentsDb.on('value', snap => {
console.log(snap.val());
});

let date = new Date();

  return {dbRefObject, preObject, fbUserDb, fbEmotionsDb, fbStudentsDb};

});
