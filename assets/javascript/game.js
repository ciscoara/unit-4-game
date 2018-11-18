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

// random number limits, drop the max
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
    console.log(diffValue());
    startGame = true;
    diffValue ();
    $('#number').html(target);
    $('#wins').html(wins);
    $('#losses').html(losses);
}
);
function clear() {
    points = 0;
    $("#score").empty();
    $("#number").html(values);
    $('startGame').empty();
    diffValue ();

  };

  // Function for resetting colors and setting new colors.
//   function reset() {
//     clear();
//   };
//I had problems resetting



$("#crystal1").on("click", function () {
        if (startGame === true){
        points += crystalOne.value;
        console.log("1-" + crystalOne.value);
        $('#score').html(points);
        if  (target === points) {
            alert("Nice job! YOU win Mr. Jones");
            wins++;
            $("#wins").html(wins);
            clear ();
        }
        else if (target < points) {
            alert("Awww man! You are NOT a winner");
            losses++;
            $("#losses").html(losses);
            clear ();
    };
}
});

$("#crystal2").on("click", function () {
    if (startGame === true){
    points += crystalTwo.value;
    console.log("2-" + crystalTwo.value);
    $('#score').html(points);
    if  (target === points) {
        alert("Nice job! YOU win Mr. Jones");
        wins++;
        $("#wins").html(wins);
        clear ();
    }
    else if (target < points) {
        alert("Awww man! You are NOT a winner");
        losses++;
        $("#losses").html(losses);
        clear ();

    };
}
});
$("#crystal3").on("click", function () {
    if (startGame === true){
    points += crystalThree.value;
    console.log("3-" + crystalThree.value);
    $('#score').html(points);
    if  (target === points) {
        alert("Nice job! YOU win Mr. Jones");
        wins++;
        $("#wins").html(wins);
        clear ();
    }
    else if (target < points) {
        alert("Awww man! You are NOT a winner");
        losses++;
        $("#losses").html(losses);
        clear ();
    };
}
});
$("#crystal4").on("click", function () {
    if (startGame === true){
    points += crystalFour.value;
    console.log("4-" + crystalFour.value);
    $('#score').html(points);
    if  (target === points) {
        alert("Nice job! YOU win Mr. Jones");
        wins++;
        $("#wins").html(wins);
        clear ();
    }
    else if (target < points) {
        alert("Awww man! You are NOT a winner");
        losses++;
        $("#losses").html(losses);
        clear ();
    };
}
});
