
<?php

include "db_mongo.php";

$userid=(int)$_POST['userid'];

$age=$_POST['age'];
$dob=$_POST['dob'];
$contact=$_POST['contact'];

$collection->updateOne(

['user_id'=>$userid],

['$set'=>[
'age'=>$age,
'dob'=>$dob,
'contact'=>$contact
]],

['upsert'=>true]

);

echo "Updated";

?>
