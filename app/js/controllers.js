'use strict';

/* Controllers */

angular.module('myApp.controllers', ['ngResource'])
  .controller('MyCtrl1', ['$scope','User', function($scope, User) {

    $scope.users = User.query();
  	$scope.get_user = function( user_id ) {
      $scope.the_user = User.show({user_id: user_id});
  	};

  }])

  .controller('MyCtrl2', ['$scope', function($scope) {

  }]);
