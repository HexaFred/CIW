// connexion.js
// auteurs : Borri Frédéric, Nobre Anthony

//----------------------------------------------------- Variables globales ---
let codeChiffres = "";
let capchaFormule = "";
let capchaResultat = "";
let a= 0;
let b = document.querySelector("label#code_affiché");
let c = document.querySelector("input#code_saisi");
//--------------------------------------------------------- Initialisation ---

// appelle la fonction d'Initialisation quand la fenêtre est chargée
window.addEventListener("load", init);

function init() {

  // Code d'accès
  melangeChiffres();
  afficheCode();

  // Capcha
  genereCapcha();

}
//----------------------------------------------- Gestion de l'identifiant ---

// revoie vrai si la longueur de l'identifiant saisi est >= 8 caractères
function verifieIdentifiant() {
  let identifiant = document.getElementById("input_identifiant").value;
  return identifiant.length >= 8;
}

// modifie la couleur de l'identifiant en fonction de sa validité
function valideIdentifiant() {
  let identifiantElt = document.getElementById("input_identifiant");
  if (verifieIdentifiant() === true) {
    identifiantElt.style = "color:black;"
  } else {
    identifiantElt.style = "color:red;"
  }
}

//------------------------------------------------ Gestion du code d'accès ---

function melangeChiffres() {
  // récupère un tableau de boutons chiffres
  let divElt = document.getElementById("boutons_chiffres");
  let buttonElts = divElt.getElementsByTagName("button");

  // créer un tableau qui contient autant de chiffres que de boutons
  let tabChiffres = []; // tablean vide;
  for (let i = 0; i < buttonElts.length; i++) {
    tabChiffres[i] = i;
  }

  // mélanger ce tableau de chiffres
  melangeTableau(tabChiffres);

  // affecter ces chiffres mélangés sur les boutons
  for (let i = 0; i < buttonElts.length; i++) {
    buttonElts[i].textContent = tabChiffres[i];
  }
}

function melangeTableau(tab) {
  let i;
  let j;
  let temp;
  for (i = tab.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = tab[i];
    tab[i] = tab[j];
    tab[j] = temp;
  }
}

function saisieChiffre(elt) {
  let chiffre = elt.textContent;

  // TODO: Quoi faire avec le chiffre saisi ?
  console.log("Chiffre saisi : "+ chiffre);
  codeChiffres = codeChiffres+ chiffre;
  c.value= codeChiffres;
  a=a+1;


  afficheCode();
}

// Affiche le code dans le forumulaire
function afficheCode() {
  console.log("Code à afficher : " + codeChiffres);

  // TODO: Complétez la fonction...
	b.innerHTML= +codeChiffres;
}

function supprimeChiffre(){
  a= a-1;
  codeChiffres = codeChiffres.slice (0,a);
  b.innerHTML= +codeChiffres;
  c.value= +codeChiffres
}

function videCode(){
	codeChiffres=""
	b.innerHTML= +codeChiffres
  c.value= +codeChiffres
}

// revoie vrai si la longueur du code est supérieur à 6
function verifieCode() {
  return(b.innerHTML.length >= 6);
}
//------------------------------------------------------ Gestion du Capcha ---

function genereCapcha() {
  var operations = ['+', '-', '*'];
  var o = parseInt(Math.round(Math.random() * 2));
  console.log("Opération choisie pour le capcha : " + operations[o]);

  // TODO: Modifier pour construire une formule aléatoire
  //       et le résultat correspondant

  var a = parseInt(Math.round(Math.random() * 10));
  var b = parseInt(Math.round(Math.random() * 10));
  var formule  = +a+operations[o]+b+"=";
  if (o==0){
    let resultat= a+b;
    console.log(resultat);
    capchaResultat = resultat;
  }
  else{
    if (o==1){
      let resultat= a-b;
      console.log(resultat);
      capchaResultat = resultat;
    }
    else{
      let resultat= a*b;
      console.log(resultat);
      capchaResultat = resultat;
    }
  }

  capchaFormule  = formule;

  afficheCapcha();
}

function afficheCapcha() {
  let labelElt = document.getElementById("capcha_formule");
  labelElt.textContent = capchaFormule;
  let inputElt = document.getElementById("capcha_saisi").value = "";
}

// revoie vrai si la valeur du captcha est correcte
function verifieCaptcha() {
  let inputElt = document.getElementById("capcha_saisi").value;
  return inputElt == capchaResultat;
}

// modifie la couleur du captcha en fonction de sa validité
function valideCaptcha() {
  let inputElt = document.getElementById("capcha_saisi");
  if (verifieCaptcha() === true) {
    inputElt.style = "color:black;"
  } else {
    inputElt.style = "color:red;"
  }
}
//----------------------------------------------- Validation du formulaire ---

function valideFormulaire() {
  let ok = true;
  if (verifieIdentifiant()===false) {
    console.log("L'identifiant doit comporter au moins 8 caractères !");
    window.alert("L'identifiant doit comporter au moins 8 caractères !")
    ok = false;
  }
  if (verifieCaptcha()===false) {
    console.log("Le captcha est faux !");
    window.alert("Le captcha est faux !")
    ok = false;
  }
  if (verifieCode()===false) {
    console.log("Le code doit comporter 6 chiffres !");
    window.alert("Le code doit comporter 6 chiffres !")
    ok = false;
  }
  return ok;
}
