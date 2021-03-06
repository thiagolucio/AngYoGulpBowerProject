(function() {
  'use strict';

  angular
    .module('FiveSportsApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('agente_autorizado', {
        url: '/agente-autorizado',
        templateUrl: 'app/autorizado/autorizado.html',
        controller: 'AutorizadoController',
        controllerAs: 'vm'
      })
      .state('sobre-nos', {
        url: '/sobre-nos',
        templateUrl: 'app/sobre-nos/sobre-nos.html',
        controller: 'SobreNosController',
        controllerAs: 'vm'
      })
      .state('treinamentos', {
        url: '/treinamentos',
        templateUrl: 'app/treinamentos/treinamentos.html',
        controller: 'TreinamentosController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
