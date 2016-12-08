"use strict";

app.factory("EmoFactory", function($q, $http, FIREBASE_CONFIG){

	var getEmoList = function(emoId){
	 return $q((resolve, reject) => {
	 	$http.get(`${FIREBASE_CONFIG.databaseURL}/emotions.json?orderBy="uid"&equalTo="${emoId}"`)
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
 var postNewEmo = function(newEmo){
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
	return $q((resolve, reject) =>{
		$http.put(`${FIREBASE_CONFIG.databaseURL}/emotions/${editEmo.id}.json`,
			JSON.stringify({
				value: editEmo.value,
				uid: editEmo.uid,
				url: editEmo.url,
				studentId: editEmo.studentId
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
