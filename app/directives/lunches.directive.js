itemsApp
	.directive('lunches', function lunches($location){
		'use strict';

		return {
			restrict: 'EA',
			replace: true,
			scope: true,
			templateUrl: 'app/directives/lunches.templ.html',
			controllerAs: 'lunches',

			controller: function(LunchesFactory){
				this.items = [];	

				// get/set userid
				if($location.search().id){
					console.log('param id present, ' + $location.search().id);
					this.userid = $location.search().id;					
					localStorage.setItem("lunchesuserid", this.userid);
				} else {
					console.log('checking for local id');
					this.userid = localStorage.getItem("lunchesuserid") == '' ? '' : localStorage.getItem("lunchesuserid");
					console.log('local id result: ' + this.userid);
				}
				
				
				console.log('this.items at beginning ' + this.items);

				this.add = function(newItem){		
					if(newItem.name != '' && newItem.name != null){			
						var item = {
							name: newItem.name, 
							rating: newItem.rating, 
							done:false,
							meals: []
						};
						this.items.unshift(item);	
						newItem.name = '';
						newItem.rating = 1;		
						item.rating = 1;				
						this.save();
					} else {
						toastr.warning('Please enter a Restaurant Name');
					}
				};
				this.delete = function(index){
					this.items.splice(index, 1);
					this.save();
				};

				this.deleteMeal = function(meal, index, itemIndex){
					console.log(meal + 'mealindex ' + index);
					this.items[itemIndex].meals.splice(index, 1);
					this.save();
				};

				this.addMeal = function(meal, index){
					console.log('in addMealDirective, meal:' + meal.name + 'mealindex ' + index);
					if (meal.name != undefined && meal.price != undefined){
						var item = {
							name: meal.name,
							price: meal.price,
							rating: meal.rating, 
							times: meal.times
						};
						this.items[index].meals.unshift(item);					
						this.save();
						meal.rating = 1;
						meal.price = '';
						meal.name = '';
					}else{
						toastr.warning('please enter meal name and price');
					}		
				};

				this.addTimes = function(meal){
					console.log(meal);
					meal.times += 1;
				};

				this.save = function(){
					console.log('in save');
					if (typeof(Storage) !== "undefined"){
						localStorage.setItem("lunches", JSON.stringify(this.items));
						//console.log('stored ' + JSON.stringify(this.items));
						console.log('saved');
					} else {
						//console.log('no storage');
					}
				}
				this.cloneLunches = function(obj){
					console.log('obj ' + obj);
					console.log('objuserid ' + this.userid);

					// check for presence userid property 
					
					LunchesFactory.saveToDB(JSON.stringify(obj))
					//LunchesFactory.saveToDB(obj)
						.then(angular.bind(this, function then(){
							this.userid = LunchesFactory.userid;
							localStorage.setItem("lunchesuserid", parseInt(LunchesFactory.userid));
							toastr.success('succes, items cloned, new id: ' + LunchesFactory.userid);								
					}));
					};
				this.saveLunches = function(obj){
					console.log('obj ' + obj);
					console.log('objuserid ' + this.userid);

					// check for presence userid property 
					if(!this.userid){
						LunchesFactory.saveToDB(JSON.stringify(obj))
						//LunchesFactory.saveToDB(obj)
							.then(angular.bind(this, function then(){
								this.userid = LunchesFactory.userid;
								localStorage.setItem("lunchesuserid", LunchesFactory.userid);
								toastr.success('succes, userid created: ' + LunchesFactory.userid);								
						}));	
					} else {
						LunchesFactory.updateDB(JSON.stringify(obj), parseInt(this.userid))
							.then(angular.bind(this, function then(){
								toastr.success('updated: ');								
							}));
					}					
				};




				LunchesFactory.getLunches()
					.then(angular.bind(this, function then(){
						
						this.items = LunchesFactory.lunches;
						console.log('this.items after init ' + this.items);		
					}));

			}
		}
	})