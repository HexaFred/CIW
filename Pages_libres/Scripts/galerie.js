function changeCouleurDeFond(){
  let a = document.querySelector("body");
  let r =random();
  let g=random();
  let b=random();
  a.style.backgroundColor='rgb('+r+','+g+','+b+')';
}

function random(){

  let r=256;
  do{
  r=Math.random()*1000;
}while (r>255)

return(Math.floor(r));

}


function changeImageM1(url, nom) {
  console.log("DEBUG : changeImageM1 : url = "+url+", nom = "+nom);
  let p = p1Tag.childNodes;
  p[1].innerHTML=nom;
  imgTag.src=url;
}

function changeImageM2(id_url, id_nom, url, nom) {
  console.log("DEBUG : changeImageM2 : id_url = " + id_url + ", id_nom = " + id_nom
              +", url = " + url + ", nom = " + nom);
  imgTag.src=url;
  bTag.innerHTML=nom;
}


function changeImageM3(url, nom) {
  console.log("DEBUG : changeImageM3 : url = "+url+", nom = "+nom);
  let i = document.querySelector("img");
  let b = document.querySelector("b");
  b.innerHTML=nom;
  i.src=url;
}
