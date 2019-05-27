<?php
session_start();

error_reporting(-1);
ini_set('display_errors', 'On');

$json = file_get_contents('php://input');
$formdata = json_decode($json);

$id = $formdata->id;


if (!isset($id)) {
	exit();
}


$filename = '../data/' . $id . '.json';
$passwordfilename = '../data/passwords.json';
$passwords = json_decode(file_get_contents($passwordfilename));

// Update existing league
if (file_exists($filename)) {
	$password = $_SESSION['password_' . $id];

	if (!isset($password) || $password != $passwords[$id]) {
	   header('Location: '.'/leaguePassword.php?id=' . $id);
	   exit();
	}

	file_put_contents($filename, json_encode($formdata->league));
	exit();
}

// Create new league

$password = $formdata->password;

if (!isset($password) || isset($passwords[$id])) {
	exit();
}
$passwords[$id] = $password;
file_put_contents($passwordfilename, json_encode($passwords));
file_put_contents($filename, json_encode($formdata->league));

?>