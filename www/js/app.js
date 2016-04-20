'use strict';
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ionic-timepicker'])
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
  $stateProvider
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
   .state('tab.market-detail', {
    url: '/main/market/:purchaseId',
    views: {
      'tab-main': {
        templateUrl: 'templates/my/purchase-detail.html',
        controller: 'PurchaseDetailCtrl'
      }
    }
  })
  .state('tab.main-market', {
    url: '/main/market',
    views: {
      'tab-main': {
        templateUrl: 'templates/main/main-market.html',
        controller: 'MainmMarketCtrl'
      }
    }
  })
  .state('tab.main-purchase', {
    url: '/main/purchase',
    views: {
      'tab-main': {
        templateUrl: 'templates/main/main-purchase.html',
        controller: 'MainPurchaseCtrl'
      }
    }
  })
  .state('tab.goodslists', {
      url: '/main/plan/new/goodslists',
      views: {
        'tab-main': {
          templateUrl: 'templates/goods/goodslists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
  .state('tab.plan-detail', {
    url: '/main/plan/detail',
    views: {
      'tab-main': {
        templateUrl: 'templates/main/plan-detail.html',
        controller: 'PlanNewCtrl'
      }
    }
  })
  .state('tab.plan-new', {
    url: '/main/plan/new',
    views: {
      'tab-main': {
        templateUrl: 'templates/main/plan-new.html',
        controller: 'PlanNewCtrl'
      }
    }
  })
   .state('tab.main-plan', {
    url: '/main/plan',
    views: {
      'tab-main': {
        templateUrl: 'templates/main/main-plan.html',
        controller: 'MainPlanCtrl'
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
        templateUrl: 'templates/my/purchase-detail.html',
        controller: 'PurchaseDetailCtrl'
      }
    }
  })
  .state('tab.my-information', {
    url: '/my/information',
    views: {
      'tab-my': {
        templateUrl: 'templates/my/my-information.html',
        controller: 'MyInformationCtrl'
      }
    }
  })
  .state('tab.my-new', {
    url: '/my/purchase/new/:purchaseId',
    views: {
      'tab-my': {
        templateUrl: 'templates/my/purchase-new.html',
        controller: 'MyNewCtrl'
      }
    }
  })
  .state('tab.my-purchase', {
    url: '/my/purchase',
    views: {
      'tab-my': {
        templateUrl: 'templates/my/my-purchase.html',
        controller: 'MyPurchaseCtrl'
      }
    }
  })
  .state('tab.my-charge', {
    url: '/my/charge',
    views: {
      'tab-my': {
        templateUrl: 'templates/my/my-charge.html',
        controller: 'MyChargeCtrl'
      }
    }
  })
   .state('tab.my-message', {
    url: '/my/message',
    views: {
      'tab-my': {
        templateUrl: 'templates/my/my-message.html',
        controller: 'MyMessageCtrl'
      }
    }
  })
    .state('tab.my-share', {
    url: '/my/share',
    views: {
      'tab-my': {
        templateUrl: 'templates/my/my-share.html'
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
        templateUrl: 'templates/order/order-detail.html',
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
  })
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login/tab-signin.html',
    controller:'LoginCtrl'
  })
  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/login/tab-signup.html',
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('login');

})

.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');// other values: top
    $ionicConfigProvider.backButton.icon('ion-chevron-left');
    $ionicConfigProvider.platform.ios.backButton.icon('ion-chevron-left');
    $ionicConfigProvider.platform.android.backButton.icon('ion-chevron-left'); 
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.backButton.text("");
  }])