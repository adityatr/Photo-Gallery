<?php

include 'connect.php';

$images = glob('images/*.{jpeg,gif,png,jpg}', GLOB_BRACE);
store_data_in_database($images);
echo json_encode($images);

?>