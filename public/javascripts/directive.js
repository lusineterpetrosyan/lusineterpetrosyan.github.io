
var myDirectives = angular.module('my-directives',[]);
(function(){
	myDirectives.directive('contactPaper', function($timeout){
		return{
			restrict: 'E',
			templateUrl: '/contact',
			controller: function($scope){
				var self = this;

				$scope.enableSkills = false;
				$scope.enableContact = false;

				this.contactPage = function(){ 
			        var menu = document.getElementById('menu'); 
			        	document.getElementById('skillMe').className = 'skills'; 
			        	document.getElementById('skillsPaper').style.marginLeft = '50%'; 
			        	document.getElementById('skillsPaper').style.backgroundSize = '80%'; 
			        	document.getElementById('skillsPaper').style.fontSize = '70%'; 
			        	document.getElementById('skillsPaper').style.lineHeight = '35px'; 
			        	document.getElementById('skillsPaper').style.paddingTop = '30px'; 
			        	
			        	document.getElementById('stamp').style.bottom = '50px'; 
			        	document.getElementById('stamp').style.right = '60px'; 
			
			        	document.getElementById('skillsPaper').className = 'animated hinge'; 
			        	
			        if(!$scope.enableSkills){
						self.rotations();
			        }else{
			          var isloadHideLeft = function() {
			            menu.className = 'lightLeft';
			          }
			          $timeout(isloadHideLeft, 2000); 
			          var isloadHide = function() {
		          		self.rotations();
			           $scope.enableSkills = false;
			          }
			          $timeout(isloadHide, 3000);  
			        }
			      }
				this.rotations = function(){
					menu.className = 'animated slideOutUpM';
					document.getElementById('skillMe').className  = 'skills backRotate';
					$scope.enableContact = true;
					document.getElementById('stamp').className = 'stamp';
				}
			},
			controllerAs: 'contact'
		};
	});
	myDirectives.directive('skillsPaper', function($timeout){
		return{
			restrict: 'E',
			templateUrl: '/about',
			controller: function($scope){
				var self = this;

				$scope.enableSkills = false;
				$scope.enableContact = false;
				this.skillsPage = function(){

		        	document.getElementById('skillsPaper').style.marginLeft = '45%'; 
		        	document.getElementById('skillsPaper').style.backgroundSize = '100%'; 
		        	document.getElementById('skillsPaper').style.fontSize = '100%'; 
		        	document.getElementById('skillsPaper').style.lineHeight = '42px'; 
		        	document.getElementById('skillsPaper').style.paddingTop = '0px'; 
		        	
		        	document.getElementById('stamp').style.bottom = '0px'; 
		        	document.getElementById('stamp').style.right = '20px'; 
		

			        document.getElementById('skillMe').className = 'skills preventEvent';
			        document.getElementById('contactme').className = 'contact preventEvent';
			        var menu = document.getElementById('menu'); 
			        if(!$scope.enableContact){

			            var lightRight = function(){
		                    menu.className = 'lightRight';
			            }
			          $timeout(lightRight, 1000);

			          var olTimeout = function(){
			            var ol = document.getElementById('skillList'); 
			           
			            var children = ol.children;
			            var arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
			            for(var i=0;i<children.length; i++) {
			              children[i].className =  arr[i] +' items';
			            }   
			            var stamp = function(){ 
			              document.getElementById('stamp').className = 'stamp expandOpen'; 
			              // document.getElementById('skillMe').className = 'skills'; 
			               document.getElementById('contactme').className = 'contact';
			            } 
			            $timeout(stamp, 5000);
			          }
			          $timeout(olTimeout, 4000); 

			          var isloadHide = function() { 
			              menu.className = 'floatClass';
			             $scope.enableSkills = true;
			              document.getElementById('skillsPaper').className = 'animated flipInX';
			          }
			          $timeout(isloadHide, 2000);  

			        }else{
			        $scope.enableContact = false;
			          document.getElementById('skillMe').className  = 'skills';
			          menu.className = 'animated slideOutDownM';
			          var stamp = function(){ 
			            document.getElementById('stamp').className = 'stamp expandOpen';  
			          } 
			          $timeout(stamp, 14000);

			          var call = function(){
			            self.skillsPage();
			          }
			          $timeout(call, 500);
			        }
			      }
			},
			controllerAs: 'skills'
		};
	});
	myDirectives.directive('bigMenu', function(){
		return{
			restrict: 'E',
			templateUrl: '/menu'
		};
	});
})();