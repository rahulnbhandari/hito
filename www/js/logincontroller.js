// loginController.js
var loginController = ['$scope', '$http', function ($scope, $http) {
  var self = this;

  $scope.isBusy = false;

  $scope.login = function (user) {
   window.location = "/authenticated.html"
  };
} ];