'use strict';

/* Controllers */
(function() {
angularModuls.
  controller('IndexCtrl', function ($scope, $http,$timeout) {
    $scope.isloaded = true;
    if($scope.isloaded){
      var prelaoder = document.getElementById('write-on');
      var prelaoderPArent = document.getElementById('prelaoder');
          prelaoder.className = 'preloader';
      var isload = function() {
        prelaoderPArent.className = 'animated bounceOut';
       
        var isloadHide = function() {
         $scope.isloaded=false;
        }
        $timeout(isloadHide, 1000);  
      }

      $timeout(isload, 3000);  
    }
  });
})()