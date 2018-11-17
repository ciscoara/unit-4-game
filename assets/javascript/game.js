//global values
let wins = 0;
let losses = 0;
let points = 0;
let target = 0;
let startGame = false;

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
target = values (19, 120);


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
};


$(document).ready(function() {
    console.log(values());
    startGame = true;
    diffValue ();
    $('#number').html(target);
    $('#wins').html(wins);
    $('#losses').html(losses);
}
);
function clear() {
    $("#score").empty();
    $("#number").empty();
    $('startGame').empty();
  };

  // Function for resetting colors and setting new colors.
  function reset() {
    clear();
  };



$("#crystal1").on("click", function () {
        if (startGame === true){
        points += crystalOne.value;
        console.log("1-" + crystalOne.value);
        $('#score').html(points);
        if  (target === points) {
            alert("Nice job! YOU win");
            wins++;
            $("#wins").html(wins);
            reset ();
        }
        else if (target < points) {
            alert("Awww man! You are NOT a winner");
            losses++;
            $("#losses").html(losses);
            reset ();
    };
}
});

$("#crystal2").on("click", function () {
    if (startGame === true){
    points += crystalTwo.value;
    console.log("2-" + crystalTwo.value);
    $('#score').html(points);
    if  (target === points) {
        alert("Nice job! YOU win");
        wins++;
        $("#wins").html(wins);
        reset ();
    }
    else if (target < points) {
        alert("Awww man! You are NOT a winner");
        losses++;
        $("#losses").html(losses);
        reset ();

    };
}
});
$("#crystal3").on("click", function () {
    if (startGame === true){
    points += crystalThree.value;
    console.log("3-" + crystalThree.value);
    $('#score').html(points);
    if  (target === points) {
        alert("Nice job! YOU win");
        wins++;
        $("#wins").html(wins);
        reset ();
    }
    else if (target < points) {
        alert("Awww man! You are NOT a winner");
        losses++;
        $("#losses").html(losses);
        reset ();
    };
}
});
$("#crystal4").on("click", function () {
    if (startGame === true){
    points += crystalFour.value;
    console.log("4-" + crystalFour.value);
    $('#score').html(points);
    if  (target === points) {
        alert("Nice job! YOU win");
        wins++;
        $("#wins").html(wins);
        reset ();
    }
    else if (target < points) {
        alert("Awww man! You are NOT a winner");
        losses++;
        $("#losses").html(losses);
        reset ();
    };
}
});
