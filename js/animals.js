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

    var imgElement = x[i].children[animalsInfoLength - 1].innerHTML;
var titreElement = x[i].children[0].innerHTML;
    var pWeight = x[i].children[1].innerHTML;
    var pSize = x[i].children[2].innerHTML;
    var pSpeed = x[i].children[3].innerHTML;
    var pDiet = x[i].children[4].innerHTML;
    var pLocation = x[i].children[5].innerHTML;

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
  }
}