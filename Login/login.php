<?php

include 'db.php';

session_start();

$email = $_POST["email"];
$password = $_POST["password"];

$query = "SELECT email, password FROM users WHERE email = '$email' AND password = '$password' LIMIT 1";
$result = mysqli_query($conn, $query);
$num_rows = mysqli_num_rows($result);

if ($num_rows > 0)
{
	echo "You have successfully logged in!";
}
else
{
	echo "Login unsuccessful! Try again...";
}
