var app = angular.module("hp", []);

app.controller("hpCtrl", function($scope, $http) {
  $http.get("Candidates.json").then(function(response) {
    $scope.candidates = response.data;
  });
});
