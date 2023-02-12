<?php

$cardToUpdate = $_POST["cardToUpdate"];
$weight = $_POST["weight"];
$size = $_POST["size"];
$speed = $_POST["speed"];
$diet = $_POST["diet"];
$location = $_POST["location"];
$picture = $_POST["picture"];

$xml = simplexml_load_file('../animals.xml');

// echo '<pre>';
// var_dump($xml);
// echo '</pre>';
// die;

foreach ($xml->animalsInfo as $animalsInfo) {

    $name = $animalsInfo->name;
    // echo $name;

    if ($name == $cardToUpdate) {

        if ($weight != "") {
            $xml->animalsInfo->weight = $weight;
        }
        if ($size != "") {
            $xml->animalsInfo->size = $size;
        }
        if ($speed != "") {
            $xml->animalsInfo->speed = $speed;
        }
        if ($diet != "") {
            $xml->animalsInfo->diet = $diet;
        }
        if ($location != "") {
            $xml->animalsInfo->location = $location;
        }
        if ($picture != "") {
            $xml->animalsInfo->picture = $picture;
        }
    }
};

$xml->asXML();

$xml->asXML("../animals.xml");
// header('Location: ../index.html');
