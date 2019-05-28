<?php
session_start();

error_reporting(-1);
ini_set('display_errors', 'On');

$id = $_GET['id'];

if (!isset($id)) {
	exit();
}

$passwordfilename = 'data/passwords.json';
$passwords = json_decode(file_get_contents($passwordfilename));

$password = $_SESSION['password_' . $id];

if (!isset($password) || $password !== $passwords->$id) {
   header('Location: '.'/leagueEnterPassword.php?id=' . $id);
   exit();
}

?>