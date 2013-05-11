// landingController.js
var landingController = ['$scope', '$http', function ($scope, $http) {
  var self = this;

  $scope.prefs = {
    budget: "$2,000",
    startDate: "6/1/2013",
    endDate: "6/4/2013",
    location: "New York, NY"
  };

  $scope.search = function (prefs) {

    var qsparams = [];
    if (prefs.budget) {
      qsparams.push("budget=" + prefs.budget);
    }

    if (prefs.startDate) {
      qsparams.push("startDate=" + prefs.startDate);
    }

    if (prefs.endDate) {
      qsparams.push("endDate=" + prefs.endDate);
    }

    if (prefs.startLocation) {
      qsparams.push("loc=" + prefs.location);
    }

    var qs = "";
    $.each(qsparams, function (i, item) {
      qs += item + "&";
    });

    window.location = "search.html?" + qs;
  };

} ];