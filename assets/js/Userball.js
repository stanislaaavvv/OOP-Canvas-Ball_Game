/**
 * 
 */

function Userball(x,y,radius,color) {
	Ball.call(this,x,y,radius,color);
	
	this.isMoveRight = false;
	this.isMoveLeft = false;
	this.isMoveUp = false;
	this.isMoveDown = false;
	this.speed = 5;
	this.isDie = false;
}

Userball.prototype = Object.create(Ball.prototype);
Userball.prototype.constructor = Userball;

Userball.prototype.draw = function (ctx) {
	var startCircle = 0;
	var endCircle =  2 * Math.PI;
	ctx.fillStyle = this.getColor();
	ctx.beginPath();
	ctx.arc(this.getX(), this.getY(), this.getRadius(), startCircle, endCircle);
	ctx.fill();

};

Userball.prototype.moveKeyCode = function (key,value) {
	if (key == 39) {
		this.isMoveRight = value;
	}
	if (key == 38) {
		this.isMoveUp = value;
	}
	if (key == 40) {
		this.isMoveDown = value;
	}
	if (key == 37) {
		this.isMoveLeft = value;
	}
	
};

Userball.prototype.move = function () {

	if  (this.isMoveUp) {
		this.setY(this.speed,false);
	}

	if  (this.isMoveDown) {
		this.setY(this.speed,true);
	}

	if  (this.isMoveLeft) {
		this.setX(this.speed,false);
	}

	if  (this.isMoveRight) {
		this.setX(this.speed,true);
	}
};

Userball.prototype.init = function () {
	var thisobject = this;
	document.addEventListener('keydown',function (e){
		var key = e.keyCode;
		thisobject.moveKeyCode(key,true);
	},false);
	document.addEventListener('keyup',function (e){
		var key = e.keyCode;
		thisobject.moveKeyCode(key,false);
	},false);
};

Userball.prototype.isDieCheck = function () {
	if(this.getX() > 480 || this.getX() < 20) {
		this.isDie = true;
	}
	if(this.getY() > 330 || this.getY() < 20) {
		this.isDie = true;
	}
};
