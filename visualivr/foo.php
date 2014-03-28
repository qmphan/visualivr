<?php


if (isset($_GET["filename"])) {
    //  isset($_GET["date_start"]) &&
    //  isset($_GET["date_end"])) {

    $filename = $_GET["filename"];
    //   $date_start = $_GET["date_start"];
    //    $date_end = $_GET["date_end"];
    switch ($filename) {

    case "toto.xml"  :
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
	break;
    case "astrotv_vivolta_welcome.xml"  :
	$ret = array(

	    "choice" =>  array(
		"astro_welcome" => 50,
		"astro_without_card" => 460,
		"voicemail_question" => 500,
	    ),
	    "is_wengo" =>  array(
		"teller_tvlive" => 150,
	    ),
	    "voicemail_question" => array(
		"tvlive_vivolta" => 200
	    )
	);

	echo (json_encode($ret));
	break;

    case "astrotv_welcome.xml"  :
	$ret = array(

	    "choice" =>  array(
		"astro_welcome" => 50,
		"voicemail_question" => 500,
	    ),
	    "is_blacklisted" =>  array(
		"astro_welcome" => 450,
	    ),
	    "is_wengo" => array(
		"teller_tvlive" => 192
	    ),
	    "voicemail_question" => array(
		"tvlive" => 210
	    )
	);

	echo (json_encode($ret));
	break;
    case "select_expert_by_category_astro.xml"  :
	$ret = array(

	    "expert_list" =>  array(
		"wdeal:///astroconsult/select_expert.xml" => 450,
		"next_expert" => 450,
	    ),
	    "error" => array(
		"wdeal:///astroconsult/goto_teller.xml" => 450,
	    ),
	    "no_availability" => array(
		"wdeal:///astroconsult/select_expert.xml" => 450,
		"astroconsult.setup_meeting" => 129,
	    ),
	    "next_expert" => array(
		"end_of_list_choice" => 210
	    ),
	    "end_of_list_choice" => array(
		"replay" => 29,
		"astroconsult.setup_meeting" => 129,
	    )
	);

	echo (json_encode($ret));
	break;
    case "astrotv_queue_client.xml"  :
	$ret = array(

	    "music_wait" =>  array(
		"exit" => 34,
	    ),
	);

	echo (json_encode($ret));
	break;
    default:
	echo (json_encode("BAD NAME"));
	break;
    }
}
else {

    echo (json_encode("ERROR"));
}

