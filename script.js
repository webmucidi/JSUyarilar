let sozler=["Mutluluk evine giden yol, ızdırap bahçesinden geçer.","Emek olmadan, yemek olmaz.","El elden üstündür."];
let yazarlar=["Anonim","Aşık Veysel","Yunus Emre"];
let resimler=["images/anonim.jpg","images/veysel.jpg","images/yunus.jpg"];
let renkler=["pink","white","lightblue"];

const buton=document.getElementById("btnDegistir");
const sonuc=document.getElementById("soz");
const kapsayici=document.getElementById("kapsayici");
const yazar=document.createElement("h5");

kapsayici.appendChild(yazar);

const resim=document.createElement("img");
document.getElementById("kapsayici").appendChild(resim);



let oncekiSayi=0;
sonuc.innerHTML=sozler[oncekiSayi];
yazar.innerHTML=yazarlar[oncekiSayi];
resim.setAttribute("src",resimler[oncekiSayi]);
kapsayici.style.background=renkler[oncekiSayi];

buton.addEventListener("click",()=>{
  
  let yeniSayi=Math.floor(Math.random() * 3);

  console.log("Yeni sayı: "+yeniSayi);
  console.log("Önceki sayı: "+oncekiSayi);

  /*Yeni bir rastgele sayı oluşturduktan sonra bir öncekiyle aynı olup olmadığı
  kontrol edildi. Sıradaki sayı önceki sayıya eşitse ve sıfırsa bir arttırma,
  sıfır değilse bir azaltma yapılarak farklı sayı elde edilmiş oldu. */

  if(yeniSayi == oncekiSayi)
  {
    if (yeniSayi == 0)
    {yeniSayi++;} 
    else 
    {yeniSayi--;}
    console.log("Aynı sayı denk geldiği için yeni sayı "+" "+yeniSayi+" olarak güncellendi!");
  }

  sonuc.innerHTML=sozler[yeniSayi];
  yazar.innerHTML=yazarlar[yeniSayi];
  resim.setAttribute("src",resimler[yeniSayi]);
  kapsayici.style.background=renkler[yeniSayi];

  oncekiSayi=yeniSayi;

/*
  if(yeniSayi==0){
    yazar.innerHTML="Anonim";
    resim.setAttribute("src","images/anonim.jpg");
    kapsayici.style.background="white";
    oncekiSayi=yeniSayi;
  }
  else if(yeniSayi==1){
    yazar.innerHTML="Aşık Veysel";
    resim.setAttribute("src","images/veysel.jpg");
    kapsayici.style.background="rgb(252, 249, 251)";
    oncekiSayi=yeniSayi;
  }
  else if(yeniSayi==2){
    yazar.innerHTML="Yunus Emre";
    resim.setAttribute("src","images/yunus.jpg");
    kapsayici.style.background="rgb(196, 174, 189)";
    oncekiSayi=yeniSayi;
  }
*/

  let renk1=Math.round(Math.random()*255);
  let renk2=Math.round(Math.random()*255);
  let renk3=Math.round(Math.random()*255);

  document.body.style.background="rgb("+renk1+","+renk2+","+renk3+")";


})

