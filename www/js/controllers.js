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
.controller('PlanNewCtrl', function ($scope, ionicTimePicker) {
  //时间
   $scope.startTime = new Date().getHours() + "时" + new Date().getMinutes() + "分";
   $scope.endTime = new Date().getHours()+1 + "时" + new Date().getMinutes() + "分";
  var ipObj1 = {
    callback: function (val) {      //Mandatory
      if (typeof (val) === 'undefined') {
        $scope.time='未选择时间'
      } else {
        var selectedTime = new Date(val * 1000);
        //console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
        $scope.startTime = selectedTime.getUTCHours() + '时' + selectedTime.getUTCMinutes() + '分';
        $scope.endTime = selectedTime.getUTCHours()+1 + '时' + selectedTime.getUTCMinutes() + '分';
      }
    },
    inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
    format: 24,         //Optional
    step: 1,           //Optional
    setLabel: '确定',
    closeLabel:'关闭'    //Optional
  };
  $scope.openTimePicker = function(){
    ionicTimePicker.openTimePicker(ipObj1);
  }

  //计数
  $scope.num = 123;
  $scope.add = function(){
    $scope.num = $scope.num+1;
  }
  $scope.subtract = function(){
    $scope.num = $scope.num+1;
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
