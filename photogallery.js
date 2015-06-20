var photo = angular.module('photogallery', ['ngAnimate','ui.bootstrap']);

photo.controller('photoController', function($scope, $http,$filter){
    $scope.loadData = function(){ $http.get('directory.php').success(function(images){
        $scope.images = images;       
        //Reading the database using php
     })};
   
$scope.loadData();

          $scope.chckedIndexs=[]; //used for delete function
           $scope.checkedIndex = function (image) {
           	
         if ($scope.chckedIndexs.indexOf(image) === -1) {
             $scope.chckedIndexs.push(image);

         }
         else {
             $scope.chckedIndexs.splice($scope.chckedIndexs.indexOf(image), 1);
         }
     }
     //watch keeps the data dynamically updated
$scope.$watch('images', function() {
    if(!$scope.images) return;

    $scope.loadData(); // replace with whatever mechanism you use to request data
$scope.totalItems = $scope.images.length;
    var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
        end = begin + $scope.itemsPerPage;

      $scope.filteredImages = $scope.images.slice(begin, end);
});
 

  
    $scope.activate_delete = function () {
    	// alert($scope.images);
    	 for (var i = 0; i < $scope.chckedIndexs.length; i++) {
           // alert($scope.chckedIndexs[i]);

           var request = $http({
    			method: "post",
    			url: "deleter.php",
    		data: {
       		 message: $scope.chckedIndexs[i]
   			 },
   			 headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
				});

			/* Check whether the HTTP Request is successful or not. */
				request.success(function (data) {
					$scope.loadData();
				});


            }
        }

 $scope.itemsPerPage = 10;
  $scope.currentPage = 1;
//used for paginaton
 $scope.pageCount = function () {
    return Math.ceil($scope.images.length / $scope.itemsPerPage);
  };


$scope.changeImage=function(src){
    console.log(src);
    var elem= document.createElement("IMG");
    elem.src = src;
    var div =  document.getElementById("my-container");
    if(div.firstChild)
   div.replaceChild(elem,div.firstChild);
else
	div.appendChild(elem);
div.height = "0px";
div.width = "0px";

   }



    
});