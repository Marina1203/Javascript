$(function(){

//--------------
//-Naviguer dans le DOM:

//Les méthodes next() et children():
// au clic sur un <h3> "effacer galerie...", la galerie qui suit s'efface:
//

$('#galeries h3').click(function(){
    /* $(this).next().fadeOut(1000); */ //la méthode next() permet de séléctionner la balise
    //directement suivante, ici la <div.galerie> qui suit le <h3> sur lequel on a cliqué.
    //Ainsi quelque soit le <h3> cliqué, seul la balise qui le suit s'efface.
    //next() peur prendre un sélecteur en argument pour ne sélectionner que les balises 
    //suivantes répondant à celui-ci

    //cependant on voudrait effacer les <img> contenues dans les <div.galerie>:

    $(this).next().children('img').fadeOut(1000);// la méthode children()permet de sélectionner TOUS 
    //les élements enfants directs d'une balise,ici toustes les balises <img> qui se trouvent dans <div.galerie>
    //qui suit directement le <h3> que l'on a cliqué.
    //Sans argument, children() sélectionne les enfants directs sans distinction.

});


//--La méthode parent():
//Au clic sur une image, la bordure du parent devient rouge :

$('#galeries img').click(function(){
    $(this).parent('.galerie').css({border: 'solid 2px red'});// la méthode parent()
    //permet de sélectionner l'élement parent direct, ici le <div.galerie> dont on met la bordure en rouge.
    //Sans argument, parent() selectionne le parent direct sans distinction.
});


//La méthode prev() (pour previous = precedent), le contraire du next():

$('#galeries p').click(function(){
    $(this).prev().css({border:''}); //prev permet de sélectionner l'element 
    //directemen,précédent, ici le <div.galerie> précédent dont on réinitialise la bordure.
    //prev() peur prendre un sélecteur en argument pour ne sélectionner que les balises précédentes répondant à celui-ci
});

//----------
//--La méthode find () :
// Au clic sur le bouton "effacer toutes les galeries", les <img> descendantes de #galeries sont effacées :

$('button').eq(0).click(function(){
    $('#galeries').find('img').fadeOut(1000); // find() permet de séléctionner tous les descendants directs ou indirects 
    //correspondants au sélecteur précisé, ici "trouve" toutes les balises <img> qui se situent dans la balise #galeries
});


//Exercice "accordéon" :vous rendez fonctionnel l'accordéon du HTML: au clic sur
//"section 1" ou "section 2" ou "section 3" le <div> qu'on quitte se ferme, alors que le <div>
//de la nouvelle s'ouvre. Utilisez la classe "on" pour ouvrir un élément, et la classe "off"
// pour fermer un élement.

$('#accordion h3').click(function(){
    $('.on').removeClass('on').addClass('off');
    $(this).next().removeClass('off').addClass('on');

});
    

    















}); //fin de document ready