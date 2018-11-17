//global values
let wins;
let loses;
let points = 0;
let gems = 0;
let start = false;

//cristalitos
let crystalOne = {value : 0};
let crystalTwo = {value : 0};
let crystalThree = {value : 0};
let crystalFour = {value : 0};

// random number should be from 19-120
// each crystal should have a random hidden value 1-12
// game restarts at win or lose
//
// function (){

// random number https://gist.github.com/brunomonteiro3/27af6d18c2b0926cdd124220f83c474d.js
function values (min, max) {
    return Math.floor(Math.random()* (max -  min + 1) + min);
};

// random number limits
randomNum = values (19, 120);


//crystal values
crystalOne.value = values(1,12);
crystalTwo.value = values(1,12);
crystalThree.value = values(1,12);
crystalFour.value = values(1,12);
//

//Crystals need to be different
function diffValue () {
    if (crystalOne.value === crystalTwo.value|crystalOne.value === crystalThree.value|crystalOne.value === crystalFour.value | crystalTwo.value === crystalThree.value| crystalTwo.value === crystalFour.value| crystalThree.value === crystalFour.value );
    
 //then reset the values again   
crystalOne.value = values (1, 12);
crystalTwo.value = values (1, 12);
crystalThree.value = values (1, 12);
crystalFour.value = values (1, 12);
} 


$(document).ready(function() {
    values();
    $('#number').html(randomNum);
    diffValue ();

}
);

$("#crystal1").on("click", function () {

        points += crystalOne.value;
        console.log(crystalOne);
        $('#score').html(points);
    }
);
$("#crystal2").on("click", function () {

    points += crystalTwo.value;
    console.log(crystalTwo);
    $('#score').html(points);
}
);
$("#crystal3").on("click", function () {

    points += crystalThree.value;
    console.log(crystalThree);
    $('#score').html(points);
}
);
$("#crystal4").on("click", function () {

    points += crystalFour.value;
    console.log(crystalFour);
    $('#score').html(points);
}
);
function reset () {
    points ();
    randomNum ();
}

function score() {
    if  ( randomNum === points) {
        alert("Nice job! YOU win");
        wins++;
        $("#wins").html(wins);
        reset ();
    }
    else if (randomNum < points) {
        alert("Awww man! You are NOT a winner");
        loses++;
        $("#loses").html(loses);
        reset ();
    }
};
