(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);

// 'item' is injected through state's resolve
ItemsController.$inject = ['menuItems']
function ItemsController(menuItems) {
  var itemDetail = this;
  itemDetail.items = menuItems.map((item) => {
    return {
      name: item.name,
      shortName: item.short_name
    }
  });
  console.log('items', itemDetail);
}

})();
