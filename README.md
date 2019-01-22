**markerlocation.js** is an example about how to include HTML instead of markers in Google Maps extending google.maps.OverlayView.

This example shows a map with nuclear power plants from Spain with pure HTML and CSS animations.

To use your own custom CSS based animations, just create the HTML object and the CSS you want.

## Usage
1) Include this function instead of create the typical markers:

	new MarkerLocation(map, new google.maps.LatLng(42.775243, -3.206925), createDocumentObject());
   
   It creates the HTML code that you prefer, this example uses:
   
	<div class='iconLocation'></div>
   
2) You can control the HTML code creating document objects, like this:
```
	function createDocumentObject(){
		var div = document.createElement('div');
		div.className = 'locationIcon';
		return div;
	}
```
3) Create you CSS.

index.html
```
<head>
	<script type="text/javascript" src="js/markerlocation.js"></script>
	<style>
		.locationIcon {
			position: absolute;
			border-radius: 13px;
			width: 13px;
			height: 13px;
			border: 3px solid white;
			background: #00F;
			z-index: 1000002;
		}
	</style>
  </head>
  <body>
	<script>
	function initMap() {
		var myLatLng = new google.maps.LatLng(40.4168, -3.703);
		var map = new google.maps.Map(document.getElementById('map'), {
		  center: myLatLng
		});
		new MarkerLocation(map, myLatLng, createDocumentObject());
	}
	function createDocumentObject(){
		var div = document.createElement('div');
		div.className = 'locationIcon';
		return div;
	}
    </script>
	<div id="map"></div>
	<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
```



Author:
Sergio P.F. & Zeeker Solutions
