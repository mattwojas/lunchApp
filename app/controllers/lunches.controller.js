itemsApp
	.controller('LunchesController', function LunchesController($scope){
	$scope.userName = "Lunch app";
	
	$scope.options = [
		{
			name: '1 out of 10',
			value: 1
		},
		{
			name: '2 out of 10',
			value: 2
		},
		{
			name: '3 out of 10',
			value: 3
		},
		{
			name: '4 out of 10',
			value: 4
		},
		{
			name: '5 out of 10',
			value: 5
		},
		{
			name: '6 out of 10',
			value: 6
		},
		{
			name: '7 out of 10',
			value: 7
		},
		{
			name: '8 out of 10',
			value: 8
		},
		{
			name: '9 out of 10',
			value: 9
		},
		{
			name: '10 out of 10',
			value: 10
		}
	];

	$scope.rateOptions = [
		{
			name: '1 stars',
			value: 1
		},
		{
			name: '2 stars',
			value: 2
		},
		{
			name: '3 stars',
			value: 3
		},
		{
			name: '4 stars',
			value: 4
		},
		{
			name: '5 stars',
			value: 5
		}
	];		

	 
});

