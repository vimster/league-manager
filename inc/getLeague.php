<?php
$id = preg_replace("/[^A-Za-z0-9 ]/", '', $_GET['id']);
$league = file_get_contents("data/leagues/" . $id . ".json");
$leagueTitle = json_decode($league)->name;
?>