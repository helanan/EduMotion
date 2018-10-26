"use strict";

app.factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG) {
    let currentUserData = null;
    let isAuthenticated = () => {
        return firebase.auth().currentUser ? true : false;
    };

    let getUser = () => {
        return firebase.auth().currentUser;
    };
    let logout = () => {
        firebase.auth().signOut();
    };
    let authenticate = (credentials) => {
        return $q((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
                .then((authData) => {
                    resolve(authData);
                })
                .catch(error => {
                    reject(error);
                })
                .then(() => {});
        });
    };

    let registerWithEmail = (user) => {
        return $q((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((authData) => {
                    resolve(authData);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };


    let authenticateGoogle = () => {
        return $q((resolve, reject) => {
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.setCustomParameters({
                'login_hint': 'user@example.com'
              });

            //sign-in with pop up
            firebase.auth().signInWithPopup(provider)
                .then((authData) => {
                    var token = authData.credential.accessToken;
                    currentUserData = authData.user;
                    resolve(currentUserData);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };

    return {
        isAuthenticated,
        getUser,
        logout,
        registerWithEmail,
        authenticate,
        authenticateGoogle
    };
});

// console.log(app.factory()._invokeQueue[1][2]["0"]);

