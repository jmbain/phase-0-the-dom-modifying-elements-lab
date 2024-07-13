// Write your code here!
document.querySelector("main#main").remove(); 
//document.getElementById("main").remove();

const newHeader = document.createElement("H1");
newHeader.setAttribute('id','victory');
newHeader.textContent = "Josh Bain is the champion";