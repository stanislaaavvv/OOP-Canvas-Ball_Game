/**
 * 
 */

function BallManager(numberOfBalls) {
	var _balls = numberOfBalls;
	
	this.getNumberOfBalls = function () {
		return _balls;
	}
}

BallManager.prototype.spawn = function () {
	Position = [];
	Yrandom = Math.floor(Math.random() * 330);
	Xrandom = Math.floor(Math.random() * 480);
	Position.push(Xrandom);
	Position.push(Yrandom);
	return Position;
};

BallManager.prototype.createBall = function (ObjectOfSmallballClass) {
	for (var i = 0; i < this.getNumberOfBalls() ; i++) {
		var randomPos = this.spawn();
		ObjectOfSmallballClass.setX(randomPos[0]);
		ObjectOfSmallballClass.setY(randomPos[1]);
		ObjectOfSmallballClass.draw(ctx,randomPos[0],randomPos[1])
	}
};

