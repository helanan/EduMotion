app.controller ("templates", function($scope) {
  $scope.someValue = 'Some Value';
});

  app.constant ("userId", "{user.id}");
  app.value ('counter', 0);
  app.value ('image', {name: 'box.jpg', height:12, width:20});

var templates = function ($scope, appMsg) {
    $scope.message = appMsg;
};

app.controller ('controllerA', ['$scope', 'appMsg', function($scope, appMsg) {
    $scope.message = appMsg;
}]);




const studentData = [
  {
    studentId: "1",
    grumpitude: 10,
    weekDay: "Monday"
  },
    {
    studentId: "1",
    grumpitude: 8,
    weekDay: "Tuesday"
  }
];

const allTheGrumpies = studentData.map(data => {
  return data.grumpitude;
});

const grumpTotal = allTheGrumpies.reduce((first, second) => {
  return first + second;
}, 0)

function getAvg (sum, howMany) {
  return sum / howMany;
}

console.log(getAvg(grumpTotal, allTheGrumpies.length))
