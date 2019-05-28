<?php
session_start();

$passwords = json_decode(file_get_contents("../data/passwords.json"));

$formdata = json_decode(file_get_contents('php://input'));

$password = $formdata->password;
$leagueId = $formdata->leagueId;

if (!isset($password) || !isset($leagueId)) {
	echo "Enter id and password";
	exit();
}

if ($password == $passwords->$leagueId) {
   $_SESSION['password_' . $leagueId] = $password;
   echo "password set in session";
   exit();
}

echo "password not set";
?>