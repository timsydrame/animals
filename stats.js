// Variables of useful datas for stats

let weight = document.querySelectorAll(".weight");
let names = document.getElementsByClassName("name");
let speed = document.querySelectorAll(".speed");
let diet = document.querySelectorAll(".diet");
let progressBarSpeed = document.querySelector(".progressBarSpeed");

// Bootstrap progress bar
for (let i = 0; i < names.length; i++) {
  progressBarSpeed.innerHTML += `<div class="animalName text-light">${names[i].innerHTML}</div>
 <div class="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
<div class="progress-bar text-dark" id="bootstrapBars" style="width:${speed[i].innerHTML}%">${speed[i].innerHTML} km/h</div>
</div>`;
}

// Charts bar js

// Customize text color to white and font size
Chart.defaults.color = "#fff";
Chart.defaults.font.size = 16;

// Creating variables to customize labels and datas of charts from charts.js library
let labelsData = [];
let dataS = [];

// Looping on names.length to get names and weight datas
for (let i = 0; i < names.length; i++) {
  labelsData.push(names[i].innerHTML);
  dataS.push(weight[i].innerHTML);
}

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

// Charts dougnut js

// Creating variables to customize labels and datas of charts from charts.js library
let dataS2 = [];

// looping to get diet datas
for (let i = 0; i < 2; i++) {
  dataS2.push(diet[i].innerHTML);
}

// // Creation of the diet comparison chart
new Chart(doughnutDietChart, {
  type: "doughnut",
  data: {
    labels: ["Cat, Wolf", "Elephant"],
    datasets: [
      {
        data: [70, 30],
        color: "#fff",
        backgroundColor: ["#8FFF67", "#fff"],
      },
    ],
  },
});

// Charts bar js (FUN VERSION)

// Creating variables to customize labels and datas of charts from charts.js library
let dataFur = [];
let fur = document.querySelectorAll(".fur");

// Looping on names.length to get names and weight datas
for (let i = 0; i < names.length; i++) {
  dataFur.push(fur[i].innerHTML);
}
console.log(dataFur);

// Creation of the fur softness comparison chart
new Chart(columnChartFur, {
  type: "bar",
  data: {
    labels: labelsData,
    datasets: [
      {
        label: "Fur softness (on a scale from 0 to 10",
        data: dataFur,
        borderWidth: 1,
        backgroundColor: "#8FFF67",
      },
    ],
  },
});
