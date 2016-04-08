'use strict';
angular.module('starter.services', [])

.factory('Orders', function() {
  var Orders = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return Orders;
    },
    remove: function(order) {
      Orders.splice(Orders.indexOf(order), 1);
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
    star:'img/mystar5.png',
    avatar: 'img/purchase.png'
  },{id: 1,
    name: '下沙菜贩子1',
    address: '下沙农贸市场1',
    distance:'3',
    deal:"101",
    star:'img/mystar3.png',
    avatar: 'img/purchase.png'
  },{id: 2,
    name: '滨江菜贩子',
    address: '滨江农贸市场1',
    distance:'4',
    deal:"121",
    star:'img/mystar4.png',
    avatar: 'img/purchase.png'
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
});
