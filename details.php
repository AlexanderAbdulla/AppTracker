<!DOCTYPE html>
<html>
<head>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<title>Application Control</title>
<script src="scripts.js"></script>
</head>
<body onload = "loadDetails('<?php echo $_GET['name'] ?>')">

    <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4" id = "centerDiv">
            <h1>Details for <?php echo $_GET['name'] ?></h1>
            <br>
            <a href="index.html"> BACK </a>
            <br>
            <br>
            <div id = 'detailsDiv'></div>
        </div>
        <div class="col-sm-4"></div>
    </div>

</body>
</html>