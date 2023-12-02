const content = document.getElementById('content');
const fixedDiv = document.getElementById('embeded');
const embededthing = document.getElementById('embeded');
const buttontrigger = document.getElementById('caller');

let endColVal1 = "";
let endColVal2 = "";
let endColVal3 = "";
let endColVal4 = "";
let finalChatfield1 = document.getElementById("showchatfield");
let finalChatfield2 = document.getElementById("showchatfield1");
let finalInputfield = document.getElementById("showinputfield");
let screensize = 0;
let maxwidth = 600;

console.log = function() {}

check();

document.addEventListener('DOMContentLoaded', function() {
  // Your code here


document.addEventListener('scroll', function() {

  var h = document.documentElement, 
  b = document.body,
  st = 'scrollTop',
  sh = 'scrollHeight';

var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;


  if(window.innerWidth > 500){
   
    if (percent >= 8 && percent <= 20 || percent > 95) {

      document.getElementById('embeded').classList.add('unvisible');
    } else {
      document.getElementById('embeded').classList.remove('unvisible');
    }
  }
  var target = document.querySelector('.staffcost');
    var targetPosition = target.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (targetPosition < screenPosition) {
        setTimeout(function() {
            target.classList.add('underline-visible');
        }, 500); // Add a delay of 200 milliseconds before adding the class
    }
  
});
});

//GOOGLE CHART API START

//GOOGLE CHART API END
function overlapchatbot(){
  document.getElementById("overlap").classList.remove("novis");
  document.getElementById("embeded").style.display ="block";
}


let customiserel = document.getElementById("customiser");
let stickybutton = document.getElementById("quitbutton");

function updateButtonPosition(){
  /*console.log("Customiser left: " + customiserel.style.left);
  stickybutton.style.left = customiserel.style.left + customiserel.style.width + "vw";
  stickybutton.style.top = customiserel.style.top + "vh";*/
}
function deactivateAll(){
  if(screensize > maxwidth){
    document.getElementById("customiser").classList.add("novis");
    let elements = document.getElementsByClassName("willvanish");
    let elements2 = document.getElementsByClassName("offertext");
    if (elements.length > 0) {
      elements[0].style.display = "block";
    }
    if (elements2.length > 0) {
      elements2[0].style.display = "block";
    }
    let toShow = document.getElementById("willshow");
    toShow.classList.add("novis");
    document.getElementById("splitter").scrollTop = 0;
  }
}
function closeoverlap(){
  
  document.getElementById("overlap").classList.add("novis");
  document.getElementById("embeded").style.display ="none";
} 

function openSecondDiv(){
  //document.getElementById("customiser").classList.add("novis");
  //document.getElementById("customiser2").classList.remove("novis");
  let customiser = document.getElementById("customiser2");
  let splitterright = document.getElementById("splitter");
  splitterright.style.overflowY = "auto";
  setTimeout(function() {
    splitterright.style.transition = "scroll-top 0.5s";
    splitterright.style.scrollBehavior = "smooth";
    splitterright.scrollTop = document.getElementById("module").scrollHeight * 1.2; // Scroll to the bottom
  }, 100);
  //console.log(customiser.style.width);
  //customiser.style.width = "100vw";
  //customiser.style.height = "100vh";
  //customiser.style.left = "0vw";
  //customiser.style.top ="0vh";
  /*setTimeout(function() {
    customiser.style.transition = "";
  }, 500);*/
}
function openCustomiser(){
  updateButtonPosition();
  document.getElementById("customiser").classList.remove("novis");
}


