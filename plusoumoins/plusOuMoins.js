var nbEssais = document.getElementById("nbEssais");
var nbEntrer = document.getElementById("nbEntrer");
var bouton = document.getElementById("bouton");
var reponse = document.getElementById("reponse");

var resulstatIA = Math.ceil(Math.random() * 1000);

var countEssais = 0;

function affichageNbEssais() {

	nbEssais.innerHTML = "Nombre d'essais :" + " " + countEssais;
}


function verifierReponse() {
	if (nbEntrer.value < resulstatIA) {
		reponse.innerHTML = "Votre réponse est trop bas !" ;
		countEssais++;
		affichageNbEssais();
	}
	else if (nbEntrer.value == resulstatIA) {
		reponse.innerHTML = "vous avez trouver le chiffre mystère !";
	}
	else {
		reponse.innerHTML = "Votre réponse est trop haut !"
		countEssais++;
		affichageNbEssais();
		}
	}





affichageNbEssais();
bouton.onclick = verifierReponse;