'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.main-market', {
    url: '/main/market',
    views: {
      'tab-main': {
        templateUrl: 'templates/main-market.html',
        controller: 'MainmMarketCtrl'
      }
    }
  })
   .state('tab.main-plan', {
    url: '/main/plan',
    views: {
      'tab-main': {
        templateUrl: 'templates/main-plan.html',
        controller: 'MainPlanCtrl'
      }
    }
  })
  .state('tab.main-purchase', {
    url: '/main/purchase',
    views: {
      'tab-main': {
        templateUrl: 'templates/main-purchase.html',
        controller: 'MainPurchaseCtrl'
      }
    }
  })
  .state('tab.main', {
    url: '/main',
    views: {
      'tab-main': {
        templateUrl: 'templates/tab-main.html',
        controller: 'MainCtrl'
      }
    }
  })
  .state('tab.purchase-detail', {
    url: '/my/purchase/:purchaseId',
    views: {
      'tab-my': {
        templateUrl: 'templates/purchase-detail.html',
        controller: 'PurchaseDetailCtrl'
      }
    }
  })
  .state('tab.my-purchase', {
    url: '/my/purchase',
    views: {
      'tab-my': {
        templateUrl: 'templates/my-purchase.html',
        controller: 'MyPurchaseCtrl'
      }
    }
  })
  .state('tab.my', {
    url: '/my',
    views: {
      'tab-my': {
        templateUrl: 'templates/tab-my.html',
        controller: 'MyCtrl'
      }
    }
  })
  .state('tab.order-detail', {
    url: '/order/:orderId',
    views: {
      'tab-order': {
        templateUrl: 'templates/order-detail.html',
        controller: 'OrderDetailCtrl'
      }
    }
  })

  .state('tab.order', {
    url: '/order',
    views: {
      'tab-order': {
        templateUrl: 'templates/tab-order.html',
        controller: 'OrderCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/main');

})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');// other values: top
    $ionicConfigProvider.backButton.icon('ion-chevron-left');
    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-chevron-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-chevron-left'); 
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.backButton.text("");
  }])
