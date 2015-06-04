(function() {
  var app = angular.module("resumeApp", []);

  // Main Controller
  app.controller("ResumeController", ["$http", function($http) {
    this.resume = {};

    // HTTP request for retrieving JSON with Resume contents
    var url = "/js/resume.json";
    var self = this;
    $http.get(url)
      .success(function(data) {
        self.resume = data;
      })
      .error(function(error) {
        console.log("Error retriving JSON in ResumeController: " + error);
      });
  }]);
})();