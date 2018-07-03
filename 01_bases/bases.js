

//----------------------------
// 1- Commentaires
//----------------------------

//pour écrire un commentaire sur une seule ligne
/*
pour écrire des commentaires sur plusieurs lignes
*/

//----------------------------
// 2- Affichage
//-----------------------------

document.write('mon premier message'); //affichage dans le navigateur

document.write('<h1>Les bases de Javascript</h1>'); // on peut mettre des balises HTML, elles sont interprétées et donc insérées dans le NTML

//Toutes les instructions en JS se finissent par un ";". Elles se suivent et sont effectuées les unes à la suite des autres, du HAUT vers le BAS du script

//------------------------------
//Les boites de dialogue:
// alert('Salut');  // affiche un message
// confirm('Etes-vous sur ?');  // message avec boutons de confirmation "ok" ou annuler
// prompt('Quel est votre code postale ?'); // message avec champ à remplir

//-----------------------
// Afficher dans la concole :
console.log('Attention aux erreurs de syntaxe dans la console'); // message écrit dans la console de debugage (F12+onglet Console)

//----------------------------
//3-Variables - déclaration - affectation
//-------------------------------

document.write('<h2>3--Variables - déclaration - affectation</h2>');
// Définition: une variable est un espace mémoire nommé dans lequel nous allons stocker une donée, une valeur. Cette donnée peut être de n'importe quel type: chiffre, chaine de caractères, une balise HTML, etc...

//Déclaration d'une variable :
var maBoite;      // le mot clé var permet de déclarer (-créer) la variable nommé maBoite

//Règle de nommage des variables : caractères &cceptés: a à z, A à Z , 0 à 9  (jamais au début ni à la fin).Premier mot en minuscules,puis majuscule à la première lettre de chaque mot.

//------------------------------------
//Affectation d'une variable :
maBoite = 10; // on affecte une valeur à une variable avec le signe "=", maBoite contient donc 10

document.write(maBoite); // on affiche le contenu de la variable en ne mettant pas de quote autour de son nom. Affiche 10

var maBoite = 10; // on peut déclarer et affecter une variable en même temps (nous retiendrons cette écriture)

//--------------
monAutreBoite ="bonjour";  //cette écriture est possible (la déclaration sans le mot var), mais ce n'est pas conventionnel. De plus cela n'a pas la même signification (voir chapitre "portée des variables");
document.write('<br>');


//-------------------------
//Déclarer et affecter plusieurs variables en même temps :
var prenom = "Sylvie",
    nom = "Robert",
    genre = "féminin";  // un seul var en séparant chaque déclaration par une virgule, un saut de ligne et une indentation. On termine par un";"

document.write(prenom); // affiche Sylvie
document.write("<br>");

//------------------------
//Changer la valeur d'une variable :
prenom = 'Pierre'; //nous changeons la valeur initiale "Sylvie" pour la remplacer par "Pierre"
document.write(prenom); // affiche Pierre
document.write("<br>");

prenom=nom; //nous affectons la valeur de la variable nom à la variable prenom,autrement on remplace "Pierre" par "Robert"
document.write(prenom); // affiche Robert
document.write("<br>");

//-----------------
//Ajouter une valeur à la valeur déjà existante d'une variable :
var fruit = 'pomme';
fruit += " fraise";//On ajoute la chaine de caractère    "fraise" à "pomme" déjà existante avec l'opérateur += (sans espace)
document.write(fruit); // Affiche les deux valeurs de la variable et ne l'ecrase pas "pomme fraise"
document.write("<br>");

//---------
// Utiliser prompt avec une variable :
var codePostal = prompt('Quel est votre code postale ?');

document.write(codePostal); //afiche le code postale indiqué par l'internaute
document.write("<br>");

//----------------------------
//3-Types de données
//----------------------------
document.write('<h2> Types de données </h2>');

//Nous commençons par les 3 principaux types de données dits primitifs:

//Les types numériques appélés NUMBER :
var chiffre = 20;  // les numbers s'écrivent sans quotes ni guillemets
// Tous les types numériques sont possibles : entiers, décimaux, positifs, négatifs....

// Les types chaines de caractères appelés STRING :
var texte = "phrase entre guillemets";
var apostrophe = 'il faut utiliser le caractère d\'echapement pour les apostrophes dans des quotes'; //AltGr + 8 pour le caractère d'échappement

