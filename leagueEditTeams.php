<?php 
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
                selected: "Mannschaften",
                items: [
                {name: "Name", href: "/leagueEditName.php?id=" + league.id},
                {name: "Mannschaften", href: "/leagueEditTeams.php?id=" + league.id},
                {name: "Spieltage", href: "/leagueEditMatchdays.php?id=" + league.id}
                ]
            }
          }
    };
</script>

<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
    <div id="leagueEditTeams"></div>

    <script type="text/javascript" src="/app/build/leagueEditTeams.js" ></script>

</body>

</html>
