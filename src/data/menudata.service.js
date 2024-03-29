(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http','$q', '$timeout']
function MenuDataService($http,$q, $timeout) {
  var service = this;
  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    });
    return response;
  };

  service.getItemsForCategory =  function(categoryShortName) {
    var response = $http({
     method: "GET",
     url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
   });
   return response;
  }
}

})();
