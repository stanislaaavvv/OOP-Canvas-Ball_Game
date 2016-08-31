/**
 * 
 */
function Ball(x,y,radius,color) {
	if (this.constructor === Ball) {
	   throw new Error("Abstract class!");
	}
	var _x = x;
	var _y = y;
	var _radius = radius;
	var _color = color;
	
	this.getX = function () {
		return _x;
	};
	this.getY = function () {
		return _y;
	};
	this.setX = function (value,value2) {
		if (value2) {
			_x += value;
		}
		if (!value2) {
			_x -= value;
		}
	};
	this.setY = function (value,value2) {
		if (value2) {
			_y += value;
		}
		if (!value2) {
			_y -= value;
		}
	};
	this.getRadius = function () {
		return _radius;
	};
	this.getColor = function () {
		return _color;
	};
	this.setColor = function (value) {
		_color = value;
	}
	
}

Ball.prototype.draw = function () {
	throw new Error('Abstract method!Override it!');
};