<?php
session_start();

$id = preg_replace("/[^A-Za-z0-9 ]/", '', $_GET['id']);
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