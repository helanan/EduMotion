"use strict";

app.factory("EmotionFactory", function($q, $http, FIREBASE_CONFIG){

	var postNewEmotion = function(newEmotion){
       return $q((resolve, reject) =>{
    	$http.post(`${FIREBASE_CONFIG.databaseURL}/emotions.json`,
    	   JSON.stringify({
		  task: newEmotion.task,
    		 assignedTo: newEmotion.assignedTo,
    		 isCompleted: newEmotion.isCompleted,
    		 emotionImage: newEmotion.image,
    		 studentId: newEmotion.studentId,
		 status: newEmotion.emotionStatus,
		 color: newEmotion.emotionColor,
		 activityLoved: newEmotion.activityLoved,
		 activityHates: newEmotion.activityHates,
		 score: newEmotion.score,
		 totalScore: newEmotion.totalScore
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


  var getEmotionList = function(emotionId){
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/emotions.json?orderBy="studentId"&equalTo="${emotionId}"`)
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

  var editEmotion = function(editEmotion){
    return $q((resolve, reject) =>{
      $http.put(`${FIREBASE_CONFIG.databaseURL}/emotions/${editEmotion.id}.json`,
         JSON.stringify({
				task: editEmotion.task,
		  		assignedTo: editEmotion.assignedTo,
		  		isCompleted: editEmotion.isCompleted,
		  		emotionImage: editEmotion.image,
		  		studentId: editEmotion.studentId,
				status: editEmotion.emotionStatus,
				color: editEmotion.emotionColor,
				activityLoved: editEmotion.activityLoved,
				activityHates: editEmotion.activityHates,
				score: editEmotion.score,
				totalScore: editEmotion.totalScore
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
