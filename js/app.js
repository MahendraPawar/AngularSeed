var myapp=angular.module('myapp',['ngRoute']);
/***config**/
myapp.config(['$routeProvider',function($route){
	$route.when('/home',{
		templateUrl:'templates/home.html',
		controller:'homeCtrl'
	})
	.when('/bookmark',{
		templateUrl:'templates/bookmark.html',
		controller:'bookmarkCtrl'
	})
	.when('/info',{
		templateUrl:'templates/info.html',
		controller:'infoCtrl'
	})
	.when('/mail',{
		templateUrl:'templates/mail.html',
		controller:'mailCtrl'
	})
	.when('/like',{
		templateUrl:'templates/like.html',
		controller:'likeCtrl'
	})
	.otherwise({
		redirectTo: '/home'
	})
}]);

mayapp.run(function($rootScope){
	$rootScope.on('$stateChangeStart',function(event,attr){
		alert('root change start');
		console.log($rootScope);
	});
});

myapp.value('heading','FirstPage');
myapp.filter('startsWithA', function () {
  return function (items) {
    var filtered = [];
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (/a/i.test(item.name.substring(0, 1))) {
        filtered.push(item);
      }
    }
    return filtered;
  };
});


