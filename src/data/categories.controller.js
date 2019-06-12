(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['items'];
function CategoriesController(items) {
  var categoriesList = this;
  categoriesList.items = items.map((item) => {
    return {
      name: item.name,
      shortName: item.short_name
    }
  });
}
})();
