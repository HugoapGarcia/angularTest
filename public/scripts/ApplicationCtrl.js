(function() {
  'use strict';

  angular
    .module('app')
    .controller('ApplicationController', ApplicationController);

  ApplicationController.$inject = ['RevenuePerformances', '$http'];

  function ApplicationController(RevenuePerformances, $http) {
    var vm = this;

    vm.revenuePerformances = [];

    RevenuePerformances.get('data.json').then(function(response) {
      vm.revenuePerformances = response.revenue_performances;

      angular.forEach(vm.revenuePerformances, function(item, index){
       item['expected'] = vm.getAverageObject(item.revenue_target);
     });

    });

    vm.getAverageObject = function(total){
    var daysInCurrentMonth = vm.getDaysInMonth(new Date().getMonth() + 1, new Date().getFullYear());
    var unit = Math.round(total / daysInCurrentMonth);
    var currentDate = new Date().getDate();
    var average = unit * currentDate;
    return average;
  }

  vm.getDaysInMonth = function(month, year){
      return new Date(year, month, 0).getDate();
  }

  vm.getPercentage = function(total, actual){
    return Math.round(((100 / total) * actual));
  }

  }


})();