// Les quotes ou les guillemets indiquent qu'ils s'agit d'un type STRING.

var numero = '10'; // un chiffre dans des quotes ou des guillemets est interprété comme un string

// Le type booléen (ou boolean):
//Le type booléen de prend que deux valeurs : TRUE ou FALSE
var choix = true; // s'écrit sans quote

//---------------
//typeof permet de vérifier le type d'une variable :
document.write(typeof(chiffre)); // number
document.write('<br>');

document.write(typeof(texte)); //string
document.write('<br>');

document.write(typeof(numero)); //string
document.write('<br>');

document.write(typeof(choix)); //boolean
document.write('<br>');

//----------------------------
//5-Constante
//----------------------------
document.write('<h2> Constante </h2>');

//Définition : les constantes sont comme des variables dont la valeur NE PEUT PAS être modifiée. Elles permettent de "protéger" cette valeur nécessaire au bon fonctionnement du script

const CHANGE_PAS = 'ma constante impossible à modifier'; // par convention entre développeurs on écrit les constantes en majuscules et avec un "_" si besoin

document.write(CHANGE_PAS); // affiche le contenu de la constante
document.write('<br>');
// CHANGE_PAS = 'autre valeur'; //erreur bloquante de type invalide assignement to const CHANGE_PAS

//-----------------------------
// 6 - Concaténation 
// -----------------------------
document.write('<h2> Concaténation </h2>');

//En JS, on fait suivre des variables et des strings avec le symbole "+". On parle de concaténation.

var prenom = 'Bruce',
    nom = 'Wayne';

document.write(prenom + ' ' + nom + '<br>'); // concatène la variable prenom avec un espace avec la variable nom avec une balise <br>           

var personnage = prenom + ' ' + nom + ' <br>'; // on peut concaténer des élements au sein d'une variable
document.write(personnage);

//-----------------------------
// 7 - Opérateurs arithmétiques
// -----------------------------
document.write('<h2> Opérateurs arithmétiques </h2>' );

var resultat;
resultat = 10 + 5; //addition
resultat = 10 - 5;  // soustraction
resultat = 10 / 5; // division
resultat = 10 * 5; // multipl
resultat = 3 % 2; // modulo = reste de la division entiere. Si j'ai 3 billes reparti sur 2 personne , il me reste une bille : 3%2 vaut donc 1 (modulo de 2 pour vérifier si un chiffre est pair ou impair, modulo de 10 si c'est une dizaine)


//----------
// On peut appliquer les opérateurs aux variables :
var chiffre1 = 10,
    chiffre2 = 5;

resultat = chiffre1 + chiffre2 // resultat vaut 15

var chiffre3 = 10;
chiffre3 = chiffre3 + 5; // 15
chiffre3 = chiffre3 + 5; // 20 mais cette syntaxe n'est pas conventionnelle. On utilise la syntaxe suivante :
chiffre3 +=5;  // cette syntaxe est la même chose que la precedante , mais celle la qu'on retiendra. chiffre3 vaut ici 25

// Fonctionne avec tous les opérateurs: +=, -=, *=, /= et %=

//-------------
//Incrémenter et décrémenter :
var i = 0;
i += 1;
i++; // incrémenter i + 1. i vaut donc 1
i--; // décrementer i de -1. i vaut donc 0

// i++ et ++i ont le même resultat à la différence près :
// i++ retourne la valeur de i avant d'effectuer l'opération
//++i retourne la valeur de i après d'effectuer l'opération

var x = 5;
var y = x++; // y prend la valeur de 5 PUIS x passe à 6

document.write('y vaut ' + y + ' '); //5
document.write('x vaut ' + x + ' '); //6
document.write('<br>');

x = 5;
var z = ++x; // x passe à 6 PUIS z prend la valeur de 6
document.write('x vaut ' + x + ' '); //6
document.write('z vaut ' + x  + ' '); //6
document.write('<br>');
document.write('<br>');


//----------------
// Exercice :
/*
L'internaute a cheté 0.8kg de pommes et 0.7kg de poires.
Vous declarez 4 variables, une qui contient "pommes", une qui contient "poires", une qui contient le poids de pomme et l'autre de poires.
Puis vous afichez la phrase "Vous avez acheté des poires et des pommes pour un poid total de 1.5kg" ou les fruits et le poids total sont remplacés par les variables.
*/

