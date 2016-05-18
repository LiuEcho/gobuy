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
  // if (!!response) {
  //   console.warn(response);
  //     response.name = response.name?response.name:'未补全资料';
  // }else{
  //      $scope.showAlert("验证码过期，请重新点击发送！");
  //      return false;
  // }
  // $rootScope.user = response;
  // $scope.showAlert('登录成功！'); 
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
.controller('MainMarketCtrl', function($scope,Purchases,$http,ENV) {
  var Marketes = {};
  $scope.Purchases = Purchases.all();
  $http.get( ENV.domain + "/user/queryMarketList",{}).success(function(response){
    $scope.Marketes = response;
  }).error(function(){
    $scope.showAlert("错误");
  })

})
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
  $scope.logout = function() {$location.path('/login');};
})

.controller('MyInformationCtrl', function($scope,$rootScope) {})  
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

.controller('PlaylistsCtrl', function($scope,$ionicSideMenuDelegate,$http,ENV) {
  $scope.goods = [];
  $scope.selectedId = [];
  $scope.number = 0;
  $scope.toggleRight = function() {
    $ionicSideMenuDelegate.toggleRight();
  };
  $http.get( ENV.domain + "goods/queryParentCategory",{}).success(function(response){
    $scope.goodslists = response;
    $scope.changeType(1);
  })
  $scope.changeType = function(goodId) {//更改商品分类
   $scope.goods = [];
   $http.get( ENV.domain + "goods/queryCategoryAndGoods",{params: {
    "categoryId":goodId
  }}).success(function(response){
    for(var i in response){
      for (var j in response[i]) {
        response[i][j].selected = false;
        $scope.goods.push(response[i][j]);
      }
    };
  })
  $ionicSideMenuDelegate.toggleRight();
};

$scope.goodsSelect = function(id){
  var number = 0;
  for (var i in $scope.goods) {
    if ($scope.goods[i].id === id) {//点击选择
      $scope.goods[i].selected = !$scope.goods[i].selected;
    }

    if ($scope.goods[i].selected) {//统计被选择的商品数
      //$scope.selectedId.push($scope.goods[i].goodsId);
      number++;
    }else{
      //$scope.selectedId.splice(1,$scope.goods[i].goodsId);
    }
  }
  $scope.number = number;
  console.log($scope.selectedId);
};

$scope.finshSelect = function(){
  $scope.$broadcast("finshSelect", selectedId);
}
})
