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
            label: league.name
          }
    };
</script>

<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
    <div id="leagueEnterPassword"></div>

    <script type="text/javascript" src="/app/build/leagueEnterPassword.js" ></script>

</body>

</html>
