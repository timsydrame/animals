<?php

$name = $_POST["name"];
$weight = $_POST"weight"];
$size = $_POST["size"];
$speed = $_POST["speed"];
$diet = $_POST["diet"];
$location = $_POST["location"];
$picture = $_POST["picture"];

$ourXML = file_get_contents("../animals.xml");

$newXML = new SimpleXMLElement($ourXML);

// var_dump($Newxml);

$animalsInfo = $newXML->addChild("animalsInfo");
$animalsInfo->addChild("name", $name);
$animalsInfo->addChild("weight", $weight);
$animalsInfo->addChild("size", $size);
$animalsInfo->addChild("speed", $speed);
$animalsInfo->addChild("diet", $diet);
$animalsInfo->addChild("location", $location);
$animalsInfo->addChild("photo", $picture);

echo $newXML->asXML();

echo $newXML->asXML("../animals.xml");

header('location: ../index.html');
