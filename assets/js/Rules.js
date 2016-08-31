/**
 * Created by user on 8/31/16.
 */
document.addEventListener('DOMContentLoaded', function (){
   var rules = document.getElementById('rules') ;
    rules.addEventListener('mouseover', function () {
        rules.innerHTML = 'Red and green balls give you points.When you make 250 points,you will win!</br>' +
            'Yellow ball give you speed!You loose when touch the walls of the' +
            'game area!</br>Control your ball with the arrows!';
    })
    rules.addEventListener('mouseout', function () {
        rules.innerHTML = 'Rules';
    })
});