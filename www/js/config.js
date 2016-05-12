"use strict";
 angular.module("starter.config", [])
.constant("$ionicLoadingConfig", {
  "template": "请求中..."
})

.constant("ENV", {
  "version": "2.0.1",
  "name": "gobuy",
  "debug": false,
  "domain": "http://121.43.150.79:9090/",
  "api": "/api/v1"
})
