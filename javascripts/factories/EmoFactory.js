"use strict";

app.factory("EmoFactory", function($q, $http, FIREBASE_CONFIG){

	var getEmoList = function(emotionId){
	 return $q((resolve, reject) => {
	 	$http.get(`${FIREBASE_CONFIG.databaseURL}/emotions.json?orderBy="uid"&equalTo="${emotionId}"`)
	 	.success(function(response){
	 		let emotions = [];
	 		Object.keys(response).forEach(function(key){
	 			response[key].id = key;
	 			emotions.push(response[key]);
	 		});
	 	  resolve(emotions);
	 	})
	 	.error(function(errorResponse){
	 	  reject(errorResponse);
	 	});
	});
  };
 var postNewEmotion = function(newEmotion){
	return $q((resolve, reject)=>{
		$http.post(`${FIREBASE_CONFIG.databaseURL}/emotions.json`,
			JSON.stringify({
<<<<<<< HEAD
				assignedTo: newEmotion.assignedTo,
				isSelected: newEmotion.isSelected,
				emotion: newEmotion.students,
				studentId: newEmotion.studentId
=======
				value: newEmo.value,
				uid: newEmo.uid,
				url: newEmo.url,
				studentId: newEmo.studentId
>>>>>>> 9c08756148b309fc1c648ba8597d630245ece61d
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

var deleteEmotion = function(emotionId){
	return $q((resolve, reject) => {
		$http.delete(`${FIREBASE_CONFIG.databaseURL}/emotions/${emotionId}.json`)
		.success(function(deleteResponse){
			resolve(deleteResponse);
		})
		.error(function(deleteError){
			reject(deleteError);
		});
	});
};

var getSingleEmotion = function(emotionId){
	return $q((resolve, reject) => {
		$http.get(`${FIREBASE_CONFIG.databaseURL}/emotions/${emotionId}.json`)
		.success(function(getSingleResponse){
			resolve(getSingleResponse);
		})
		.error(function(getSingleError){
			reject(getSingleError);
		});
	});
};

<<<<<<< HEAD
 var editEmotions = function(editEmotion){
	return $q((resolve, reject)=>{
		$http.put(`${FIREBASE_CONFIG.databaseURL}/emotions/${editEmotion.id}.json`,
			JSON.stringify({
				assignedTo: editEmotion.assignedTo,
				isSelected: editEmotion.isSelected,
				pins: editEmotion.student,
				studentId: editEmotion.studentId
=======
 var editEmo = function(editEmo){
	return $q((resolve, reject) =>{
		$http.put(`${FIREBASE_CONFIG.databaseURL}/emotions/${editEmo.id}.json`,
			JSON.stringify({
				value: editEmo.value,
				uid: editEmo.uid,
				url: editEmo.url,
				studentId: editEmo.studentId
>>>>>>> 9c08756148b309fc1c648ba8597d630245ece61d
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


 return {getEmotionList:getEmotionList, postNewEmotion:postNewEmotion, deleteEmotion:deleteEmotion, getSingleEmotion:getSingleEmo, editEmotion:editEmotion};
});
