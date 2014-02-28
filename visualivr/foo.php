<?php


if (isset($_GET["filename"])) {
  //  isset($_GET["date_start"]) && 
  //  isset($_GET["date_end"])) {
    
      $filename = $_GET["filename"]; 
   //   $date_start = $_GET["date_start"];
  //    $date_end = $_GET["date_end"];
      if ($filename == "toto.xml") {
      
	$ret = array(
	
	  "field0" =>  array(
	      "field1" => 50,
	      "field2" => 460,
	      "field6" => 500,
	   ),
	  "field1" =>  array(
	      "field3" => 150,
	      "field4" => 260
	   ),
	  "field2" =>  array(
	      "field5" => 1000,
	      "field6" => 60
	   )
	);
	
	echo (json_encode($ret));

      }
      else
	echo (json_encode("BAD NAME"));
}
else {

  echo (json_encode("BULLSHIT"));
}
    
