'use strict';
angular.module('starter.controllers', [])
.controller('LoginCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,  $location, $ionicPopup,$state,$http,ENV,$rootScope) {
 $scope.user = {};
 $scope.sendMsg = function(user) {
   if(user.mobileNumber === undefined){
    $scope.showAlert('手机号码不能为空！'); 
    return false;
  }
  $http.get( ENV.domain + "user/sendValidateCode",{params: {
    "mobileNumber":user.mobileNumber
  }}).success(function(){
    $scope.showAlert('短信发送成功！'); 
  }).error(function(){
    $scope.showAlert("错误");
  })
}

$scope.login = function(user) {
 if(user.mobileNumber === undefined || user.validateCode === undefined){
  $scope.showAlert('手机号码和验证码不能为空！'); 
  return false;
}
$http.post( ENV.domain + "/user/validateUser",{
  "userTypeCode":3,
  "mobileNumber":user.mobileNumber,
  "validateCode":user.validateCode
}).success(function(response){
  if (!!response) {
      response.name = response.name?response.name:'未补全资料';
  }else{
       $scope.showAlert("验证码过期，请重新点击发送！");
       return false;
  }
  $rootScope.user = response;
  $scope.showAlert('登录成功！'); 
  $state.go('tab.main');
}).error(function(){
  $scope.showAlert("错误");
})
}

$scope.showAlert = function(msg) {
 var alertPopup = $ionicPopup.alert({
   title: '提示',
   template: msg,
   buttons: [
   {
    text:'确认',
    type: 'button-assertive'
  }]
});
};
})

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

.controller('MyCtrl', function($scope,$location, $rootScope) {
  var user = {};
  $scope.logout = function() {$location.path('/login');};
  // $scope.user = $rootScope.user;
  //console.info( $rootScope.user);
})  

.controller('MyInformationCtrl', function($scope) {})  
.controller('MyChargeCtrl', function($scope) {})  
.controller('MyMessageCtrl', function($scope) {
  $scope.ShowMessage = 0;
  $scope.ChangeShow = function(val){
    $scope.ShowMessage = val;
  }
})  
.controller('MyNewCtrl', function($scope,Purchases) {
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
.controller('MyPurchaseCtrl', function($scope,Purchases) {
  $scope.Purchases = Purchases.all();
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

.controller('MainPlanCtrl', function($scope,Purchases,$ionicPopup) {
  $scope.Purchases = Purchases.all();
  $scope.showPopup = function(){
    $ionicPopup.show({
      template: "<input type='number' ng-model='data.money' style='border:1px solid #ddd'>",
      title: "是否现在付给订金？",
      scope: $scope,
      buttons: [
      { text: "取消" },
      {
        text: "<b>确认</b>",
        type: "button-assertive",
        onTap: function(e) {
          return $scope.data.money;
        }
      }
      ]
    })
  }
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
