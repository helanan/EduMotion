"use strict";

app.factory("StudentFactory", function($q, $http, FIREBASE_CONFIG){

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
	return $q((resolve, reject)=>{
		$http.post(`${FIREBASE_CONFIG.databaseURL}/students.json`,
			JSON.stringify({
				assignedTo: newStudent.assignedTo,
				isSelected: newStudent.isSelected,
				emo: newStudent.emo,
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
		$http.put(`${FIREBASE_CONFIG.databaseURL}/students/${editStudent.id}.json`,
			JSON.stringify({
				assignedTo: editStudent.assignedTo,
				isSelected: editStudent.isSelected,
				emo: editStudent.emo,
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

