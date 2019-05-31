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

$password = $_SESSION['password_' . $id];

if (!isset($password) || $password != $passwords->$id) {
   header('Location: '.'/leagueEnterPassword.php?id=' . $id);
   exit();
}

?>