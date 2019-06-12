(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/data/templates/home.template.html'
  })

  // Categories list page
  .state('categoriesList', {
    url: '/categories',
    templateUrl: 'src/data/templates/categories.template.html',
    controller: 'CategoriesController as categoriesList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
        .then(function (items) {
          return items.data;
        });
      }]
    }
  })
//Menu items list for each category
  .state('items', {
    url: '/items/{itemShortName}',
    templateUrl: 'src/data/templates/items.template.html',
    controller: 'ItemsController as itemDetail',
    resolve: {
      menuItems: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.itemShortName)
                .then(function (items) {
                  return items.data.menu_items;
                });
            }]
    }
  });
}

})();
