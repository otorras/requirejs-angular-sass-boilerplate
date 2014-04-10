define(function(require) {
  'use strict';
  
//  require('angular-module');
  var angular = require('angular');
  
  return angular.module('module-a', [])
    .value('hello', 'Hello');
});
