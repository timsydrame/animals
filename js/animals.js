const imageUrl = "../asset/loup.jpg";
const parentElement = document.getElementById("photoLoup");
const button = document.getElementById("validate");
let taille = 6;

let form = document.getElementById("addAnimals");



form.addEventListener("submit", function(e) {
  e.preventDefault();

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    console.log(this);
  };

  xhr.open("GET", "async/script.php", true);
  xhr.send();

  return false;
});



function loadXMLDoc() {

    var xmlhttp = new XMLHttpRequest();

    // console.log(xmlhttp);

    xmlhttp.onreadystatechange = function() {

        // console.log(this);
        
        if(this.readyState == 4 && this.status == 200) {
            // console.log(this);
            // paraf.innerHTML = this.responseText;

            fn_writeXML(this);

        }
    
    };

    xmlhttp.open("GET", "./animals.xml", true);
    xmlhttp.send();
}


loadXMLDoc();



function fn_writeXML(xml) {

  let xmlDoc = xml.responseXML;
  let x = xmlDoc.getElementsByTagName("animalsInfo");
  let animalsInfoLength = x[0].children.length;

  for (let i = 0; i < taille; i++) {

    const imgElement = document.createElement("img");
    imgElement.classList.add("img-element");
    const titreElement = document.createElement("h5")
    titreElement.classList.add("titre-element");
    const paraElement = document.createElement("p")
    paraElement.classList.add("para-element");
    imgElement.src = x[i].children[animalsInfoLength - 1].innerHTML;
    titreElement.innerText = x[i].children[0].innerHTML;

    for(j = 1; j < animalsInfoLength - 1; j++) {

        paraElement.innerHTML += x[i].children[j].nodeName + " : " + x[i].children[j].innerHTML + "<br>" ;
    }
    parentElement.appendChild(imgElement);
    parentElement.appendChild(titreElement);
    parentElement.appendChild(paraElement);
  }
}