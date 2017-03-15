"use strict";

app.controller("AuthCtrl", function($scope, $rootScope, $location, AuthFactory, UserFactory) {
console.log("Controller: Authentication Controller Loaded");

  $scope.loginContainer = true;
  console.log("Login Container ON");
  $scope.registerContainer = false;
  $scope.login = {
    email: "helanan@gmail.com",
    password: "121586",
  };
console.log("Login Email & Password: ", $scope.login);
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

    			console.log("didLogin called:", didLogin, "Logged in with email", didLogin.email, "Logged in with provider data: ", didLogin.providerData[0], "Logged in by uid", didLogin.uid );

          //return getUser from the user factory by the users uid
    			return UserFactory.getUser(didLogin.uid);
    		}).then(function(userCreds){

          console.log("userCreds", userCreds);
    			$rootScope.user = userCreds;
          console.log("User Creds:", userCreds, "UID=", userCreds.uid, "Username=", userCreds.username);
    			$scope.login = {};
    			$scope.register = {};
    			$location.url("/students/new");
          console.log("redirected to /students/new");
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
            return UserFactory.addUser(registerNewUser);
        }).then(function(registerComplete) {
            logMeIn(registerNewUser);
        });
    };

    $scope.loginUser = function(loginNewUser) {
        logMeIn(loginNewUser);
    };

//logging with google
// TODO: add google login button and connect
    $scope.loginGoogle = () => {
    		console.log("you clicked login with Google");
    		AuthFactory.authWithProvider()
    		.then(function(result) {
    	    	var user = result.user.uid;
    	    	//Once logged in, go to another view
    	    	$location.path("/students/list");
            console.log("Take me to /students/list");
    	    	$scope.$apply();
    	  	}).catch(function(error) {
    	    	// Handle the Errors.
    	    	console.log("error with google login", error);
    	    	var errorCode = error.code;
    	    	var errorMessage = error.message;
    	    	// The email of the user's account used.
    	    	var email = error.email;
    	    	// The firebase.auth.AuthCredential type that was used.
    	    	var credential = error.credential;
    	  	});
    	};

});
