<?php

$servername = "127.0.0.1";
$username = "itdept_test";
$password = "rawitdept";
$db ="itdept_test";

 $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    @$data = $request->message;
    
    

	
	//echo $the_stuff;
	 $conn = new mysqli($servername, $username, $password,$db);;

	 $sql = "DELETE FROM pictures WHERE imageurl='$data'";
	  if ($conn->query($sql) === TRUE) {
    echo "sucess";
}
else
{
	echo "fail";
}
echo getcwd();
chdir('images');
$parts = explode('/', $data);
echo $parts[1]; // 'Bullok'

unlink($parts[1]);
	 $conn->close();



	

?>