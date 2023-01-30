<?php

// print_r($_GET);

$name = $_GET["name"];
$weight = $_GET["weight"];
$size = $_GET["size"];
$speed = $_GET["speed"];
$diet = $_GET["diet"];
$location = $_GET["location"];
$picture = $_GET["picture"];


// $xml = simplexml_load_file("../animals.xml");

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
