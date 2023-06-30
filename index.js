var randNum1=Math.round(Math.random()*5)+1;//number b/w 1-6
var randDiceImg1="dice"+randNum1+".png";
var randImgSrc1="images/"+randDiceImg1;
var img1=document.querySelectorAll("img")[0];//selecting 1st dice img
img1.setAttribute("src", randImgSrc1);//randomizing img

var randNum2=Math.round(Math.random()*5)+1;
var randDiceImg2="dice"+randNum2+".png";
var randImgSrc2="images/"+randDiceImg2;
var img2=document.querySelectorAll("img")[1];//selecting 2nd dice img
img2.setAttribute("src",randImgSrc2);

if(randNum1>randNum2){
  document.querySelector("h1").innerHTML="🤠 Player 1 Wins!!";
}
else if(randNum2>randNum1){
  document.querySelector("h1").innerHTML="Player 2 Wins!! 🤠";
}
else{
  document.querySelector("h1").innerHTML="Draw!!  😫 "
}
function refresh(){
      window.location.reload();//to refresh the page
    }
