
var nbDeCoups = 0;

function verifier(a, b, c) {
   'use strict';
    return ((document.getElementById(a).src == document.getElementById(b).src) && (document.getElementById(b).src == document.getElementById(c).src)) && (document.getElementById(a).src.indexOf("images/vide.png") == -1);
}
function gagnant() {
    'use strict';
    return verifier("1", "2", "3") ||
        verifier("4", "5", "6") ||
        verifier("7", "8", "9") ||
        verifier("1", "4", "7") ||
        verifier("2", "5", "8") ||
        verifier("3", "6", "9") ||
        verifier("1", "5", "9") ||
        verifier("3", "5", "7");
}

function joue(n) {
    'use strict';
    let myImg = document.getElementById(n);
    if (myImg.src.indexOf("images/vide.png") != -1) {
        nbDeCoups++;
        if (nbDeCoups % 2 == 0) {
            myImg.src = "images/croix.png";
        }
        else {
            myImg.scr = "images/rond.png";
        }
    }
    else {
        alert('case déjà utilisée!');
    }
    if ((nbDeCoups == 9) && !gagnant()) {
        alert('Match nul');
    }
    else if (gagnant()) {
        let timeWait = setTimeout(function () { alert('X') })
        if (nbDeCoups % 2 != 0) {
            alert('joueur X a gagné');
        }
        else {
            alert('joueur O a gagné')
        }
    }
}
