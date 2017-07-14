(function() {
  'use strict';
  var app = angular.module('app', []);

  app.directive('details', function(){
    return {
      replace: true,
      templateUrl: './template/user.html'
    }
  });

})();
