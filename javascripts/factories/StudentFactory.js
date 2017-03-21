"use strict";

app.factory("StudentFactory", ($q, $http, FIREBASE_CONFIG) => {
console.log("Factory: Student Factory Loaded");

	let getStudentList = (user) => {
		console.log("user", user);
		let students = [];
		console.log("Students Array Created", students);
	 	return $q((resolve, reject) => {
		$http.get(`${FIREBASE_CONFIG.databaseURL}/students.json?orderBy="uid"&equalTo="${user.uid}"`)
		.then((studentObject) => {
			let studentCollection = studentObject.data;
			console.log("Student Object Data ", studentObject.data);
			Object.keys(studentCollection).forEach((key) => {
						studentCollection[key].id = key;
						students.push(studentCollection[key]);
			});
			resolve(students);
			console.log("students", students);
		})
		.catch((error) => {
			reject(error);
		});
	});
	};

	let postNewStudent = (newStudent) => {
    	return $q((resolve, reject) => {
    		$http.post(`${FIREBASE_CONFIG.databaseURL}/students.json`,
    			JSON.stringify(newStudent))
    		.then((ObjectFromFirebase) => {
    		 	resolve(ObjectFromFirebase);
    		})
    		.catch((error) => {
    			reject(error);
    		});
    	});
  	};

	var deleteStudent = (studentId) => {
		console.log("Delete in factory", studentId);
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/students/${studentId}.json`)
			.then((ObjectFromFirebase) => {
				resolve(ObjectFromFirebase);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	var getSingleStudent = (studentId) => {
		return $q(function(resolve, reject) {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/students/${studentId}.json`)
			.then(function(studentObject){
				resolve(studentObject.data);
			})
			.catch(function(error){
				reject(error);
			});
		});
	};

 var updateStudent = (studentId, editedStudent) => {
	return $q(function(resolve, reject){
		$http.patch(`${FIREBASE_CONFIG.databaseURL}/students/${studentId}.json`,
			angular.toJson(editedStudent))
			.then(function(ObjectFromFirebase){
				resolve(ObjectFromFirebase);
			})
			.catch(function(error){
				reject(error);
			});
		});
	};

// 	var query = firebase.database().ref("students").orderByKey();
// query.once("value")
//   .then(function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       // key will be "ada" the first time and "alan" the second time
//       var key = childSnapshot.key;
//       // childData will be the actual contents of the child
//       var childData = childSnapshot.val();
// 			console.log("query", query);
//   });
// });

 return {postNewStudent, getStudentList, deleteStudent, getSingleStudent, updateStudent};
});
