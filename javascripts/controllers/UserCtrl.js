"use strict";

app.controller("UserCtrl", function($scope, $rootScope, $location, UserFactory, AuthFactory, StudentFactory) {

  // var query = firebase.database().ref("users/").orderByKey();
  // query.once("value")
  //   .then(function(snapshot) {
  //     snapshot.forEach(function(childSnapshot) {
  //       // key will be "ada" the first time and "alan" the second time
  //       var key = childSnapshot.key;
  //       // childData will be the actual contents of the child
  //       var childData = childSnapshot.val();
  //   });
  // });
  


  console.log(firebase.auth().currentUser.providerData);
  

    console.log($rootScope.user);

    let user = AuthFactory.getUser();
    // let students = StudentFactory.getStudentList();
    let email = user.email;
    let displayName = user.displayName;
    let verified = user.emailVerified;
    let photoURL = user.photoURL;

    $scope.myemail = email;
    $scope.mydisplayName = displayName;
    $scope.myverified = verified;    
    $scope.myphotoURL = photoURL;    

  //   let students = StudentFactory.getStudentList(user);
  // console.log(students)

  StudentFactory.getStudentList(user)
      .then(function(studentCollection) {
          $scope.students = studentCollection;
          console.log(studentCollection);
      });
    // var ref = firebase.database().ref("users/helana");
    // ref.once("value")
    //   .then(function(snapshot) {
    //     var key = snapshot.key; // "ada"
    //     var childKey = snapshot.child("name/last").key; // "last"
    //   });


    $scope.print = function(print){
      window.print();
    };
});