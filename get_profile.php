
<?php

include "db_mongo.php";

$userid=(int)$_POST['userid'];

$profile=$collection->findOne(['user_id'=>$userid]);

echo json_encode($profile);

?>
