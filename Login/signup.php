<?php

include 'db.php';

$full_name = $_POST["full_name"];
$email = $_POST["email"];
$password = $_POST["password"];

$query = "INSERT INTO users (full_name, email, password) VALUES ('$full_name', '$email', '$password')";
$result = mysqli_query($conn, $query);

if ($result == true)
{
	echo "Your account has been successfully created!";
		
}
else
{
	echo "Your account could not be created due to an error!";
		
}