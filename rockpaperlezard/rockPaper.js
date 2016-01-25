
var rpsls = ["", "rock", "paper", "scissors", "lizard", "spock"];
var humain = "";
var ordinateur = "";

var randMoove = 0;

var nbPartie = document.getElementById("nbPartie");
var humanScore = document.getElementById("humanScore");
var winRate = document.getElementById("winRate");
var scoreIA = document.getElementById("scoreIA");
var egalite = document.getElementById("egalite");

var countPartie = 0;
var countHumanScore = 0;
var humanWinRate= 0;
var countIaScore = 0;
var countEgalite = 0;



//fonction lancement du jeux.

function startGame(moove) {
	humain = moove;
	//alert(humain);
	iaBotMoove();
	declarationVainqueur(); 
	affichageScoreGlobal();
	calculTauxVictoire();
}

//fonction IA bot.

	function iaBotMoove() {
	var	temporaire = Math.floor((Math.random() * 5) + 1);
		randMoove = Math.floor((Math.random() * 5) + 1);

		while(temporaire == randMoove) {
			if (temporaire == randMoove)
				randMoove = Math.floor((Math.random() * 5) + 1);

		}
		ordinateur = rpsls[randMoove];
		//alert(ordinateur);
	}

//fonction declaration du perdant/gagnant etc..

	function declarationVainqueur() {
		switch(humain) {
			case "rock" : {
				if (ordinateur == "rock") {
					document.getElementById('rpsls').innerHTML= " <img src='images/rocktie.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'> " ;
					document.getElementById('resultats').innerHTML="Egalité !";

					countPartie++;
					countEgalite++;
				}
				if (ordinateur == "paper") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls1.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="La feuille couvre la pierre, vous perdez";

					countPartie++;
					countIaScore++;
				}
				if (ordinateur == "scissors") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls7.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="La pierre brise les ciseaux, vous gagnez";

					countPartie++;
					countHumanScore++;
				}
				if (ordinateur == "lizard") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls2.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="La pierre écrase le lézard, vous gagnez";

					countPartie++;
					countHumanScore++;
				}
				if (ordinateur == "spock") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls9.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Spock vaporise la pierre, vous perdez";

					countPartie++;
					countIaScore++;
				}
				break;
			}
			case "paper" : {
				if (ordinateur == "rock") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls1.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="La feuille couvre la pierre, vous gagnez";

					countPartie++;
					countHumanScore++;
				}
				if (ordinateur == "paper") {
					document.getElementById('rpsls').innerHTML="<img src='images/papertie.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Egalité !";

					countPartie++;
					countEgalite++;
				}
				if (ordinateur == "scissors") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls5.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Le ciseaux coupe le papier, vous perdez";

					countPartie++;
					countIaScore++;
				}
				if (ordinateur == "lizard") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls8.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Le lézard mange la feuille, vous perdez";

					countPartie++;
					countIaScore++;
				}
				if (ordinateur == "spock") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls6.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="La feuille discrédite spock, vous gagnez";

					countPartie++;
					countHumanScore++;
				}
				break;
			}
			case "scissors" : {
				if (ordinateur == "rock") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls7.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="La pierre brise les ciseaux, vous perdez";

					countPartie++;
					countIaScore++;
				}
				if (ordinateur == "paper") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls5.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Le ciseaux coupe le papier, vous gagner";

					countPartie++;
					countHumanScore++;
				}
				if (ordinateur == "scissors") {
					document.getElementById('rpsls').innerHTML="<img src='images/scissorstie.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Egalité !";

					countPartie++;
					countEgalite++;
				}
				if (ordinateur == "lizard") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls10.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Les ciseaux décapite le lézard, vous gagnez";

					countPartie++;
					countHumanScore++;
				}
				if (ordinateur == "spock") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls4.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Spock casse les ciseaux, vous perdez";

					countPartie++;
					countIaScore++;
				}
				break;
			}
			case "lizard" : {
				if (ordinateur == "rock") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls2.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="La pierre écrase le lézard, vous perdez";

					countPartie++;
					countIaScore++;
				}
				if (ordinateur == "paper") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls8.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Le lézard mange la feuille, vous gagnez";

					countPartie++;
					countHumanScore++;
				}
				if (ordinateur == "scissors") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls10.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Les ciseaux décapite le lézard, vous perdez";

					countPartie++;
					countIaScore++;
				}
				if (ordinateur == "lizard") {
					document.getElementById('rpsls').innerHTML="<img src='images/lizardtie.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Egalité !";

					countPartie++;
					countEgalite++;
				}
				if (ordinateur == "spock") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls3.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Le lézard empoisonne spock, vous gagnez";

					countPartie++;
					countHumanScore++;
				}
				break;
			}
			case "spock" : {
				if (ordinateur == "rock") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls9.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Spock vaporise la pierre, vous gagnez";

					countPartie++;
					countHumanScore++;
				}
				if (ordinateur == "paper") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls6.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="La feuille discrédite spock, vous perdez";

					countPartie++;
					countIaScore++;
				}
				if (ordinateur == "scissors") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls4.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Spock casse les ciseaux, vous gagnez";

					countPartie++;
					countHumanScore++;
				}
				if (ordinateur == "lizard") {
					document.getElementById('rpsls').innerHTML="<img src='images/rpsls3.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Le lézard empoisonne spock, vous perdez";

					countPartie++;
					countIaScore++;
				}
				if (ordinateur == "spock") {
					document.getElementById('rpsls').innerHTML="<img src='images/spocktie.jpg' alt='Pierre, Feuille, ciseaux, Lézard, Spock.'>";
					document.getElementById('resultats').innerHTML="Egalité !";

					countPartie++;
					countEgalite++;
				}
				break;
			}
			default : {
				alert("Quelque chose ne va pas, patron!");
				break;
			}
		}
	}

//fonction calcul taux de victoire.

function calculTauxVictoire() {
		humanWinRate = countPartie / countHumanScore;
}

//fonction affichage des scores.

function affichageScoreGlobal() {
	nbPartie.innerHTML = "Nombre de partie :" + " " + countPartie;
	humanScore.innerHTML = "Votre score :" + " " + countHumanScore;
	winRate.innerHTML = "Votre taux de victoire :" + " "  + humanWinRate + "%"; 
	scoreIA.innerHTML = "Score ordinateur :" + " " + countIaScore;
	egalite.innerHTML = "Egalité :" + " " + countEgalite;
}