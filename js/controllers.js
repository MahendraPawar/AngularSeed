myapp.controller('mainCtrl',['$scope',function($scope){
	$scope.$on('setBreadCrumb',function(event, args){
		$scope.heading=args.heading;
	});
}]);

myapp.controller('homeCtrl',['$scope',function($scope){
	$scope.$emit('setBreadCrumb',{heading:'AngularSeed/Home'});
}]);


myapp.controller('bookmarkCtrl',['$scope',function($scope){
	$scope.$emit('setBreadCrumb',{heading:'AngularSeed/Bookmark'});
}]);


myapp.controller('infoCtrl',['$scope',function($scope){
	$scope.$emit('setBreadCrumb',{heading:'AngularSeed/Info'});
}]);


myapp.controller('mailCtrl',['$scope','mailService',function($scope,mailService){
	$scope.mailData=mailService.getData();
	$scope.$emit('setBreadCrumb',{heading:'AngularSeed/Mail'});
}]);


myapp.controller('likeCtrl',['$scope',function($scope){
	$scope.$emit('setBreadCrumb',{heading:'AngularSeed/Like'});
}]);