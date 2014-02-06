<?php

require "./config.php";

$method = $_REQUEST['method'];

function	get_xml_file_list() {

    $dir = "../vxml/";
    $dh  = opendir($dir);
    while (false !== ($filename = readdir($dh))) {
	  $foo = pathinfo($filename);
	if ($foo["extension"] == 'xml')
	    $files[] = $filename;
    }
    return ($files);
}

switch ($method) {
    case "xml_file_list":
	echo json_encode(get_xml_file_list());
    break;
}

