app.controller("StudentViewCtrl", function($scope, $rootScope, StudentFactory){
  $scope.students= [];
      let $scope.fullName = $rootScope.student.name;
  $scope.emotionInfo = {};

    $scope.getEmotionInfo = function(){
      $rootScope.emtionInfo.value;
      }
}
console.log(students.fullName() + ": " + employee.getEmotionInfo());
  });
