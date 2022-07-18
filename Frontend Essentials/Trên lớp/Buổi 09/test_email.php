<?php
$mailArray=array(
'abc@gmail.com',
'xyz@yahoo.com',
'dungpt@edu.vn');

$email=$_GET['Email'];
if(in_array($email,$mailArray))
echo 'false';
else
	echo 'true'
?>
