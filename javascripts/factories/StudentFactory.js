"use strict";

app.factory("StudentFactory", function($q, $http, FIREBASE_CONFIG){
let studentId = {};

	var getStudentList = function(studentId){
	 return $q((resolve, reject) => {
	 	$http.get(`${FIREBASE_CONFIG.databaseURL}/students.json?orderBy="uid"&equalTo="${studentId}"`)
	 	.success(function(response){

									let students = [];
									 		Object.keys(response).forEach(function(key){
									 			response[key].id = key;
									 			students.push(response[key]);
									 		});
							 	  resolve(students);
							 	})

							 	.error(function(errorResponse){
							 	  reject(errorResponse);
							 	});
	});
  };



 var postNewStudent = function(newStudent){
	 console.log("newStudent", newStudent);
	return $q((resolve, reject)=>{
		$http.post(`${FIREBASE_CONFIG.databaseURL}/students.json`,
			JSON.stringify({
				studentName: newStudent.studentName,
				uid: newStudent.uid
			})
		)
		.success(function(postResponse){
		 resolve(postResponse);
		})
		.error(function(postError){
			reject(postError);
		});
	});
 };
	console.log("postNewStudent", postNewStudent);

var deleteStudent = function(studentId){
	return $q((resolve, reject) => {
		$http.delete(`${FIREBASE_CONFIG.databaseURL}/students/${studentId}.json`)
		.success(function(deleteResponse){
			resolve(deleteResponse);
		})
		.error(function(deleteError){
			reject(deleteError);
		});
	});
};

var getSingleStudent = function(studentId){
	return $q((resolve, reject) => {
		$http.get(`${FIREBASE_CONFIG.databaseURL}/students/${studentId}.json`)
		.success(function(getSingleResponse){
			resolve(getSingleResponse);
		})
		.error(function(getSingleError){
			reject(getSingleError);
		});
	});
};

 var editStudent = function(editStudent){
	return $q((resolve, reject)=>{
		$http.put(`${FIREBASE_CONFIG.databaseURL}/students/${studentId}.json`,
			JSON.stringify({
				name: editStudent.name,
				uid: editStudent.uid
			})
		)
		.success(function(editResponse){
		 resolve(editResponse);
		})
		.error(function(editError){
			reject(editError);
		});
	});
 };


 return {getStudentList:getStudentList, postNewStudent:postNewStudent, deleteStudent:deleteStudent, getSingleStudent:getSingleStudent, editStudent:editStudent};
});
console.log("StudentFactoryLoaded");
