var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  
  $scope.items = [
    {"src":"http://t3.gstatic.com/images?q=tbn:ANd9GcR1Kp2JmcnxhBOf66aN_JqMWl3h_okOQKFX_kEqwr9mRe5iPomy", "alt":"image 001"},
    {"src":"http://t3.gstatic.com/images?q=tbn:ANd9GcQAoT9UmjmunwFTAA19_n1auOFR_JG017_TUru-E91T7nIH8HyU", "alt":"image 002"},
    {"src":"http://t2.gstatic.com/images?q=tbn:ANd9GcTfntbVv3pl5wFCe6IdkaMVrme_Au9TD8Z_xE95Ezv6jz8oK4nT", "alt":"image 003"},
    {"src":"http://t1.gstatic.com/images?q=tbn:ANd9GcSAOralDJGSVtfirbHG5VdFqG8fTqXMh7C4Xd_aHCy176SKNQqK", "alt":"image 004"},
    {"src":"http://fc08.deviantart.net/fs70/f/2012/122/0/c/landscape_wallpaper_by_nickchoubg-d4yaep3.png", "alt":"image 005"},
  ];
  
});

app.directive('thumbnail', [function() {
  return {
    restrict: 'CA',
    replace: false,
    transclude: false,
    scope: {
            
            item: '=itemdata'
    },
    template: '<a href="#"><img src="{{item.src}}"  /></a>',
    link: function(scope, elem, attrs) {

    if (parseInt(scope.index)==0) {
      angular.element(attrs.options).css({'background-image':'url('+ scope.item.src +')'});
    }

      elem.bind('click', function() {

        var src = elem.find('img').attr('src');

        // call your SmoothZoom here
        angular.element(attrs.options).css({'background-image':'url('+ scope.item.src +')'});
      });
    }
  }
}]);