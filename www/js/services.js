'use strict';
angular.module('starter.services', [])
.factory('Orders', function() {
  var Orders = [{
    id: 0,
    name: '订单1',
    amount:110,
    state:"交易成功",
    type:2,
    money:1120,
    time:"2016年4月12日23:42:47",
    location:"物流中心批发市场",
    recipienter:"老王",
    phone:17854584259,
    planName:"模板1",
    goods:[{
      id:0,
      name:"白菜",
      face: 'img/pic.png',
      amount:599,
      remark:"要新鲜",
      price:1.6,
      num:958.4
    },
    {
      id:0,
      name:"土豆",
      face: 'img/pic.png',
      amount:599,
      remark:"要新鲜",
      price:1.6,
      num:958.4
    }]
  }, {
    id: 1,
    name: '订单2',
    amount:120,
    state:"交易成功",
    type:2,
    money:1120,
    time:"2016年4月12日23:42:47",
    location:"物流中心批发市场",
    recipienter:"老王王",
    phone:17854584259,
    planName:"模板2",
    goods:[{
      id:0,
      name:"白菜",
      face: 'img/pic.png',
      amount:599,
      remark:"要新鲜新鲜",
      price:1.6,
      num:958.4
    },
    {
      id:0,
      name:"土豆",
      face: 'img/pic.png',
      amount:599,
      remark:"要新鲜新鲜",
      price:1.6,
      num:958.4
    }]
  }];
  return {
    all: function() {
      return Orders;
    },
    get: function(orderId) {
      for (var i = 0; i < Orders.length; i++) {
        if (Orders[i].id === parseInt(orderId)) {
          return Orders[i];
        }
      }
      return null;
    }
  };
})

.factory('Purchases', function() {
  var Purchases = [{
    id: 0,
    name: '下沙菜贩子',
    address: '下沙农贸市场',
    distance:'1',
    deal:"100",
    star:'img/mystar4.png',
    avatar: 'img/purchase.png',
    authentication:'img/authentication.png',
    monthDeal:"1000",
    goods:[{
      id:0,
      name:"大白菜",
      price:5.60,
      picture:'img/pic.png',
      sales:100
    },{
      id:0,
      name:"高级大白菜",
      price:7.60,
      picture:'img/pic.png',
      sales:110
    }]
  },{
    id: 1,
    name: '下沙菜贩子1',
    address: '下沙农贸市场1',
    distance:'3',
    deal:"101",
    star:'img/mystar3.png',
    avatar: 'img/purchase.png',
    authentication:'img/authentication.png',
    monthDeal:"1200",
    goods:[{
      id:0,
      name:"大白菜",
      price:5.60,
      picture:'img/pic.png',
      sales:100
    },{
      id:0,
      name:"高级大白菜",
      price:7.60,
      picture:'img/pic.png',
      sales:110
    }]
  }];
  return {
    all: function() {
      return Purchases;
    },
    get: function(purchaseId) {
      for (var i = 0; i < Purchases.length; i++) {
        if (Purchases[i].id === parseInt(purchaseId)) {
          return Purchases[i];
        }
      }
      return null;
    }
  };
})

.factory('mainPurchases', function() {
  var mainPurchases = [{
    id: 0,
    todayPrice: '12.22',
    todaySales: '1231',
    referencePrice: '12.11',
    picture:'img/pic.png',
    total:1211
  }, {
    id: 1,
    todayPrice: '17.42',
    todaySales: '2231',
    referencePrice: '13.13',
    picture:'img/pic.png',
    total:1211
  }, {
    id: 2,
    todayPrice: '7.2',
    todaySales: '1888',
    referencePrice: '14.12',
    picture:'img/pic.png',
    total:1211
  }];
  return {
    all: function() {
      return mainPurchases;
    }
  };
})