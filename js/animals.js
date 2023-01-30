const parentElement = document.getElementById("cardSection");
let form = document.getElementById("addAnimals");

// Creating variables to customize labels and datas of charts from charts.js library
const labelsData = [];
const dataS = [];





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
  console.log("hellsscscso");
  let xmlDoc = xml.responseXML;
  let x = xmlDoc.getElementsByTagName("animalsInfo");
  let animalsInfoLength = x[0].children.length;
  let animalsHowMany = x.length;
  console.log(animalsInfoLength);
  console.log(x);

  for (let i = 0; i < animalsHowMany; i++) {
    var imgElement = x[i].children[animalsInfoLength - 1].innerHTML;

    var titreElement = x[i].children[0].innerHTML;
    var pWeight = x[i].children[1].innerHTML;
    var pSize = x[i].children[2].innerHTML;
    var pSpeed = x[i].children[3].innerHTML;
    var pDiet = x[i].children[4].innerHTML;
    var pLocation = x[i].children[5].innerHTML;

    let progressBarSpeed = document.querySelector(".progressBarSpeed");

    parentElement.innerHTML += `<div class="border border-light col-12 col-lg-5 d-flex flex-column no-wrap justify-content-center align-items-center m-1 p-2 text-light cardSectionElements">
                                  <div class="card text-bg-dark">
                                    <img src="${imgElement}" class="card-img" alt="${titreElement}picture">
                                    <div class="card-img-overlay d-flex flex-column">
                                        <h5 class="card-title">${titreElement}</h5>
                                        <div class="d-flex justify-content-around">
                                          <div>
                                            <p class="card-text">Weight: <br> ${pWeight} kg</p>
                                            <p class="card-text">Size : <br> ${pSize} m</p>
                                            <p class="card-text">Speed : <br> ${pSpeed} km/h</p>
                                          </div>
                                          <div>
                                            <p class="card-text">Diet : <br> ${pDiet}</p>
                                            <p class="card-text">Location : <br>${pLocation}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>`;
    // Bootstrap progress bar

    progressBarSpeed.innerHTML += `<div class="animalName text-light">${titreElement}</div>
    <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
   <div class="progress-bar text-dark" id="bootstrapBars" style="width:${pSpeed}%">${pSpeed} km/h</div>
   </div>`;

    labelsData.push(titreElement);
    dataS.push(pWeight);
  }





  
  // Customize text color to white and font size
  Chart.defaults.color = "#fff";
  Chart.defaults.font.size = 16;
  // Creation of the weight comparison chart
  new Chart(columnChartWeight, {
    type: "bar",
    data: {
      labels: labelsData,
      datasets: [
        {
          label: "Weight in kilograms",
          data: dataS,
          borderWidth: 1,
          backgroundColor: "#8FFF67",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
