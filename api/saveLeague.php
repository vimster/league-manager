<?php
session_start();

$json = file_get_contents('php://input');
$formdata = json_decode($json);

$id = preg_replace("/[^A-Za-z0-9 ]/", '', $formdata->id);

if (!isset($id)) {
	exit();
}


$filename = '../data/leagues/' . $id . '.json';
$passwordfilename = '../data/passwords.json';
$passwords = json_decode(file_get_contents($passwordfilename));

// Update existing league
if (file_exists($filename)) {
	$password = $_SESSION['password_' . $id];

	if (!isset($password) || $password != $passwords->$id) {
	   header('Location: '.'/leagueEnterPassword.php?id=' . $id);
	   exit();
	}

	file_put_contents($filename, json_encode($formdata->league));
	exit();
}


// Create new league

$password = $formdata->password;


if (!isset($password) || property_exists($passwords, $id)) {
	exit();
}

// TODO: date('Y-m-d') add created attribute
$passwords->$id = $password;
file_put_contents($passwordfilename, json_encode($passwords));
file_put_contents($filename, json_encode($formdata->league));

?>