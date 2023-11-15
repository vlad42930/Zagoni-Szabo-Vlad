var button = document.getElementById("button");
var nume = document.getElementById("nume");
var prenume = document.getElementById("prenume");
var img = document.getElementById("imagine");
var body = document.getElementById("body");
var asteptari = document.getElementById("asteptari");
var an = document.getElementById("an");
var isAlternateState = false;

const date = new Date();
var year = date.getFullYear();

button.addEventListener("click", SchimbareLaTot);
an.addEventListener("mouseover", displayAge);

function displayAge()
{
	an.innerHTML = year - an.innerHTML
}

function SchimbareLaTot() {
   if(isAlternateState) {
	nume.innerHTML = "Nume: Zagoni";
        prenume.innerHTML = "Prenume : Vlad";
        asteptari.innerHTML = "Asteptari legate de educatie: Sa termin";
        img.src = "OIP.jpg";
        body.style.backgroundColor = "#FAEBD7";
	isAlternateState = false;
	
   }

   else {	
	nume.innerHTML = "Functie: CEO Google"
	prenume.innerHTML = "Loc de munca: NU"
	asteptari.innerHTML = "Experienta: Multa"
	img.src = "panda-family.jpg"
	body.style.backgroundColor = "#fefe33"
	img.style.border = "11px solid #ff0800"
	img.style.opacity = "0.6"
	img.style.width = "570px"
	button.style.backgroundColor = "#ff0800"

	isAlternateState = true;
   }
}