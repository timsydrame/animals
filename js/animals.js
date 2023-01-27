const parentElement = document.getElementById("cardSection");

function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();

  // console.log(xmlhttp);

  xmlhttp.onreadystatechange = function () {
    // console.log(this);

    if (this.readyState == 4 && this.status == 200) {
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
  console.log(animalsInfoLength);

  for (let i = 0; i < animalsInfoLength; i++) {
    // const divCard = document.createElement("div");
    // divCard.classList.add("card text-bg-dark");
    // const imgElement = document.createElement("img");
    // imgElement.classList.add("card-img");
    // const cardBody = document.createElement("div");
    // cardBody.classList.add("card-img-overlay");
    // const titreElement = document.createElement("h5");
    // titreElement.classList.add("card-title");

    var imgElement = x[i].children[animalsInfoLength - 1].innerHTML;

    var titreElement = x[i].children[0].innerHTML;
    var pWeight = x[i].children[1].innerHTML;
    var pSize = x[i].children[2].innerHTML;
    var pSpeed = x[i].children[3].innerHTML;
    var pDiet = x[i].children[4].innerHTML;
    var pLocation = x[i].children[5].innerHTML;

    // const parentElement = document.createElement("div")
    // parentElement.classList.add("animalCards");

    parentElement.innerHTML += `<div class="border border-light col-sm-12 col-md-5  d-flex flex-column justify-content-center align-items-center m-1 text-light" id="cardSectionElements">
                                    <div class="card text-bg-dark">
                                    <img src="${imgElement}" class="card-img" alt="...">
                                      <div class="card-img-overlay">
                                        <h5 class="card-title">${titreElement}</h5>
                                        <p class="card-text">${pWeight}</p>
                                        <p class="card-text">${pSize}</p>
                                        <p class="card-text">${pSpeed}</p>
                                        <p class="card-text">${pDiet}</p>
                                        <p class="card-text">${pLocation}</p>
                                      </div>
                                    </div>
                                  </div>`;

    // const pWeight = document.createElement("p");
    // pWeight.classList.add("card-text");
    // const pSize = document.createElement("p");
    // pSize.classList.add("card-text");
    // const pSpeed = document.createElement("p");
    // pSpeed.classList.add("card-text");
    // const pDiet = document.createElement("p");
    // pDiet.classList.add("card-text");
    // const pLocation = document.createElement("p");
    // pLocation.classList.add("card-text");

    // imgElement.src = x[i].children[animalsInfoLength - 1].innerHTML;

    // titreElement.innerHTML = x[i].children[0].innerHTML;
    // pWeight.innerHTML = x[i].children[1].innerHTML;
    // pSize.innerHTML = x[i].children[2].innerHTML;
    // pSpeed.innerHTML = x[i].children[3].innerHTML;
    // pDiet.innerHTML = x[i].children[4].innerHTML;
    // pLocation.innerHTML = x[i].children[5].innerHTML;

    // for(j = 1; j < animalsInfoLength - 1; j++) {

    //     paraElement.innerHTML += x[i].children[j].nodeName + " : " + x[i].children[j].innerHTML + "<br>" ;
    // }
    // parentElement.appendChild(divCard);
    // divCard.appendChild(imgElement);
    // divCard.appendChild(cardBody);
    // cardBody.appendChild(titreElement);
    // cardBody.appendChild(pWeight);
    // cardBody.appendChild(pSize);
    // cardBody.appendChild(pSpeed);
    // cardBody.appendChild(pDiet);
    // cardBody.appendChild(pLocation);
  }
}

/*var tmpHtml = '<div class="test">' + nom_truc + '</div>';*/

// <div class="card text-bg-dark">
//   <img src="..." class="card-img" alt="...">
//   <div class="card-img-overlay">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     <p class="card-text"><small>Last updated 3 mins ago</small></p>
//   </div>
// </div>

// button.addEventListener("click", function() {
//   for (let i = 0; i < taille; i++) {
//     const imgElement = document.createElement("img");
//     const titreElement = document.createElement("h5")
//     const paraElement = document.createElement("p")
//     imgElement.src = imageUrl;
//     titreElement.innerText = "The gray wolf"
//     paraElement.innerText = Weight: between 20 and 80 kg
//     Size: between 1.5 and 1.8 meters in length
//     Speed: 60 km/h
//     Food: sheep, foxes and other wild animals, fruits and vegetables.
//     Location: North America, Europe, Asia, and Africa.
//     imgElement.style.width = "300px";
//     imgElement.style.height = "200px";
//     imgElement.style.text = "center";
//     imgElement.style.padding = "30px";
//     titreElement.style.color="red";
//     titreElement.style.top="10%";
//     paraElement.style.top="15%";
//     paraElement.style.color="green";
//     parentElement.appendChild(imgElement);
//     parentElement.appendChild(titreElement);
//     parentElement.appendChild(paraElement);
//   }
// });

/*<div class="border border-light col-sm-12 col-md-5  d-flex flex-column justify-content-center align-items-center m-1 text-light" id="cardSectionElements">
<div class="card text-bg-dark">
  <img src="./asset/loup.jpg" class="card-img" alt="gray wolf">
  <div class="card-img-overlay"> 
    <h5 class="card-title">Wolf</h5>
    <p class="card-text">
      <h4>Speed</h4>              
      <div class="speed">50</div><br>
      <h4>Weight</h4>
      <div class="weight">20</div>
      <h4>Diet</h4>
      <div class="diet">carnivorous</div>
      <h4>Fur softness</h4>
      <div class="fur">6</div></p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
</div>
<div class="border border-light col-sm-12 col-md-5  d-flex flex-column justify-content-center align-items-center m-1 text-light" id="cardSectionElements">
<div class="card text-bg-dark">
  <img src="./asset/panthere.jpg" class="card-img" alt="gray wolf">
  <div class="card-img-overlay"> 
    <h5 class="card-title">Panther</h5>
    <p class="card-text">
      <h4>Speed</h4>              
      <div class="speed">50</div><br>
      <h4>Weight</h4>
      <div class="weight">20</div>
      <h4>Diet</h4>
      <div class="diet">carnivorous</div>
      <h4>Fur softness</h4>
      <div class="fur">6</div></p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
</div>

<div class="border border-light col-sm-12 col-md-5  d-flex flex-column justify-content-center align-items-center m-1 text-light" id="cardSectionElements">
<div class="card text-bg-dark">
  <img src="./asset/chat.jpg" class="card-img" alt="gray wolf">
  <div class="card-img-overlay"> 
    <h5 class="card-title">Cat</h5>
    <p class="card-text">
      <h4>Speed</h4>              
      <div class="speed">50</div><br>
      <h4>Weight</h4>
      <div class="weight">20</div>
      <h4>Diet</h4>
      <div class="diet">carnivorous</div>
      <h4>Fur softness</h4>
      <div class="fur">6</div></p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
</div>





<div class="border border-light col-sm-12 col-md-5  d-flex flex-column justify-content-center align-items-center m-1 text-light" id="cardSectionElements">
<div class="card text-bg-dark">
  <img src="./asset/tortue.jpg" class="card-img" alt="gray wolf">
  <div class="card-img-overlay"> 
    <h5 class="card-title">tortoise</h5>
    <p class="card-text">
      <h4>Speed</h4>              
      <div class="speed">50</div><br>
      <h4>Weight</h4>
      <div class="weight">20</div>
      <h4>Diet</h4>
      <div class="diet">carnivorous</div>
      <h4>Fur softness</h4>
      <div class="fur">6</div></p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
</div>


<div class="border border-light col-sm-12 col-md-5  d-flex flex-column justify-content-center align-items-center m-1 text-light" id="cardSectionElements">
<div class="card text-bg-dark">
  <img src="./asset/elephant.jpeg" class="card-img" alt="gray wolf">
  <div class="card-img-overlay"> 
    <h5 class="card-title">Elephant</h5>
    <p class="card-text">
      <h4>Speed</h4>              
      <div class="speed">50</div><br>
      <h4>Weight</h4>
      <div class="weight">20</div>
      <h4>Diet</h4>
      <div class="diet">carnivorous</div>
      <h4>Fur softness</h4>
      <div class="fur">6</div></p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
</div>





<div class="border border-light col-sm-12 col-md-5  d-flex flex-column justify-content-center align-items-center m-1 text-light" id="cardSectionElements">
<div class="card text-bg-dark">
  <img src="./asset/koala.jpg" class="card-img" alt="gray wolf">
  <div class="card-img-overlay"> 
    <h5 class="card-title">Koala</h5>
    <p class="card-text">
      <h4>Speed</h4>              
      <div class="speed">50</div><br>
      <h4>Weight</h4>
      <div class="weight">20</div>
      <h4>Diet</h4>
      <div class="diet">carnivorous</div>
      <h4>Fur softness</h4>
      <div class="fur">6</div></p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
</div>



<div class="border border-light col-sm-12 col-md-5  d-flex flex-column justify-content-center align-items-center m-1 text-light" id="cardSectionElements">
<div class="card text-bg-dark">
  <img src="./asset/snake.jpg" class="card-img" alt="gray wolf">
  <div class="card-img-overlay"> 
    <h5 class="card-title">Snake</h5>
    <p class="card-text">
      <h4>Speed</h4>              
      <div class="speed">50</div><br>
      <h4>Weight</h4>
      <div class="weight">20</div>
      <h4>Diet</h4>
      <div class="diet">carnivorous</div>
      <h4>Fur softness</h4>
      <div class="fur">6</div></p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
</div>
*/
