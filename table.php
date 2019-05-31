<?php 
include('./inc/getLeague.php');
?>
<!DOCTYPE html>
<html lang="en">

<?php include('./inc/html.php'); ?>

<script type="text/javascript">
    var league = <?php echo $league; ?>;
    var context = {
        league: league,
        navigation: {
            label: league.name,
            subnavi: {
                selected: "Tabelle",
                items: [
                {name: "Tabelle", href: "/table.php?id=" + league.id},
                {name: "Spieltage", href: "/matchdays.php?id=" + league.id}
                ]
            }
        },
        drawer: [
            {text: "Liga bearbeiten", href: "/leagueEditName.php?id=" + league.id, icon: "edit"},
            {text: "Liga exportieren", href: "/leagueExport.php?id=" + league.id, icon: "export"}
        ]
    };
</script>

<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>

    <div id="table"></div>

    <script type="text/javascript" src="/app/build/table.js" ></script>

</body>

</html>
