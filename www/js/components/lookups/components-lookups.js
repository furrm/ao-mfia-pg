"use strict";

angular.module('components-lookups', [])
    .directive('subscribedMatters', function(){
        return{
            restrict:'AE',
            templateUrl:'templates/components/lookups/subscribed-matters.html',
            controller:function($scope, subscribedMatters){
                $scope.serviceName = 'Test';
                $scope.subscribedMatters = subscribedMatters.data;
            }
        }
    })
;