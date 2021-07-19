<?php
$insert=false;
if(isset($_POST['name'])){
$server = "localhost";
$username = "id16501941_rca";
$password ="Sourabh1503.";
$connection=mysqli_connect($server,$username,$password);
if(!$connection)
{
  die("soory server down or ".mysqli_connect_error());
}
$name=$_POST['name'];
$email=$_POST['email'];
$message=$_POST['message'];
$sql ="INSERT INTO `id16501941_form`.`form` (`name`, `email`, `message`, `ct`) VALUES('$name', '$email', '$message', current_timestamp());";
if($connection->query($sql)==True)
{
$insert=true;
// echo "<script>";
// echo 'alert("Your data has been sucessfully submitted,redirecting");';
// echo "</script>";
header("Location: /index.php");
}
else{
  echo " ERROR: $sql <br> $connection->error";
}}
?>