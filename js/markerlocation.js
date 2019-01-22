/*
 * @extends google.maps.OverlayView
 */
function MarkerLocation(map, geolocation, html){
	this.extend(MarkerLocation, google.maps.OverlayView);
	this.map_ = map;
	this.geolocation_ = geolocation; 
	this.html_ = html;
	this.drawn_ = false;
	this.setMap(map);
}

MarkerLocation.prototype.extend = function(obj1, obj2) {
  return (function(object) {
    for (var property in object.prototype) {
      this.prototype[property] = object.prototype[property];
    }
    return this;
  }).apply(obj1, [obj2]);
};

MarkerLocation.prototype.createDiv = function() {
	this.getPanes().overlayMouseTarget.appendChild(this.html_);
	this.drawn_ = true;
};

MarkerLocation.prototype.positionDiv = function() {
	var point = this.getProjection().fromLatLngToDivPixel(this.geolocation_);
	var left = point.x - this.html_.scrollWidth;
	var top = point.y - this.html_.scrollHeight;
	this.html_.style.left = left + 'px';
	this.html_.style.top = top + 'px';
}

MarkerLocation.prototype.onRemove = function() {
	this.html_.parentNode.removeChild(this.div_);
	this.html_ = null;
};

MarkerLocation.prototype.draw = function() {
	if (!this.drawn_){
	  this.createDiv();
	}
	this.positionDiv();
};