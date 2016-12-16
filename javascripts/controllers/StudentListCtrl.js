app.controller("StudentListCtrl", function($scope, $rootScope, StudentFactory){
  $scope.students= [];
  $scope.listStudents = $scope.students;
  $scope.reverse = true;
  $scope.column = 'make';
  $scope.setSort = function(column) {
      $scope.column - column;
      $scope.reverse = !$scope.reverse;
    };

    $scope.filterString = '';
    $scope.setFilter = function(value) {
      $scope.filteredStudents = filterFilter($scope.students, $scope.filterString);
    };
  }]);
