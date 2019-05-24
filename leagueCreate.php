<?php 
$league = (object) [
    'name' => 'Jane Doe',
    'email' => 'janedoe@gmail.com',
    'logged' => true
];
$accessKey = "verysecurekey";
?>
<!DOCTYPE html>
<html lang="en">

<?php include('./inc/html.php'); ?>

<script type="text/javascript">
    var context = {
        accessKey: "<?php echo $accessKey; ?>",
        navigation: {
            label: "Liga anlegen",
          }
    };
</script>

<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
    <div id="leagueCreate"></div>

    <script type="text/javascript" src="/app/build/leagueCreate.js" ></script>

</body>

</html>
