(function() {
  var app = angular.module("resumeApp", []);

  // Main Controller
  app.controller("ResumeController", ["$http", function($http) {
    this.resume = {};

    // HTTP request for retrieving JSON with Resume contents
    var self = this;
    $http.get("/js/resume.json")
      .success(function(data) {
        self.resume = data;
      })
      .error(function(error) {
        console.log("Error retriving JSON in ResumeController: " + error);
      });
  }]);
})();