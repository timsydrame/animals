const paraf = document.getElementById("paraf");



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



function fn_writeXML(xml) {
    let i = 0;
    let xmlDoc= xml.responseXML;
    let x = xmlDoc.getElementsByTagName("animalsName");
    let childLength = x[0].children.length;
    var inHTML = "";

    console.log(x);
    // console.log(childLength);

    for (i = 0; i < x.length; i++) {

        for(j = 0; j < childLength; j++) {

            inHTML += " " + x[i].children[j].innerHTML + "<br>" ;
        }

        inHTML += "<br>";

    }

    paraf.innerHTML = inHTML;
}