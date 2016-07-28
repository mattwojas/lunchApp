var itemsApp = angular.module('itemsApp', ['ngRoute', 'ngAnimate'])
	.config(function($routeProvider){
		'use strict';

		$routeProvider
			.when('/lunches', {
				templateUrl: 'views/lunches.view.html',
				controller: 'LunchesController',
				controllerAs: 'lunches'
			})
			.when('/about', {
				templateUrl: 'views/about.view.html'
			})
			.otherwise({
				redirectTo: '/lunches'
			});
		
});

itemsApp
	.controller("HeaderController", function HeaderController($scope, $location){
	 $scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
	});

itemsApp.controller("mealController", function(){
	this.meals = {};	

	this.addMeal = function(item){
		
		console.log(this.meals.name);
		console.log(JSON.stringify(item.meals.name) + '$$$$$$$this.meals' + JSON.stringify(this.meals));

		if (this.meals.name != undefined && this.meals.price != undefined){
			console.log(typeof(this.meals.price));
			if(angular.isNumber(this.meals.price)){
				this.meals.times = 0;
				item.meals.unshift(this.meals);		
				this.meals = {};	
				this.meals.rating = 1;			

				//this.save();

			} else {
				toastr.warning('please enter price as integer');
			}			
		} else{
			toastr.warning('please enter meal name and price');
		}		
	}
});

