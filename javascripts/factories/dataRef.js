'use strict';

app.factory('dataRef', function($location, $route, $q) {

let fbUserDb = firebase.database().ref('users');
	let fbEmotionsDb = firebase.database().ref('emotions');
	let fbStudentsDb = firebase.database().ref('students');
	// let fbGroupsDb = firebase.database().ref('groups');
	// let fbPresenceDb = firebase.database().ref('presence');
	// let fbNotificationDb = firebase.database().ref('notifications');
	// let fbStatusUpdatesDb = firebase.database().ref('updates');
	// let fbRelationshipsDb = firebase.database().ref('relationships');
	let date = new Date();

  return { fbUserDb, fbEmotionsDb, fbStudentsDb};

  });
