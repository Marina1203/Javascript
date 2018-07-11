// Ce fichier est en jQuery

/*
Document ready :
Les deux lignes suivantes ont la même signification : 
executer le code JS après avoir chargé le code HTML.
 Par conséquant, le lien vers la page JS peut se faire n'importe 
 ou dans la page HTML( dans le <head> ou avant la fermeture de <body>)


$(function(){
    //ici vous mettez tout votre code jQuery
});

Ou encore autre syntaxe :

$(document).ready(function(){
    //ici vous mettez tout votre code jQuery
    
});
*/


$(function(){ // ce code s'executera une fois le document HTML totalement chargé


//-------------------
// Fonction principale de jQuery, alias $, sélécteur et évenement:
$('#monBouton').click(function(){ //sélectionne la balise #monBouton et au clic
    //appelle la fonction anonyme qui suit:
    $('#carre').hide(); //sélectionne la balise #carre et l'efface
});
jQuery('#monBouton').click(function(){ //
    jQuery('#carre').hide(); //
}); // en réalité le $ remplace le "jQuery", les deux font la même chose : ils créent un OBJET jQuery

$('#carre').click(function(){ // sélectionne la balise #carre et au clic =>
    //selectionne toutes les balises h3 et les efface(sans écrire une boucle)
    $('h3').hide();
});

//Le contraire de hide() c'est show():
$('.photo').dblclick(function(){ // selectionne la balise .photo et au double-click =>
    //selectionne la balise #carre et l'affiche en 1000ms (=1s)
    $('#carre').show(1000);// hide et show peuvent prendre un argument: une duréee en ms,ou encore slow ou fast
});

//Pour alterner hide() et show() automatiquement : toogle()
$('#interrupteur').click(function(){
    $("#on-off").toggle();
});

//----------------------
//on() équivalent de addEventListener, et son contraire off():

$('#monBouton').on('click', function(){
    alert('Declenchement de la méthode on()');

}); // --on --- permet d'associer un evenement à un élément comme le ferait
//  addEventListener() en JS 'original'. La seul difference entre la syntaxe ligne 22 et celle-ci réside dans le fait que cette 
//dernière marche aussi avec les élements créés dynamiquement (=ajoutés par le jQuery).

$('#monBouton').off('click'); //en ajoutant cette ligne, on dissocie les click de l'élement #monBouton
// et les clicks precedemment liés au bouton ne fonctionnent plus! C'est un moyen simple de
//supprimer un évenement.

//------------------------
//Evénement hover, modifier du CSS depuis jQuery :
$('#vert').hover(
    function(){
        $('#rouge').css({
            width :'300px',
            'background-color': 'yellow'
        });
}, 
    function(){
        $('#bleu').css({
            width :'300px',
            'background-color': 'yellow' 
        });
});

// L'evenement hover est une combinaison de mouseover et mouseout en JS : il possède 2 fonctions anonymes qui s'exécutent l'une quand 
// entre l'autre quand on sort de l'element.

//La méthode css() permet de modifier des propriétés CSS écrites dans un objet : on les met entre des {} et sont séparées par une ",".
// Notez que les propriétés CSS qui contiennent un tiret s'écrivent dans des quotes.

//----------------
// Récuperer ou modifier la valeur d'un input avec val() :

$('#mdp1').change(function(){
    var texte = $('#mdp1').val(); //val() sans argument retourne la valeur saisie dans le champ #mdp1 (getter)

    $('#mdp2').val(texte); //val (argument) permet de changer la valeur du champ #mdp2 (setter)
});

//-------------------
// Le mot clé this :
//this est necessaire lors qu'on selectionne plusieurs elements simultanément et qu'on a besoin d'en cibler un en particulier
$('input').focus(function(){
    $(this).css({ border : '2px solid green'}) //this se refere à l'input sur lequel je suis en focus précisement, sans sélectionner l'autre
}) ;
$('input').blur(function(){
    $(this).css({ border : ''});//avec la méthode css() je remets la bordure à son état initial(correspondant au string vide'') de l'input duquel je viens de sortir (=this)
});

//-------
//Accéder aux propriétés CSS avec css () (complément):

var position = $('#violet').css('position');

console.log('La propriété position du div est : '+ position); //la méthode css() avec seulement
//une propriété sous forme de string en argument est un getter : elle fournit la valeur de la propriété spécifiée,
//même si celle-ci n'est pas dans un attribut style (va chercher y compris dans les feuilles de styles)

//---------------------
//Accéder aux attributs des balises avec attr():
if($('.modifAlt').attr('alt') == ""){// attr() avec un seul argument est un getteur, ilpermet de recupérer 
    //la valeur de l'attribut précisé (ici de alt)
    $('.modifAlt').attr('alt', 'paysage');// attr avec deux valeurs est un setteur, il permet 
    //d'attribuer une valeur à un attribut: attr('attribut', 'valeur').
}


//-------------------
//Modifier le contenu d'une balise avec text() ou html():
// html() équivalent à innerHTML :

$('.texte').eq(0).html('<span>Ceci est un texte ajouté avec la méthode html()</span>');
// les balises HTML sont interpretés et donc insérés dans le code HTML.
//La méthode eq()permet de cibler l'element dont l'indice est spécifié dans les () ici la première .texte

//text()equivaut à textContent :
$('.texte').eq(1).text('<span>Ceci est un texte ajouté avec la méthode text()</span>');//Dans la méthode text tout est considéré comme du texte brut, //y compris les eventuelles balises

//Note : text() et html() sans argument sont des getteurs: ils recupèrent le contenu de la balise séléctionnée

//----------------------
//Ajouter ou retirer une classe (défini dans le CSS) à un élément:

$('#survol').mouseenter(function(){
    $(this).addClass('rouge'); //ajoute la classe "rouge" (prévue dans le CSS)à l'élement
});
$('#survol').mouseleave(function(){
    $(this).removeClass('rouge'); //enlève la classe "rouge" (prévue dans le CSS)de l'élement
});

$('#classBleu').click(function(){
    $('#survol').toggleClass('bleu'); //alterne addClass() et removeClass() sur l'élément #survol (différent du bouton #classBleu :on n'utilise donc pas $(this))
});

//------------
//Parcourir les élements séléctionnés  avec une bouccle each():

$('h4').each(function(indice){ //each() parcours tout les h4 et execute la fonction
    //pour chacun (= each) d'entre-eux. Cette fonction possède un paramètre (=indice) qui correspond à l'indice de l'element 
    //sur lequel la boucle se trouve
    $(this).text('Ce <h4> a pour indice le numéro' + indice); // ajoute le texte au <h4> sur lequel on se trouve précisement à chaque tour de la boucle (=$)

    //on ajoute la class "rouge" aux h4 d'indice pair:
    if( indice % 2 == 0) { //signifie que indice est pair : on ajoute donc la classe 
        $(this).addClass('rouge'); 
    }
});

//------------------
//Les pseudo-sélecteurs spécifiques à jQuery : first, :last, :visible, :hidden :

// : visible et :hidden :
$('#afficher').click(function(){
    $('#galerie img:hidden').css({opacity : 0.5}); //séléctionne les images cachées
    // et leur met une opacité de 0.5.
    $('#galerie img').show(); //puis on affiche toutes les images pour vour le résultat
});

$('#effacer').click(function(){
    $('#galerie img').hide();
});

// :first et :last :

    $('#afficher-premier').click(function(){
        /* $('#galerie img:first').show(); */ //séléctionne la première image et l'affiche.Marche
        //aussi avec :last pour la dernière. Si vous vous voulez cibler image du milieu utiliserz la méthode eq(1):
        $('#galerie img').eq(1).show();

        // On peut combiner les pseudos-sélecteurs :
        console.log($('#galerie img:hidden:first').attr('src')); //on combine :hidden :first
        //pour afficher la source de la première image cachée. Attention à l'ordre, :hidden d'abord puis : first
    })





}); // fin du document ready (à ne pas supprimer)