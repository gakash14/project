
<?php

$host="localhost";
$user="root";
$password="";
$db="guvi_users";

$conn=new mysqli($host,$user,$password,$db);

if($conn->connect_error){
die("Connection Failed");
}

?>
