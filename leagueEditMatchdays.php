<?php
include('./inc/checkPassword.php');
$league = file_get_contents("data/" . $_GET['id'] . ".json");
?>
<!DOCTYPE html>
<html lang="en">

<?php include('./inc/html.php'); ?>

<script type="text/javascript">
    var league = <?php echo $league; ?>;
    var context = {
        league: league,
        navigation: {
            label: league.name + " - Bearbeiten",
            subnavi: {
                selected: "Spieltage",
                items: [
                {name: "Name", href: "/leagueEditName.php?id=" + league.id},
                {name: "Mannschaften", href: "/leagueEditTeams.php?id=" + league.id},
                {name: "Spieltage", href: "/leagueEditMatchdays.php?id=" + league.id}
                ]
            }
        },
        drawer: [
             {text: "Liga anzeigen", href: "/table.php?id=" + league.id}
            ]
    };
</script>

<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
    <div id="leagueEditMatchdays"></div>

    <script type="text/javascript" src="/app/build/leagueEditMatchdays.js" ></script>

</body>

</html>
