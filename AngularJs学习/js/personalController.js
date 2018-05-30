var app=angular.module("myApp",[]);
app.controller("myCtrl",function ($scope) {
	$scope.givenName="久莹";
	$scope.familyName="齐";
});
app.controller("nameCtrl",function ($scope) {
	$scope.names=[{name:'Jani',country:'Norway'},
        {name:'Hege',country:'Sweden'},
        {name:'Kai',country:'Denmark'}];
})