var fr1 = "pommes";
var fr2 = "poires";
var poid1 = 0.8;
var poid2 = 0.7;
var ab = poid1+poid2;

document.write("Vous avez acheté des" +  fr1  + " et  des " +  fr2 + " pour un poid total de" + (poid1 + poid2) + " kg");
document.write('<br>');

document.write("<p>Vous avez acheté des" + "<br>" + fr1  + " et  des "+  fr2 + " pour un poid total de" + ab + "kg</p>");

//----------------
//8 - Conditions
//---------------

document.write('<h2> Conditions </h2>');
var a = 10,
    b = 5,
    c = 2;

//-------
// La condition if /else:
if (a>b) {
    // si la condition est évaluée à true, on entre dans les accolades qui suivent :
    document.write('a est supérieur à b <br>');

} else {
    document.write('b est supérieur ou égal')
}
//---------
// if avec AND :
if ( a>b && b>c) {
    // Si a est supérieur à b ET que dans le même temps b est supérieur à c, on entre dans les accolades qui suivent :
     document.write('OK pour les 2 conditions <br>');
}
// ------------
//if avec OR :
if (a == 9 || b>c) {
    //si a est égal (==) à neuf OU le b est superieur au c, on entre dans les accolades suivans:
    document.write('OK pour au moins une des deux conditions <br>');
}

//------
//if ....else if...else:
if ( a == 8){
    //si a vaut 8, on exécute ceux qui suit:
    document.write('a est égal à 8 <br>');
    //sinon si a est différent de 10, on execute ce qui suit:
}else if( a !=10){
    document.write('a est différent de 10 <br>');
}else {
    // sinon c'est que je ne suis tombé ni dans le if ni dans le else if, je me trouve alors dans ce else:
     document.write('Les deux conditions sont fausses <br>');
}
//Notes : jamais de () après un else. Le else n'est pas obligatoire si elle est vide. En revanche après une if il y a toujours une condition.

// L'opérateur NOT : 
//L'opérateur NOT qui s'écrit "!" permet d'inverser quelque chose de TRUE en FALSE, ou quelque chose de FALSE en TRUE. Il s'agit d'une négation.

var test = 3 < 1;
console.log('test vaut : ' + test); // pour vérifier que test vaut false
if (!test){
    // le "!" est une négation qui inverse le sens du booléen : test seul valant false, !test vaut donc true. La condition finale étant donc évaluée à true, on entre dans les accolades:
        document.write('On exécute ce code...<br>'); 
}
//Conclusion : les instructions d'une condition seront toujours exécutées que si la condition renvoie TRUE

//-----------
// La comparaison avec le triple "===" :
var varA = 1, //number
    varB = '1'; // string
if (varA == varB) {
    //varA et varB valent tous les deux 1 en valeur: la condition avec "==" est donc vraie. On exécute les accolades qui suivent :
    document.write('Egalité en valeur uniquement <br>');
}else {
    document.write('Différence en valeur uniquement <br>');
}
if (varA === varB) {
    //varA et varB valent tous les deux 1 en valeur, mais pas le même type , string et number, la condition avec "===" est donc fausse. : on va dpnc dans le else
    document.write('Egalité en valeur et en type <br>');
}else {
    document.write('Différence en valeur OU en type <br>');
}

//------------------
// Condition dite ternaire :
//-La condition ternaire est une autre syntaxe de la condition if...else

var voiture = 'bmw';

var origine = (voiture == 'bmw') ? 'origine allemande <br>' : 'autre origine';
//la condition ternaire s'écrit avec un "?" qui remplace le if, et un ":" qui remplace le else

document.write(origine);

//------------------
// isNaN: is Not a Number
// NaN pour Not a Number est une valeur utilisé pour representer une "quantité" qui n'est pas un nombre en Javascript

//Les opérateurs d'égalité (== ou ===) ne peuvent pas être utilisés pour tester si une valeur est NaN. Il faut utiliser isNaN():

