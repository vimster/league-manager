<!DOCTYPE html>
<html lang="en">

<?php include('./inc/html.php'); ?>

<script type="text/javascript">
    var league = <?php echo json_encode($league); ?>;
    var context = {
        league: league,
        accessKey: "<?php echo $accessKey; ?>",
        navigation: {
            label: league.name + " - Bearbeiten"
        }
    };
</script>

<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
    <div id="leagues"></div>

    <script type="text/javascript" src="/app/build/leagues.js" ></script>

</body>

</html>
