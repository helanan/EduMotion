"use strict";

app.factory("StudentFactory", function($q, $http, FIREBASE_CONFIG){

	var postNewStudent = function(newStudent){
    	return $q((resolve, reject)=>{
    		$http.post(`${FIREBASE_CONFIG.databaseURL}/students.json`,
    			JSON.stringify({
				task: newStudent.task,
				uid: newStudent.uid,
    				classroomName: newStudent.classroomName,
				image: newStudent.image,
				grade: newStudent.grade,
				parentFirst: newStudent.parentFirst,
				parentLast: newStudent.parentLast,
				parentEmail: newStudent.parentEmail,
				address: newStudent.address,
				phone: newStudent.phone,
				emergancyContact: newStudent.emergancyContact,
				totalScore: newStudent.totalScore
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
	return $q((resolve, reject) => {
		$http.put(`${FIREBASE_CONFIG.databaseURL}/students/${editStudent.id}.json`,
			JSON.stringify({
				task: editStudent.task,
				uid: editStudent.uid,
				classroomName: editStudent.classroomName,
				image: editStudent.image,
				grade: editStudent.grade,
				parentFirst: editStudent.parentFirst,
				parentLast: editStudent.parentLast,
				parentEmail: editStudent.parentEmail,
				address: editStudent.address,
				phone: editStudent.phone,
				emergancyContact: editStudent.emergancyContact,
				totalScore: editStudent.totalScore
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


 return {postNewStudent:postNewStudent, getStudentList:getStudentList, deleteStudent:deleteStudent, getSingleStudent:getSingleStudent, editStudent:editStudent};
});
console.log("StudentFactoryLoaded");
