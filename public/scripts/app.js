/* Angular Application Definition - Hildegard */
var app = angular
  .module('Hildegard', ['ngRoute'])
  .config(config);

  config.$inject = ['$routeProvider', '$locationProvider'];
  function config($routeProvider, $locationProvider){
    /* AngularJS client-side routing */
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      })
      .when('/about', {
        templateUrl: '/templates/about.html'
      })
      .when('/portfolio', {
        templateUrl: '/templates/portfolio.html',
        controller: 'PortfolioController',
        controllerAs: 'portCtrl'
      })
      .when('/social', {
        templateUrl: '/templates/social.html',
      })

      /* Enables HTML5 mode */
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
  }
