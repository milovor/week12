let userNumb = document.getElementById("getNumber");
userNum.addEventListener("keydown", function (e) {
   if (e.KeyCode == 13){
      run(e);
   }
 });
   


function run(){
   document.getElementById("paragraph").InnerHTML = "hello";

   document.getElementById("paragraph").style.backgroundColor = "green"

   document.getElementById("paragraph").style.color = "white"

   document.getElementById("paragraph").style.padding = "20px"
   randomNum();
   userNumber();
   compareNumbers();
}

function randomNum(){
   let ran = Math.floor(Math.random() + 10);
   let x = document.getElementById("random")
   x.innerHTML = ran;
   x.style.backgroundColor = "brown"
   x.style.color = "green"
   x.style.textAlign = "center"
   return ran;
}

function userNumber(){
   let user = document.getElementById("GetNumber").value;
   let y = document.getElementById("userNumber");
   y.innerHTML = user;
   y.style.color = "white";
   y.style.backgroundColor = "green"
   y.style.padding = "20px";
   y.style.textAlign = "center"
   return user;
}

function compareNumbers(){
   let a = userNumber();
   let b = randomNum();
   let z =  document.getElementById("compare")();

   if(a!= b){
      z.innerHTML = "numbers are not the same. Computer got" + b + "and user got"
      +a;
      y.style.color = "browm";
      y.style.backgroundColor = "green";
      y.style.padding = "20px";
      y.style.textAlign = "center";
   }

   else if (a == b){
      z.innerHTML = "numbers are the same. Computer got" + b + "and user got"
      +a;
      y.style.color = "blue";
      y.style.backgroundColor = "green";
      y.style.padding = "20px";
      y.style.textAlign = "center";
   }
 
}




