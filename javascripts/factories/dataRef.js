// 'use strict';
//
// app.factory('dataRef', function($location, $route, $q, FIREBASE_CONFIG) {
//
// //Get elements
// const preObject = document.getElementById('feelings');
// const ulList = document.getElementById('list');
//
// const preObjectEmotions = document.getElementById('emotions');
// // const emoList = document.getElementById('emoList');
//
// const preObjectStudents = document.getElementById('students');
// // const studentList = document.getElementById('studentList');
//
// const preObjectUsers = document.getElementById('users');
// // const userList = document.getElementById('userList');
//
// //Create references
// const dbRefObject = firebase.database().ref().child('feelings');
// const dbRefList = dbRefObject.child('angry');
//
// const dbRefEmotions = firebase.database().ref().child('emotions');
// // const dbRefEmoList = dbRefEmotions.child();
//
// const dbRefStudents = firebase.database().ref().child('students');
// // const dbRefStudentList = dbRefStudents.child();
//
// const dbRefUsers = firebase.database().ref().child('users');
// // const dbRefUserList = dbRefUsers.child();
//
//
//
// //Sync Feeling Changes
// dbRefObject.on('value', snap => {
// 	preObject.innerText = JSON.stringify(snap.val(), null, 3);
// 	});
//
// // //Sync Emotion Changes
// // dbRefEmotions.on('value', snap => {
// // 	preObjectEmotions.innerText = JSON.stringify(snap.val(), null, 3);
// // 	});
// //
// // //Sync Student Changes
// // dbRefStudents.on('value', snap => {
// // 	preObjectStudents.innerText = JSON.stringify(snap.val(), null, 3);
// // 	});
// //
// // //Sync User Changes
// // dbRefUsers.on('value', snap => {
// // 	preObjectUsers.innerText = JSON.stringify(snap.val(), null, 3);
// // 	});
//
// //Sync feeling list changes
// 	dbRefList.on('child_added', snap => {
// 		const li = document.createElement('li');
// 		li.innerText = snap.val();
// 		li.id = snap.key;
// 		ulList.appendChild(li);
// 	});
//
// 	dbRefList.on('child_changed', snap => {
// 		const liChanged = document.getElementById(snap.key);
// 		liChanged.innerText = snap.val();
// 	});
//
// //Sync emotion list changes
// // 	dbRefEmoList.on('child_added', snap => {
// // 		const li = document.createElement('li');
// // 		li.innerText = snap.val();
// // 		li.id = snap.key;
// // 		ulList.appendChild(li);
// // 	});
// //
// // 	dbRefEmoList.on('child_changed', snap => {
// // 		const liChanged = document.getElementById(snap.key);
// // 		liChanged.innerText = snap.val();
// // 	});
// //
// // //Sync students list changes
// // 	dbRefStudentList.on('child_added', snap => {
// // 		const li = document.createElement('li');
// // 		li.innerText = snap.val();
// // 		li.id = snap.key;
// // 		ulList.appendChild(li);
// // 	});
// //
// // 	dbRefStudentList.on('child_changed', snap => {
// // 		const liChanged = document.getElementById(snap.key);
// // 		liChanged.innerText = snap.val();
// // 	});
//
// // //Sync user list changes
// // 	dbRefUserList.on('child_added', snap => {
// // 		const li = document.createElement('li');
// // 		li.innerText = snap.val();
// // 		li.id = snap.key;
// // 		ulList.appendChild(li);
// // 	});
// //
// // 	dbRefUserList.on('child_changed', snap => {
// // 		const liChanged = document.getElementById(snap.key);
// // 		liChanged.innerText = snap.val();
// // 	});
// //
// // 	//fires anytime child item is removed
// // 	dbRefList.on('child_removed', snap => {
// // 		const liToRemove = document.getElementById(snap.key);
// // 		liToRemove.remove();
// // 	});
// //
// // 	//fires anytime child item is removed from emotions
// // 	dbRefEmoList.on('child_removed', snap => {
// // 		const liToRemove = document.getElementById(snap.key);
// // 		liToRemove.remove();
// // 	});
// //
// // 	//fires anytime child item is removed from students
// // 	dbRefStudentList.on('child_removed', snap => {
// // 		const liToRemove = document.getElementById(snap.key);
// // 		liToRemove.remove();
// // 	});
// //
// // 	//fires anytime child item is removed from users
// // 	dbRefUserList.on('child_removed', snap => {
// // 		const liToRemove = document.getElementById(snap.key);
// // 		liToRemove.remove();
// // 	});
//
//
//
// //users
// let fbUserDb = firebase.database().ref('users');
// //Sync User Changes
// fbUserDb.on('value', snap => {
// console.log(snap.val());
// });
//
// //emotions
// let fbEmotionsDb = firebase.database().ref('emotions');
// //Sync Emotion Changes
// fbEmotionsDb.on('value', snap => {
// console.log(snap.val());
// });
// console.log("emotion test", fbEmotionsDb.emotion);
//
// //students
// let fbStudentsDb = firebase.database().ref('students');
// //Sync Student Changes
// fbStudentsDb.on('value', snap => {
// console.log(snap.val());
// });
//
// let date = new Date();
//
//   return {dbRefObject, dbRefStudents, preObject, fbUserDb, fbEmotionsDb, fbStudentsDb, dbRefEmotions};
//
// });
