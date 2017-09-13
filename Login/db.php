<?php

$host = "localhost";
$account = "root";
$password = "password";
$dbname = "database";

$conn = mysqli_connect("$host", "$account", "$password", "$dbname") or die ("Could not connect to the database");