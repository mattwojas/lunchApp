<?php
define("ROOT_PATH", "http://mattwojas.com/lunch3/");
?>
<!DOCTYPE html>
<html lang="en" ng-app="itemsApp">
<head>
	<meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
	<title>Lunch App</title>
	<link rel="stylesheet" href="styles/styles.css" type="text/css"/>
	<link rel="stylesheet" href="styles/toastr.min.css" type="text/css"/>
    <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css' rel='stylesheet' type='text/css'>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>    
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-animate.js"></script>    
	<script src="lib/toastr.min.js"></script>
	<script src="lib/route.js"></script>
	<script src="app/app.js"></script>
	<script src="app/controllers/lunches.controller.js"></script>
	<script src="app/factories/lunches.factory.js"></script>
	<script src="app/directives/lunches.directive.js"></script>
	
	<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-81488609-1', 'auto');
  ga('send', 'pageview');

	</script>
	
</head>
<body>
	<div class="container">
		<nav ng-controller="HeaderController">
			<ul>
		<li><a ng-class="{ active: isActive('/lunches')}" href="#/lunches">Lunches</a></li>
		<li><a ng-class="{ active: isActive('/about')}" href="#/about">About</a></li>
	</ul>
	</nav>
	<div class="clear"></div>
	</div>
	<div class="container">
		<div ng-view></div>
		<div class="clear"></div>
	</div>
</body>
</html>