function openBuyMenu(){
  updateButtonPosition();
  calcPrice();
  let elements = document.getElementsByClassName("willvanish");
  let elements2 = document.getElementsByClassName("offertext");
  if (elements.length > 0) {
    elements[0].style.display = "none";
  }
  if (elements2.length > 0) {
    elements2[0].style.display = "none";
  }
  document.getElementById("customiser").style.left = "20vw";
  document.getElementById("customiser").style.top = "12.5vh";
  document.getElementById("customiser").style.width = "60vw";
  document.getElementById("customiser").style.height = "75vh";

  
}
let el =  document.getElementById("picker1");
el.addEventListener("input", function(){
updateColorValues();
});
let el2 = document.getElementById("picker2");
el2.addEventListener('input', function(){
  updateColorValues();
})
let el3 = document.getElementById("picker3");
el3.addEventListener('input', function(){
  updateColorValues();
})
let el4 = document.getElementById("picker4");
el4.addEventListener('input', function(){
  updateColorValues();
})
function updateColorValues(){

  
  //App background
  let elemente = document.getElementsByClassName("app");
  var color = document.getElementById("picker1").value;
 
  if (elemente.length > 0) {
    elemente[0].style.background = color;
    endColVal1 = color;
  }
  //Chat background
  let elemente2 = document.getElementsByClassName("chatfield");
  var color = document.getElementById("picker2").value;
  
  for(let i = 0; i < elemente2.length; i++){
    elemente2[i].style.background = color;
    endColVal2 = color;
  }
  //Chat text color
  var color = document.getElementById("picker4").value;
  for(let i = 0; i < elemente2.length; i++){
    elemente2[i].style.color = color;
    endColVal4 = color;
  }
  //Input field background
  let elemente3 = document.getElementsByClassName("inputfield");
  var color = document.getElementById("picker3").value;
  
  for(let i = 0; i < elemente3.length; i++){
    elemente3[i].style.background = color;
    endColVal3 = color;
  }
}
function setWindow(leftval, topval, widthval, heightval){
  document.getElementById("customiser").style.transition = "width 500ms, height 0.5s, left 0.5s, top 0.5s, opacity 0.5s;"
      document.getElementById("customiser").style.left = leftval.toString() + "vw";
document.getElementById("customiser").style.top = topval.toString() + "vh";
document.getElementById("customiser").style.width = widthval.toString() + "vw";
document.getElementById("customiser").style.height = heightval.toString() + "vh";

document.getElementById("showapp").style.background = endColVal1;
finalChatfield1.style.background = endColVal2;
finalChatfield2.style.background = endColVal2;
finalChatfield1.style.color = endColVal4;
finalChatfield2.style.color = endColVal4;
finalInputfield.style.background = endColVal3;
}
function calcPrice(){




  let toShow = document.getElementById("willshow");
  
  

  let selecter1 = document.getElementById("chatsday");
  let selecter2 = document.getElementById("customerpage");
  let selecter3 = document.getElementById("recommendation");
  let price = 45;
  let chatsVal = 0;
  let custompage = 0;
  let recommendpr = 0;

  if(selecter1.value == "0"){
    price+=0;
    chatsVal = 0;
  }
  else if(selecter1.value == "1"){
    price+= 60;
    chatsVal = 1;
  }
  else if(selecter1.value == "2"){
    price+=210;
    chatsVal = 2;
  }

  if(selecter2.value == "0"){
    price+=0;
    custompage = 0;
  }
  else if(selecter2.value == "1"){
    price+=15;
    custompage = 1;
  }

  if(selecter3.value == "0"){
    price+=0;
    recommendpr = 0;
  }
  else if(selecter3.value == "1"){
    price+=15;
    recommendpr = 1;
  }
  const timer = ms => new Promise(res => setTimeout(res, ms));
  const timer2 = ms => new Promise(res => setTimeout(res, ms));
  //Start an calculation animation
for(let i = 0; i < 7; i++){
  setTimeout(function timer2(){
    if(i == 0){
      setWindow(5, 5, 20, 20);
    }
    if(i == 1){
      setWindow(75, 65, 20, 20);
    }
    if(i == 2){
      setWindow(50, 50, 10, 10);
    }
    if(i == 3){
      setWindow(30, 30, 50, 50);
    }
    if(i == 4){
      setWindow(16, 23, 51, 11);
    }
    if(i == 5){
      setWindow(2, 43, 90, 20);
    }
    if(i == 6){
      //Set to normal width height left top
  toShow.classList.remove("novis");
  toShow.classList.remove("none");
  setWindow(12.5, 5, 75, 90);
  let splitterright = document.getElementById("scrolldiv");
splitterright.style.overflowY = "auto";
setTimeout(function() {
  splitterright.style.transition = "scroll-top 0.5s";
  splitterright.style.scrollBehavior = "smooth";
  splitterright.scrollTop = 0; // Scroll to the bottom
}, 400);

splitterright.style.overflowY = "auto";
setTimeout(function() {
  splitterright.style.transition = "scroll-top 0.5s";
  splitterright.style.scrollBehavior = "smooth";
  splitterright.scrollTop = splitterright.scrollHeight; // Scroll to the bottom
}, 400);
    }
  }, i*700);
}

  

  
let bonustext = document.getElementById("bonustext");
let featuretext = document.getElementById("featuretext");


for(let i = 11; i >= 0; i--){
  setTimeout(function timer(){
  
    if(i == 0){
      setWindow(12.5, 5, 75, 90);
      bonustext.innerHTML+= "✅ You don't need to write one line of code<br>";
    }
    else if (i == 1){
      bonustext.innerHTML+= "✅ Trained on your website data <br>";
    }
    else if (i == 2){
      bonustext.innerHTML+= "✅ Your personal design <br>";
    }
    else if (i == 3){
      bonustext.innerHTML+= "✅ Easily implemented in only 3 clicks <br>";
      

    }
    else if (i == 4){
      bonustext.innerHTML+= "✅ Will convert more customers for you<br>";
      

    }
    else if (i == 5){
      if(chatsVal == 0){
        featuretext.innerHTML+= "✅ 1000 FREE chats/day <br>";
      }
      else if(chatsVal == 1){
       featuretext.innerHTML+= "✅ 3000 FREE chats/day <br>";
      }
      else if(chatsVal == 2){
        featuretext.innerHTML+= "✅ 12.500 FREE chats/day <br>";
      }
      

    }
    else if(i == 6){
   
      if(custompage == 1){
        featuretext.innerHTML+= "✅ External customer support page <br>";
      }
    }
    else if(i == 7){
      if(recommendpr == 1){
        featuretext.innerHTML+= "✅ Recommends products to increase conversion <br>";
      }
    }

    else if(i == 8){
      bonustext.innerHTML+= "✅ 95% cheaper than hiring customer assistants<br>";

    }

    
  }, i*10);
}

/*(function myLoop(i){
  setTimeout(function()  {
    if(--i) myLoop(i);
  }, 30);
})(10);
*/

}
function deactivateCustomiser(){

}
function check(){
screensize = screen.width;
  /*if(window.innerWidth < 600){
    disableChat();
  }*/
}
