let sozler=["Mutluluk evine giden yol, ızdırap bahçesinden geçer.","Emek olmadan, yemek olmaz.","El elden üstündür."];

const buton=document.getElementById("btnDegistir");
const sonuc=document.getElementById("soz");

let sayi=Math.floor(Math.random() * 3);
sonuc.innerHTML=sozler[sayi];

buton.addEventListener("click",()=>{

  sayi=Math.floor(Math.random() * 3);
  sonuc.innerHTML=sozler[sayi];
  
})