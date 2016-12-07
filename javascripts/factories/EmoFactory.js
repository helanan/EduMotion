"use strict";

app.factory("EmoFactory", function($q, $http, FIREBASE_CONFIG){

	var getEmoList = function(emoId){
	 return $q((resolve, reject) => {
	 	$http.get(`${FIREBASE_CONFIG.databaseURL}/emotions.json?orderBy="uid"&equalTo="${emoId}"`)
	 	.success(function(response){
	 		let emos = [];
	 		Object.keys(response).forEach(function(key){
	 			response[key].id = key;
	 			emos.push(response[key]);
	 		});
	 	  resolve(emos);
	 	})
	 	.error(function(errorResponse){
	 	  reject(errorResponse);
	 	});
	});
  };
 var postNewEmo = function(newEmo){
	return $q((resolve, reject)=>{
		$http.post(`${FIREBASE_CONFIG.databaseURL}/emotions.json`,
			JSON.stringify({
				assignedTo: newEmo.assignedTo,
				isSelected: newEmo.isSelected,
				emotion: newEmos.students,
				uid: newEmo.uid
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

var deleteEmo = function(emoId){
	return $q((resolve, reject) => {
		$http.delete(`${FIREBASE_CONFIG.databaseURL}/emotions/${emoId}.json`)
		.success(function(deleteResponse){
			resolve(deleteResponse);
		})
		.error(function(deleteError){
			reject(deleteError);
		});
	});
};

var getSingleEmo = function(emoId){
	return $q((resolve, reject) => {
		$http.get(`${FIREBASE_CONFIG.databaseURL}/emotions/${emoId}.json`)
		.success(function(getSingleResponse){
			resolve(getSingleResponse);
		})
		.error(function(getSingleError){
			reject(getSingleError);
		});
	});
};

 var editEmo = function(editEmo){
	return $q((resolve, reject)=>{
		$http.put(`${FIREBASE_CONFIG.databaseURL}/emotionss/${editEmo.id}.json`,
			JSON.stringify({
				assignedTo: editEmo.assignedTo,
				isSelected: editEmo.isSelected,
				pins: editEmo.student,
				uid: editEmo.uid
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


 return {getEmoList:getEmoList, postNewEmo:postNewEmo, deleteEmo:deleteEmo, getSingleEmo:getSingleEmo, editEmo:editEmo};
});

