"use strict";

app.controller("AuthCtrl", function($scope, $rootScope, $location, AuthFactory, UserFactory) {
    $scope.loginContainer = true;
    $scope.registerContainer = false;
    $scope.login = {
      email: "helanan@gmail.com",
      password: "121586"
    };

//if the location path is logout call logout, clear the user creds and take the user back to the auth screen
    if ($location.path() === "#/logout") {
        AuthFactory.logout();
        $rootScope.user = {};
        $location.url("#/auth");
    }

//variable logMeIn: creates a function called "loginStuff", authenticates the loginStuff, then create a promise of "didLogin"
    let logMeIn = function(loginStuff){
    		AuthFactory.authenticate(loginStuff)
        .then(function(didLogin){

    			console.log("didLogin", didLogin);
    			console.log("didLogin by email", didLogin.email);
    			console.log("didLogin with provider data", didLogin.providerData[0]);
          console.log("didLogin by uid", didLogin.uid);
          //return getUser from the user factory by the users uid

    			return UserFactory.getUser(didLogin.uid);
    		}).then(function(userCreds){

          console.log("userCreds", userCreds);
    			$rootScope.user = userCreds;
          console.log("RootScope of user", $rootScope.user);
    			$scope.login = {};
          console.log("Login", $scope.login);
    			$scope.register = {};
          console.log("Register", $scope.register);
    			$location.url("/students/new");
    		});
    	};


    $scope.setLoginContainer = function() {
        $scope.loginContainer = true;
        $scope.registerContainer = false;
    };

    $scope.setRegisterContainer = function() {
        $scope.loginContainer = false;
        $scope.registerContainer = true;
    };

    $scope.registerUser = function(registerNewUser) {
        AuthFactory.registerWithEmail(registerNewUser).then(function(didRegister) {
            registerNewUser.uid = didRegister.uid;
            console.log("Register New User by UID", didRegister.uid);
            return UserFactory.addUser(registerNewUser);
        }).then(function(registerComplete) {
            logMeIn(registerNewUser);
        });
    };

    $scope.loginUser = function(loginNewUser) {
        logMeIn(loginNewUser);
        console.log("logMeIn", logMeIn);
    };
});
