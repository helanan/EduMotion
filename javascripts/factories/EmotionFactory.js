"use strict";

app.factory("EmotionFactory", ($q, $http, FIREBASE_CONFIG) => {

    let getEmotionList = (user) => {
        let emotions = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/emotions.json?orderBy="uid"&equalTo="${user.uid}"`)
                .then((emotionObject) => {
                    let emotionCollection = emotionObject.data;
                    Object.keys(emotionCollection).forEach((key) => {
                        emotionCollection[key].id = key;
                        emotions.push(emotionCollection[key]);
                    });
                    resolve(emotions);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    let postNewEmotion = (newEmotion) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/emotions.json`,
                    JSON.stringify(newEmotion))
                .then((ObjectFromFirebase) => {
                    resolve(ObjectFromFirebase);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    var deleteEmotion = (emotionId) => {
        return $q((resolve, reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/emotions/${emotionId}.json`)
                .then((ObjectFromFirebase) => {
                    resolve(ObjectFromFirebase);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    let getSingleEmotion = (emotionId) => {
        return $q(function(resolve, reject) {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/emotions/${emotionId}.json`)
                .then(function(emotionObject) {
                    resolve(emotionObject.data);
                })
                .catch(function(error) {
                    reject(error);
                });
        });
    };

    let updateEmotion = (emotionId, editedEmotion) => {
        return $q(function(resolve, reject) {
            $http.patch(`${FIREBASE_CONFIG.databaseURL}/emotions/${emotionId}.json`,
                    angular.toJson(editedEmotion))
                .then(function(ObjectFromFirebase) {
                    resolve(ObjectFromFirebase);
                })
                .catch(function(error) {
                    reject(error);
                });
        });
    };

    return {
        getEmotionList,
        postNewEmotion,
        deleteEmotion,
        getSingleEmotion,
        updateEmotion
    };
});
