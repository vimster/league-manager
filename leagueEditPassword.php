<?php 
include('./inc/checkPassword.php');
include('./inc/getLeague.php');
?>
<!DOCTYPE html>
<html lang="en">

<?php include('./inc/html.php'); ?>

<script type="text/javascript">
    var league = <?php echo $league; ?>;
    var context = {
        league: league,
        accessKey: "<?php echo $accessKey; ?>",
        navigation: {
            label: league.name + " - Bearbeiten",
            subnavi: {
                selected: "Name",
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
    <div id="leagueEditPassword"></div>

    <script type="text/javascript" src="/app/build/leagueEditPassword.js" ></script>

</body>

</html>
