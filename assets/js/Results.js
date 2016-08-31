/**
 * Created by user on 8/31/16.
 */
function Results(points,bonuses) {
    this.points = points;
    this.bonuses = bonuses;

}

Results.prototype.looseText = function () {
    document.querySelector('canvas').style.display = 'none';
    var p = document.createElement('P');
    document.querySelector('body').appendChild(p);
    document.querySelector('p').innerHTML = 'You loose!';
};
Results.prototype.winText = function () {
    document.querySelector('canvas').style.display = 'none';
    var p = document.createElement('P');
    document.querySelector('body').appendChild(p);
    document.querySelector('p').innerHTML = 'You win!';
};

Results.prototype.point = function () {
    this.points += 10;
    document.getElementById('points').innerHTML = 'Points:'+this.points;
};
Results.prototype.bonus = function () {
    this.bonuses += 1;
    document.getElementById('bonuses').innerHTML = 'Bonuses:'+this.bonuses;
};

Results.prototype.speed = function (value) {
    document.getElementById('speed').innerHTML = 'Speed:'+value.speed;
};