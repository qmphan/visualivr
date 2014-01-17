<?php
require "./config.php";

$method = $_REQUEST['method'];

switch ($method) {
    case "xml_file_list":
        echo '["xml1.xml", "xml2.xml"]';
    break;
}
