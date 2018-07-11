    'use strict';

        prompt("please answer the questions with either a 'Y' an 'N', thanks.");
        var qA = prompt("are you hungry?");

        if (qA.toUpperCase() === 'Y') {
            alert("go and eat");
        }   
        else if (qA.toUpperCase() === 'N') {
            alert("don't eat");
        }
        else {
            alert("invalid response");
        }

        var qB = prompt("are you tired");

        if (qB.toUpperCase() === 'Y' || (qB.toUpperCase() === 'YES')) {
            alert("go and sleep");
        }   
        else if (qB.toUpperCase() === 'N' || (qB.toUpperCase() === 'NO')) {
            alert("don't sleep");
        }
        else {
            alert("invalid response");
        }

        var qC = prompt("are you angry?");

        if (qC.toUpperCase() === 'Y' || (qC.toUpperCase() === 'Yes')){
            alert("go and rage");
        }   
        else if (qC.toUpperCase() === 'N' || (qC.toUpperCase() === 'NO')) {
            alert("keep calm");
        }
        else {
            alert("invalid response");
        }

        var qD = prompt("are you mad as hell and not going to take it anymore?");

        if (qD.toUpperCase() === 'Y' || (qD.toUpperCase() === 'Yes')){
            alert("Shout out your window");
        }   
        else if (qD.toUpperCase() === 'N' || (qD.toUpperCase() === 'NO')) {
            alert("continue taking it");
        }
        else {
            alert("invalid response");
        }

        var qE = prompt("are you experienced?");

        if (qE.toUpperCase() === 'Y' || (qE.toUpperCase() === 'Yes')){
            alert("Use you experience to gain even more");
        }   
        else if (qE.toUpperCase() === 'N' || (qE.toUpperCase() === 'NO')) {
            alert("Get some experience");
        }
        else {
            alert("invalid response");
        }

        console.log(qA + " = " + 'qA');
        console.log(qB + " = " + 'qB');
        console.log(qC + " = " +'qC');
        console.log(qD + " = " + 'qD');
        console.log(qE + " = " + 'qE');

       


