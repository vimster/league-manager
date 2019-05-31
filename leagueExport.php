<?php
include('./inc/getLeague.php'); 
// We'll be outputting a PDF
header('Content-type: application/json');

header('Content-Disposition: attachment; filename="ligaexport_' . date('Y-m-d') . '_' . $id . '.json"');
readfile("data/leagues/" . $id . ".json");
?>