var leftColor = document.getElementById("leftColorId");
var rightColor = document.getElementById("rightColorId");
var bodyBackground = document.getElementById("bodyId");
var currentCss = document.querySelector("h3");

function changeColor(){
    bodyBackground.style.background =
    "linear-gradient(to right," + 
    leftColor.value + "," + rightColor.value + ")";
    currentCss.textContent = bodyBackground.style.background + ";";
}
leftColor.addEventListener("input",changeColor);
rightColor.addEventListener("input",changeColor);
//console.log(leftColor);
//console.log(rightColor);