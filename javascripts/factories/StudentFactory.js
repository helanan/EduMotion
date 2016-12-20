"use strict";

app.factory("StudentFactory", function($q, $http, FIREBASE_CONFIG){

	var getStudentList = function(userId){
	 return $q((resolve, reject) => {
	 	$http.get(`${FIREBASE_CONFIG.databaseURL}/students.json?orderBy="uid"&equalTo="${userId}"`)
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
	return $q((resolve, reject)=>{
		$http.post(`${FIREBASE_CONFIG.databaseURL}/students.json`,
			JSON.stringify({
				studentName: newStudent.studentName,
				uid: newStudent.uid,
				task: newStudent.task,
				classroomName: newStudent.classroomName,
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
		$http.put(`${FIREBASE_CONFIG.databaseURL}/student/${editStudent.id}.json`,
			JSON.stringify({
				studentName: editStudent.studentName,
				task: editStudent.task,
				uid: editStudent.uid,
				classroomName: editStudent.classroomName
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
