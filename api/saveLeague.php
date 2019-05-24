<?php

// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);

$accessKey = $data->accessKey;

if ($accessKey != 'verysecurekey') {
	return;
}

$id = $data->id;
$json_data = json_encode($data->league);

$filename = '../data/' . $id . '.json';

file_put_contents($filename, $json_data);
chmod($filename, 0664);
echo "asldfj";

?>