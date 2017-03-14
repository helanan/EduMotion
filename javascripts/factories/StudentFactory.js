"use strict";

app.factory("StudentFactory", function($q, $http, FIREBASE_CONFIG){

	var postNewStudent = function(newStudent){
    	return $q((resolve, reject)=>{
    		$http.post(`${FIREBASE_CONFIG.databaseURL}/students.json`,
    			JSON.stringify({
				fullName: newStudent.fullName,
				uid: newStudent.uid,
    				classroomName: newStudent.classroomName,
				image: newStudent.image,
				grade: newStudent.grade,
				parentFirst: newStudent.parentFirst,
				parentLast: newStudent.parentLast,
				parentEmail: newStudent.parentEmail,
				address: newStudent.address,
				phone: newStudent.phone,
				emergancyContact: newStudent.emergencyContact,
				totalScore: newStudent.totalScore
    			})
    		)
    		.then(function(postResponse){
    		 resolve(postResponse);
    		})
    		.then(function(postError){
    			reject(postError);
    		});
    	});
  };

	var getStudentList = function(userId){
		let students = [];
		console.log("students created", students);
	 return $q((resolve, reject) => {
	 	$http.get(`${FIREBASE_CONFIG.databaseURL}/students.json?orderBy="uid"&equalTo="${userId}"`)
	 	.then((studentObject) => {
			let studentCollection = studentObject.data;
			Object.keys(studentCollection).forEach((key) => {
			 			studentCollection[key].id = key;
			 			students.push(studentCollection[key]);
			});
	 	  resolve(students);
	 	})
		.catch((error) => {
	 	  reject(error);
	 	});
	});
};

var deleteStudent = function(studentId){
	return $q((resolve, reject) => {
		$http.delete(`${FIREBASE_CONFIG.databaseURL}/students/${studentId}.json`)
		.then(function(deleteResponse){
			//double check may need to ass splice
			resolve(deleteResponse);
		})
		.then(function(deleteError){
			reject(deleteError);
		});
	});
};

var getSingleStudent = function(studentId){
	return $q((resolve, reject) => {
		$http.get(`${FIREBASE_CONFIG.databaseURL}/students/${studentId}.json`)
		.then(function(getSingleResponse){
			resolve(getSingleResponse);
		})
		.then((getSingleError) => {
			reject(getSingleError);
		});
	});
};

 var editStudent = function(editStudent){
	return $q((resolve, reject) => {
		$http.put(`${FIREBASE_CONFIG.databaseURL}/students/${editStudent.id}.json`,
			JSON.stringify({
				fullName: editStudent.fullName,
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
		.then(function(editResponse){
		 resolve(editResponse);
	 })
		.then(function(editError){
			reject(editError);
		});
	});
 };


 return {postNewStudent:postNewStudent, getStudentList:getStudentList, deleteStudent:deleteStudent, getSingleStudent:getSingleStudent, editStudent:editStudent};
});
console.log("StudentFactoryLoaded");
