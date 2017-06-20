"use strict";

app.factory("StudentFactory", ($q, $http, FIREBASE_CONFIG) => {


    let getStudentList = (user) => {

        let students = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/students.json?orderBy="uid"&equalTo="${user.uid}"`)
                .then((studentObject) => {
                    let studentCollection = studentObject.data;
                    Object.keys(studentCollection).forEach((key, studentFullName) => {
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

    let postNewStudent = (newStudent) => {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/students.json`,
                    JSON.stringify(newStudent))
                .then((ObjectFromFirebase) => {
                    resolve(ObjectFromFirebase);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    var deleteStudent = (studentId) => {
        return $q((resolve, reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/students/${studentId}.json`)
                .then((ObjectFromFirebase) => {
                    resolve(ObjectFromFirebase);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    var getSingleStudent = (studentId) => {
        return $q(function(resolve, reject) {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/students/${studentId}.json`)
                .then(function(studentObject) {
                    resolve(studentObject.data);
                })
                .catch(function(error) {
                    reject(error);
                });
        });
    };

    var updateStudent = (studentId, editedStudent) => {
        return $q(function(resolve, reject) {
            $http.patch(`${FIREBASE_CONFIG.databaseURL}/students/${studentId}.json`,
                    angular.toJson(editedStudent))
                .then(function(ObjectFromFirebase) {
                    resolve(ObjectFromFirebase);
                })
                .catch(function(error) {
                    reject(error);
                });
        });
    };

    return {
        postNewStudent,
        getStudentList,
        deleteStudent,
        getSingleStudent,
        updateStudent
    };
});
