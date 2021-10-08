var nbDeCoups = 0;
var joueurActuel = "img/croix.png";
function clic(id) {
    console.log(id);
}
function verifier(a, b, c) {
    return (((document.getElementById(a).src == document.getElementById(b).src) && (document.getElementById(b).src == document.getElementById(c).src)) && (document.getElementById(a).src.indexOf("img/vide.png")) == -1);
}
function gagnant() {
    return verifier("1", "2", "3") ||
        verifier("4", "5", "6") ||
        verifier("7", "8", "9") ||
        verifier("1", "4", "7") ||
        verifier("2", "5", "8") ||
        verifier("3", "6", "9") ||
        verifier("1", "5", "9") ||
        verifier("3", "5", "7");

}