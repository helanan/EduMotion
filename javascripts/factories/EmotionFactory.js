"use strict";

app.factory("EmotionFactory", function($q, $http, FIREBASE_CONFIG){


	var getEmotionList = function(emotionId){
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
				value: newEmo.value,
				uid: newEmo.uid,
				url: newEmo.url,
				studentId: newEmo.studentId
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

 var editEmotions = function(editEmotion){
	return $q((resolve, reject)=>{
		$http.put(`${FIREBASE_CONFIG.databaseURL}/emotions/${editEmotion.id}.json`,
			JSON.stringify({
				assignedTo: editEmotion.assignedTo,
				isSelected: editEmotion.isSelected,
				pins: editEmotion.student,
				studentId: editEmotion.studentId
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

 return {getEmotionList:getEmotionList, postNewEmotion:postNewEmotion, deleteEmotion:deleteEmotion, getSingleEmotion:getSingleEmotion, editEmotion:editEmotion};
});
