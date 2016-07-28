itemsApp.factory('LunchesFactory', function LunchesFactory($q, $http, $location){
	'use strict';

	var exports = {};

	exports.lunches = [];
	exports.userid = '';

	exports.deleteLunch = function (id, index){
		this.lunches.splice(index, 1);
	}

	exports.getLunches = function(){
		var deferred = $q.defer();

		
		//get items from db
		if($location.search().id){
			console.log('getting from query');
			var userid = $location.search().id;
			return $http.get('http://mattwojas.com/lunchappserver/get/index.php?id=' + userid)
			.success(function(data){
				//console.log('data in fact:: ' + JSON.stringify(data) + ' raw ' +  data);
				
				exports.lunches = data;
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});	
			return deferred.promise;
		}	else if(localStorage.getItem("lunches")){

			var data = localStorage.getItem("lunches");
			console.log('gotten storages data  ' + data  + 'stringified ' + JSON.stringify(data));
			exports.lunches = JSON.parse(data);
			deferred.resolve(data);
			return deferred.promise;
			//console.log('this.items ' +JSON.parse(items.data));
		} else {
			// getting sample data
			//return $http.get('app/lunches.json')
			console.log('in empty get');
			return $http.get('http://mattwojas.com/lunchappserver/get/index.php')
			.success(function(data){
				console.log('data in fact:: ' + JSON.stringify(data) + ' raw ' +  data);
				
				exports.lunches = data;
				deferred.resolve(data);
			})
			.error(function(data){
				deferred.reject(data);
			});	
			return deferred.promise;
		}	
	};

	exports.saveToDB = function(obj){
		var deferred = $q.defer();
			console.log('saveToDB obj param::: ' +obj);
		$http.post("http://mattwojas.com/lunchappserver/put/index.php", {'lunchObj': obj})
		.success(function(data, status, headers, config){
            //console.log("inserted Successfully" + data + status + headers + config);
            console.log('this.user = ' + data);
            exports.userid = data;
            deferred.resolve(data);
        });
			return deferred.promise;

	};

	exports.updateDB = function(obj, userid){
		var deferred = $q.defer();
		console.log('in factory update, with userid: ' + userid);
		$http.post("http://mattwojas.com/lunchappserver/update/index.php", 
			{'lunchObj': obj, 'userid': userid })
			.success(function(data, status, headers, config){
            //console.log("inserted Successfully" + data + status + headers + config);
            
            //exports.lunches = data;
            //deferred.resolve(data);
        })
				.error(function(data){
					deferred.reject(data);
				});
			return deferred.promise;

	};
	return exports;
	
});