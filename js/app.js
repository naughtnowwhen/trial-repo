// 'use strict';

// function firstQuestions() {
//     alert("please answer the questions with either a 'Y' an 'N', thanks.");
//     var qA = prompt("Am I tired?");

//     if (qA.toUpperCase() === 'Y') {
//         alert("You guessed it, luckily i've got some coffee");
//     }
//     else if (qA.toUpperCase() === 'N') {
//         alert("No? That was some good coffee!");
//     }
//     else {
//         alert("invalid response");
//     }

//     var qB = prompt("am I ginger?");

//     if (qB.toUpperCase() === 'Y' || (qB.toUpperCase() === 'YES')) {
//         alert("Yes, ginger-ish");
//     }
//     else if (qB.toUpperCase() === 'N' || (qB.toUpperCase() === 'NO')) {
//         alert("No? ok, strawberry blond, whatever... but if i'm not ginger I at least like it with my sushi");
//     }
//     else {
//         alert("invalid response");
//     }

//     var qC = prompt("am I excited?");

//     if (qC.toUpperCase() === 'Y' || (qC.toUpperCase() === 'Yes')){
//         alert("Yes, this stuff is exciting!");
//     }
//     else if (qC.toUpperCase() === 'N' || (qC.toUpperCase() === 'NO')) {
//         alert("No? Hmm, excitement ebbs and flows doesn't it? Maybe time for more coffee?");
//     }
//     else {
//         alert("invalid response");
//     }

//     var qD = prompt("Am I daunted?");

//     if (qD.toUpperCase() === 'Y' || (qD.toUpperCase() === 'Yes')){
//         alert("Well, sure, Brandy wasn't kidding about the whole 'drinking from a firehose' thing was she?");
//     }
//     else if (qD.toUpperCase() === 'N' || (qD.toUpperCase() === 'NO')) {
//         alert("you're too kind, I hope to share your opinion someday");
//     }
//     else {
//         alert("invalid response");
//     }

//     var qE = prompt("am I daydreaming?");

//     if (qE.toUpperCase() === 'Y' || (qE.toUpperCase() === 'Yes')){
//         alert("Yeah, funny how that goes, the mind sure does wander huh?");
//     }
//     else if (qE.toUpperCase() === 'N' || (qE.toUpperCase() === 'NO')) {
//         alert("No? where'd all this great focus come from? More please!");
//     }
//     else {
//         alert("invalid response");
//     }

//     console.log(qA + " = " + 'qA');
//     console.log(qB + " = " + 'qB');
//     console.log(qC + " = " +'qC');
//     console.log(qD + " = " + 'qD');
//     console.log(qE + " = " + 'qE');
// }
// firstQuestions();




/// beginning of Array checker

var GlobalCorrect = [];

function arrayChecker(){
    var myArray = ['a','b','c','d','e','f'];
    var guessesLeft = 6;
    var score = 0;
    var correctArray = [];

while (guessesLeft > 0){
    var userGuess = prompt('take a guess');
    var rightGuess = false;
    // at this point we have a userGuess word
    // now for each word we compare it with whole array
    for (var i = 0; i < myArray.length; i++){
        if (userGuess === myArray[i]) {
            rightGuess = true;
        }
    }
//
        if (rightGuess === false) {
            guessesLeft --;
            alert('sorry wrong '+ guessesLeft + ' left and your score is currently ' + score);
        } else {
            score++;
            guessesLeft --;
            // hmm, i don't know how to implement this quite, but I know that I want something like this to subtract the user guess from the myArray so that they can't keep guessing an already known value and running up their score.
            // myArray.slice(userGuess);
             //creating a staging ground for popping off correct answers
      var HoldsUserGuess = userGuess;
      if (myArray.includes(HoldsUserGuess)){
        correctArray.pop(HoldsUserGuess) && GlobalCorrect.pop(HoldsUserGuess);
      }
            alert('thats right! you have ' + guessesLeft + ' left and your score is currently ' + score);
        }

        if (guessesLeft === 0) {
            alert("you're done! Your final score was" + score);
        }
    }
}
    arrayChecker();



//     var whichOne = [];

//     var randNum = Math.round(Math.random()) 
   
   
//    function getDriver (cats) {
//      whichOne.push(cats)
//      console.log(whichOne);
//      return 1;
//    }
   
//    getDriver(randNum);
//    alert(whichOne);
   