
  const imageUrl = "/animals/asset/loup.jpg";
  const parentElement = document.getElementById("photoLoup");
  const button = document.getElementById("validate");
  let taille = 5;
  
  button.addEventListener("click", function() {
    for (let i = 0; i < taille; i++) {
      const imgElement = document.createElement("img");
      const titreElement = document.createElement("h5")
      const paraElement = document.createElement("p")
      imgElement.src = imageUrl;
      titreElement.innerText = "The gray wolf"
      paraElement.innerText = `Weight: between 20 and 80 kg
      Size: between 1.5 and 1.8 meters in length
      Speed: 60 km/h
      Food: sheep, foxes and other wild animals, fruits and vegetables.
      Location: North America, Europe, Asia, and Africa.`;
      imgElement.style.width = "300px";
      imgElement.style.height = "200px";
      imgElement.style.text = "center";
      imgElement.style.padding = "30px";
      titreElement.style.color="red";
      titreElement.style.top="10%";
      paraElement.style.top="15%";
      paraElement.style.color="green";
      parentElement.appendChild(imgElement);
      parentElement.appendChild(titreElement);
      parentElement.appendChild(paraElement);
    }
  })

 