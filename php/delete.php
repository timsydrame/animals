<?php

$cardToDelete = $_POST['cardToDelete'];

echo $cardToDelete;

$xml = simplexml_load_file('../animals.xml');

foreach ($xml->animalsInfo as $animalsInfo) {

    $name = $animalsInfo->name;

    if ($name == $cardToDelete) {
        $dom = dom_import_simplexml($animalsInfo);
        $dom->parentNode->removeChild($dom);
    }
}
echo $xml->asXML();
echo $xml->asXML("../animals.xml");

// header('location: ../index.html');
