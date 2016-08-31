/**
 * 
 */

function Smallball(x,y,radius,color) {
	Ball.call(this, x, y, radius, color);

	this.getX = function () {
		return x;
	};
	this.getY = function () {
		return y;
	};
	this.setX = function (value) {
		x = value;

	};
	this.setY = function (value) {
		y = value;
	};
}
Smallball.prototype = Object.create(Ball.prototype);
Smallball.prototype.constructor = Smallball;

Smallball.prototype.draw = function (ctx,xcor,ycor) {
	var randomColor = ['yellow','green','red'];
	var randomNumber = Math.floor(Math.random() * randomColor.length);
	var startCircle = 0;
	var endCircle =  2 * Math.PI;
	ctx.fillStyle = randomColor[randomNumber];
	this.setColor(randomColor[randomNumber]);
	ctx.beginPath();
	ctx.arc(xcor,ycor, this.getRadius(), startCircle, endCircle);
	ctx.fill();
};

Smallball.prototype.isHit = function (userBall,results) {
	var ballman = new BallManager(1);
	if ((this.getX() + 25 > userBall.getX() && this.getX() - 30 < userBall.getX()) &&
		(this.getY() + 25 > userBall.getY() && this.getY() - 30 < userBall.getY())) {
		ctx.clearRect(this.getX() - this.getRadius(), this.getY() - this.getRadius(), 2 * this.getRadius(), 2 * this.getRadius());
		results.bonus();
		if(this.getColor() == 'yellow') {
			userBall.speed += 1;
			results.speed(userBall);
		}else {
			results.point();
		}
		if(results.points == 250) {
			results.winText();
		}
		ballman.createBall(this);


	}
};