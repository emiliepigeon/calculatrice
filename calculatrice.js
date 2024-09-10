/* Je doit créer une calculatrice
 Composants de la calculatrice

Le calculateur comprend les composants suivants :

Opérateurs mathématiques: Addition (+), Soustraction (-), Multiplication

et division (/).Chiffres et bouton décimal

: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, . .Écran d’affichage

: Il affiche l’expression mathématique et le résultat.Bouton Effacer l’écran

: Il efface toutes les valeurs mathématiques.Bouton Calculer (=)

: Il évalu l'expression mathématique et renvoie le résultat.

 */
function calculer()
{
    let a = document.getElementById("output").value
    let b = eval(a)
    document.getElementById("output").value = b
}
//affiche la valeur
function afficher(val)
{
    document.getElementById("output").value+=val
}
//efface l'écran
function effacer()
{
    document.getElementById("output").value = ""
}

//racine carré
function sqrt() {
    ecran = document.getElementById("output");
    var resultat = Math.sqrt(ecran.value);
    ecran.value = resultat;
}
//cosinus
function cos() {
    ecran = document.getElementById("output");
    var resultat = Math.cos(ecran.value);
    ecran.value = resultat;
}
//sinus
function sin() {
    ecran = document.getElementById("output");
    var resultat = Math.sin(ecran.value);
    ecran.value = resultat;
}
//tangeante
function tan() {
    ecran = document.getElementById("output");
    var resultat = Math.tan(ecran.value);
    ecran.value = resultat;
}
//logarythme
function log() {
    ecran = document.getElementById("output");
    var resultat = Math.log(ecran.value);
    ecran.value = resultat;
}
//exposant 2 valeurs x et y ne fonctionne pas car je n'ai qu'une entrée de valeur
/*function pow() {
    ecran = document.getElementById("output");
    var resultat = Math.pow(ecran.value);
    ecran.value = resultat;
}*/


function pourcentage(){
   ecran = document.getElementById("output");
    var resultat =(ecran.value)/100;
    ecran.value = resultat;
}
