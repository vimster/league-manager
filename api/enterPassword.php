<?php
session_start();

$passwords = json_decode(file_get_contents("../data/passwords.json"));
// Takes raw data from the request
$json = file_get_contents('php://input');

echo $json;

// Converts it into a PHP object
$data = json_decode($json);
$password = $data->password;
$leagueId = $data->leagueId;

if (!isset(password) || !isset(leagueId)) {
	echo "Enter id and password";
	exit();
}
echo $data;

if ($password == $passwords[$leagueId]) {
   $_SESSION['password_' . $leagueId] = $password;
   echo "password set in session"
   exit();
}

echo "password not set"

?>