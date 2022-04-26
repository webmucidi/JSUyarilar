let sozler=["Mutluluk evine giden yol, ızdırap bahçesinden geçer.","Emek olmadan, yemek olmaz.","El elden üstündür."];

const buton=document.getElementById("btnDegistir");
const sonuc=document.getElementById("soz");
const kapsayici=document.getElementById("kapsayici");
const yazar=document.createElement("h5");

kapsayici.appendChild(yazar);

const resim=document.createElement("img");
document.getElementById("kapsayici").appendChild(resim);
resim.setAttribute("src","images/anonim.jpg");


sonuc.innerHTML=sozler[0];
yazar.innerHTML="Anonim";

buton.addEventListener("click",()=>{
  
  let sayi=Math.floor(Math.random() * 3);
  console.log(sayi);
  sonuc.innerHTML=sozler[sayi];

  let renk1=Math.round(Math.random()*255);
  let renk2=Math.round(Math.random()*255);
  let renk3=Math.round(Math.random()*255);

  document.body.style.background="rgb("+renk1+","+renk2+","+renk3+")";

  if(sayi==0){
    yazar.innerHTML="Anonim";
    resim.setAttribute("src","images/anonim.jpg");
    kapsayici.style.background="white";
   
  }
  else if(sayi==1){
    yazar.innerHTML="Aşık Veysel";
    resim.setAttribute("src","images/veysel.jpg");
    kapsayici.style.background="rgb(252, 249, 251)";
    
  }
  else if(sayi==2){
    yazar.innerHTML="Yunus Emre";
    kapsayici.setAttribute("src","images/yunus.jpg");
    kapsayici.style.background="rgb(196, 174, 189)";
    
  }
})