var annee = '2018'; // string
if ( isNaN(annee) ) {
    document.write ('Ce n\'est pas un number après conversion <br>');

}else {
    // condition est fausse car 2018 après la conversion est un number donc on rentre dans le else
    document.write('C\'est un number après conversion <br>');
}
var annee = 'juin2018'; // string
if ( isNaN(annee) ) {
    //condition est vrai car juin2018 après la conversion n'est pas un number donc on rentre dans le if
    document.write ('Ce n\'est pas un number après conversion <br>');

}else {
    document.write('C\'est un number après conversion <br>');
}

// Exercice :
/* Demandez l'âge de l'internaute dans un prompt.
Si la reponse est vide (on compare avec des quotes vides SANS espace), on affiche "Vous n'avez pas répondu."
Si la reponse n'est pas un nombre, on affiche "Vous n'avez pas indiqué un nombre".
Si la réponse est correcte, on affiche "Vous avez indiqué avoir x ans" ou x est l'age donné par l'internaute
*/
var age = prompt('Quel est votre âge ?');

if( age == '') {
    document.write('Vous n\'avez pas répondu <br>');
}
else if(isNaN(age)){
    document.write('Nous n\'avez pas indiqué un nombre <br>');
}
else if(age < 18){
    document.write('Vous n\'etes pas adulte!!!');
}
else{
    document.write('Vous avez indiqué avoir ' + age + ' ans <br>');
}

var ville = prompt('Quelle est votre ville préférée ?');

if( ville == '') {
    document.write('Le champs est obligatoire ! !! <br>');
}
else{
    document.write('Votre ville preferé est <br>' + ville + '<br>' );
}
document.write('<br>');

var taille = prompt('Quelle est votre taille ?');

if(taille == ''){
    document.write('Le champs est vide !!!');
}else if(isNaN(taille)){
    document.write('Mettez votre taille en nombre!!!');
}
else if(taille > 1.80){
    document.write('Vous etes trop grand!!!!');
}
else {
    document.write('Vous pouvez passer!')
}



//------------------------
// 9 - Synthèse des opérateurs
// -----------------------------
document.write('<h2> Synthèse des opérateurs</h2>');
// Pour tester des variables entre-elles:
/*
   ==  pour égal en valeur
   != pour différent de valeur
    
   === pour strictement égal en valeur ET en type
   !== pour strictement différent en valeur OU en type

   > pour plus grand que
   < pour plus petit que
   >= pour supérieur ou égal
   <= pour inf"rieur ou égal
   */

//    Les opérateurs logiques :
/*
   && pour AND
   || pour OR
   ! pour NOT (négation)

   Les opérations efféctuées avec les opérateurs logiques ne donnent que 2 résultats possibles :TRUE ou FALSE.

   Exemples :
   true && true  => true
   true && false => false
   false && false => false

   true || true => true
   true || false => true
   false || false => false

   !TRUE => false
   !FALSE => true


   */
  //------------------------
// 10 - Condition switch
// -----------------------------
document.write('<h2> Condition switch</h2>');

// La condition switch est une autre syntaxe pour écrire une condition if...else if...else,lorsque l'on veut 
// comparer une variable à une multitude de valeurs
// 

var couleur = 'jaune';

switch (couleur){
    case 'bleu' : // chaque case represente une valeur que peut prendre la variable. Si couleur contient 'bleu', 
    // on execute le code qui suit ce case:
    document.write('Vous aimez le bleu <br>');
    break; // obligatoire pour quitter la condition une fois le case exécuté
    case 'jaune' :
    document.write('Vous aimez le jaune <br>');
    break;

    case 'rouge' :
    document.write('Vous aimez le rouge <br>');
    break;
    case 'vert' :
    document.write('Vous aimez le vert <br>');
    break;
    default : // on tombe dans default par défaut si on n'entre dans aucun case précédent
    document.write('Vous n\'aimez aucun de ces couleurs <br>');
    break;
}


// ------------
// 11- Les boucles
// --------------------
document.write('<h2>Les boucles </h2>');
// Les boucles sont destinées à répéter des lignes de codes de façon automatique.

// While : 
var i = 0; // on initialise une variable à 0 pour compter le nombre de tours de boucle

