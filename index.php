<?php 
$user = (object) [
    'name' => 'Jane Doe',
    'email' => 'janedoe@gmail.com',
    'logged' => true
];
?>
<!DOCTYPE html>
<html lang="en">

<?php include('./inc/html.php'); ?>

<script type="text/javascript">
    var STATIC_URL = 'http://localhost/my-app';
    var context = {
        league: <?php echo json_encode($user); ?>,
        name: <?php echo $user->logged; ?>,
        navigation: {
            label: "Liga Manager"
        }
    };
</script>

<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
    <div id="index"></div>
    <script type="text/javascript" src="/app/build/index.js" ></script>
</body>

</html>
