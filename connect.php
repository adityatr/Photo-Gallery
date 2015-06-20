<?php



function connector()
{
	$servername = "127.0.0.1";
$username = "itdept_test";
$password = "rawitdept";
$db ="itdept_test";
// Create connection
 return new mysqli($servername, $username, $password,$db);

}

function store_data_in_database($toSave)
{
$conn = connector();
$sql = "CREATE TABLE pictures (
imageurl VARCHAR(500) PRIMARY KEY
)";
if ($conn->query($sql) === TRUE) {
}

 if(is_array($toSave)){ 
   
$arrlength = count($toSave);
   for($x = 0; $x < $arrlength; $x++) {
    $sql = "INSERT INTO pictures (imageurl)VALUES ('$toSave[$x]')";
    if ($conn->query($sql) === TRUE) {
    
}
 }
 }

$conn->close();

}
function store_single_image($toSave)
{
$conn = connector();
$sql = "CREATE TABLE pictures (
imageurl VARCHAR(500) PRIMARY KEY
)";
if ($conn->query($sql) === TRUE) {
}
$sql = "INSERT INTO pictures (imageurl)VALUES ('$toSave')";
 if ($conn->query($sql) === TRUE) {
    
}
$conn->close();
}



?>