while( i<=5 ){ // ici entre parenthèse se situe la condition d'entrée dans la boucle while.
// Elle signifie "tant que i est inférieur ou égal à 5"
    document.write(i + '---');
    // ....
    i++; // on incremente i de+1. On n'oublie pas d'incrémenter pour ne pas créer une boucle infinie

}
document.write('<hr>');
// Exercice :
// Sans modifier la condition de la boucle While précédente, vous la compléter pour ne pas afficher les "---" après le 5

var i = 0;

while( i <=5 ){
    if(i<5){
        document.write(i + '--');
        i++;
    }
    else{
        document.write(i);
        i++;
    }
}
document.write('<hr>');
// ----------
// La boucle for:
// La boucle for est une autre syntaxe de la boucle while:

for (var i = 0; i <= 5; i++) { // on met dans les () du for : initialisation de la variable suivie d'un ";", puis la condition d'entréé dans la boucle suivie d'un ";", puis l'incrémentation (ou décrementation....) NON suivie d'un ";"
    document.write(i + '---');
    //
}
document.write('<hr>');
document.write('<br>');
// ------------
// Exercice: afficher un menu déroulant avec les années de 1900 à 2020.Utilisez une boucle FOR
/* document.write('<select>');
    document.write('<option>1900</option>');
    document.write('<option>...</option>');
    document.write('<option>...</option>');
    document.write('<option>2020</option>');
document.write('</select>');
document.write('<hr>');
document.write('<br>'); */

/* document.write('<select>');
for (var i = 1900; i <=2020; i++) {
    document.write('<option>'+i+'</option>');
    
}
document.write('</select>'); */


// Alternative :
var affichage = ''; // pour contenir toutes les balises HTML à venir

affichage += '<select>';

for (var i = 1900; i <=2020; i++) {
    affichage += '<option>'+i+'</option>';
    
}
affichage +='</select>'; 
console.log(affichage); //

document.write(affichage); // on affiche tout le string qui contient l'ensemble des balises du selecteur

// La boucle do ....while existe aussi. Elle a la particularité de s'exécuter au moins une fois (correspondant au "do"), puis seulement à la fin on regarde la condition du while pour savoir si on retourne dans la boucle ou pas, puis tant qu'il y  n'a pas correctement répondu ("while"), vous lui reposez la question.

// ------------
// 12- Les fonctions utilisateurs (les developpeurs)
// --------------------

document.write('<h2>Les fonctions utilisateurs (les developpeurs) </h2>');

// Des fonctions sont des morceaux de codes encapsulés dans des accolades et portant un nom. Elle sont appelées (par leur nom) quand on a besoin d'exécuter tout le code qui s'y trouve. Il est d'usage de faire des fonctions simples qui réalisent des actions unitaires.

// A chaque fois qu'on répète une action, voir s'il n'est pas possible de la mettre dans une fonction : cela s'appelle factoriser son code.

// Il existe 2 façons de déclarer une fonction en JS :
// 1° avec le mot clé function :

    function maFonction() {
        // ici tout votre code
        document.write('<p>Nous avons une journée ensoleillée </p>')
    }

    // 2° Avec le mot clé var :
    var maFonction2 = function () {
        //ici tout votre code
        document.write('<p>Nous avons une chaude journée</p>');
    }

    //Pour qu'une fonctions'exécute, il faut l'appeler:
    maFonction(); // on apelle une fonction en écrivant son nom suivi d'une paire de parenthèses
    maFonction2(); //en apelant cette fonction, j'exécute le code qui s'y trouve

    // Par convention nous déclarons toujours une fonction avant de l'exécuter.

    // -------------------
    // Fonctions avec paramètres : 
    function direBonjour(prenom, nom) { // prenom et nom sont des paramètres de la fonction, séparés par une "," et qui attendent une valeur
        document.write('<p>Bonjour ' + prenom + ' ' + nom + ' ' + 'comment' + ' ' +   'allez-vous ?</p>');
    }
    direBonjour('Alice','Dupon'); // la valeur 'Alice' qui est en premiere position va etre affecter au parametre prenom, et la valeur 'Dupont' (en seconde position) va etre affecter au nom. Ainsi la fonction direBonjour peut afficher un message personnalisé

    // ------------------
    function d(param) {
        document.write(param +'<hr>');
    }
    d('Test de notre fonction');
    d('marina' + ' ' + 'marina');
    d('<div class="test">Notre test</div>');