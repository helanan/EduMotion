"use strict";

app.controller("AuthCtrl", function($scope, $rootScope, $location, AuthFactory, UserFactory) {

    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

    $scope.loginContainer = true;
    $scope.registerContainer = false;
    $scope.login = {};

    if ($location.path() === "#!/logout") {
        AuthFactory.logout();
        $rootScope.user = {};
        $location.url("#!/auth");
    }

    let logMeIn = function(loginStuff) {
        AuthFactory.authenticate(loginStuff)
            .then(function(didLogin) {
                return UserFactory.getUser(didLogin.uid);
            }).then(function(userCreds) {
                $rootScope.user = userCreds;
                $scope.login = {};
                $scope.register = {};
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
            return UserFactory.addUser(registerNewUser);
        }).then(function(registerComplete) {
            logMeIn(registerNewUser);
        });
    };

    $scope.loginUser = function(loginNewUser) {
        logMeIn(loginNewUser);
    };

    $scope.loginGoogle = () => {
        AuthFactory.authenticateGoogle()
            .then(function(result) {
                var user = result.user;
                $location.path("/students/new");
                $scope.$apply();
            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    };
});
