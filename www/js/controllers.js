'use strict';
angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {})

.controller('OrderCtrl', function($scope, Orders) {
  $scope.showOrders = 0;
  $scope.Orders = Orders.all();
  $scope.ChangeShow = function(val){
    $scope.showOrders = val;
  }
})

.controller('OrderDetailCtrl', function($scope, $stateParams, Orders) {
  $scope.order = Orders.get($stateParams.orderId);
  $scope.Goods = $scope.order.goods;
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
    $scope.num = $scope.num-1;
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
})
.controller('PlaylistsCtrl', function($scope,$ionicSideMenuDelegate) {
  $scope.toggleRight = function() {
    $ionicSideMenuDelegate.toggleRight();
  };
  $scope.goodslists = [
    { type: '蔬菜', id: 0,content:[
      {id:0,name:"小白菜",picture:'img/pic.png',selected:true},
      {id:1,name:"土豆",picture:'img/pic2.jpg',selected:true},
      {id:2,name:"西红柿",picture:'img/pic.png'},
      {id:3,name:"南瓜",picture:'img/pic.png',},
      {id:4,name:"冬瓜",picture:'img/pic2.jpg'},
      {id:5,name:"生菜",picture:'img/pic.png'}
    ] 
  },
    { type: '肉类', id: 1,content:[
      {id:0,name:"猪肉",picture:'img/pic.png',selected:true},
      {id:1,name:"牛肉",picture:'img/pic.png',selected:true},
      {id:2,name:"羊肉",picture:'img/pic2.jpg'}
    ]},
    { type: '水果', id: 2,content:[
        {id:0,name:"西瓜",picture:'img/pic.png',selected:true},
         {id:1,name:"苹果",picture:'img/pic2.jpg',selected:true},
         {id:2,name:"香蕉",picture:'img/pic.png'}] },
  ];
  
  $scope.goods = $scope.goodslists[0].content;
   $scope.changeType = function(goodId) {
      $scope.goods = $scope.goodslists[goodId].content;
     $ionicSideMenuDelegate.toggleRight();
  };
  $scope.goodsSelect = function(goodId){
      $scope.goods[goodId].selected = !$scope.goods[goodId].selected;
  }
})
