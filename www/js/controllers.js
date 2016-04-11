'use strict';
angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {})

.controller('OrderCtrl', function($scope, Orders) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.Orders = Orders.all();
  $scope.remove = function(order) {
    Orders.remove(order);
  };
})

.controller('OrderDetailCtrl', function($scope, $stateParams, Orders) {
  $scope.order = Orders.get($stateParams.orderId);
})

.controller('MyCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})  
.controller('MainPlanCtrl', function($scope,Purchases) {
  $scope.Purchases = Purchases.all();
})
.controller('MainmMarketCtrl', function($scope,Purchases) {
  $scope.Purchases = Purchases.all();
})
.controller('MainPurchaseCtrl', function($scope,mainPurchases) {
  $scope.mainPurchases = mainPurchases.all();
  $scope.ShowModel = 0;
  $scope.ChangeShow = function(val){
    $scope.ShowModel = val;
  }
})

.controller('MyPurchaseCtrl', function($scope,Purchases) {
  $scope.Purchases = Purchases.all();
})
.controller('PurchaseDetailCtrl', function($scope, $stateParams, Purchases) {
  $scope.ShowModel = 1;
  $scope.purchase = Purchases.get($stateParams.purchaseId);
  $scope.goods =$scope.purchase.goods;
  $scope.ChangeShow = function(val){
    $scope.ShowModel = val;
  }
  $scope.ShowGoods = 0;
  $scope.ChangeGoods = function(val){
    $scope.ShowGoods  = val;
  }
});
