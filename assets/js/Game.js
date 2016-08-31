/**
 * 
 */

document.addEventListener('DOMContentLoaded', function (){
	var isStarted = true;
	ctx = document.querySelector('canvas').getContext("2d");
	var userball = new Userball(50,300,20,"blue");
	var smallball = new Smallball(50,300,10,'red');
	var ballmanager = new BallManager(1);
	var results = new Results(0,0);
	userball.draw(ctx);
	ballmanager.createBall(smallball);


	userball.init();
	function loop() {
		if (isStarted) {
			ctx.clearRect(userball.getX() - userball.getRadius(), userball.getY() - userball.getRadius(), 2 * userball.getRadius(), 2 * userball.getRadius());
			userball.move();
			userball.draw(ctx);
			smallball.isHit(userball,results);
			userball.isDieCheck();
			if (userball.isDie) {
				results.looseText();
			}
		}

		requestAnimationFrame(loop);
	}
	requestAnimationFrame(loop);



});