(function() {
 'use strict';
 angular
.module('app')
.directive('userDetails', function() {
  return {
       templateUrl : "./template/user.html"
  };
});
})();
