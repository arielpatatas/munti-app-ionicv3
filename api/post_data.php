<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {

        header("Access-Control-Allow-Origin: {$_SERVER[‘HTTP_ORIGIN’]}");

        header('Access-Control-Allow-Credentials: true');

        header('Access-Control-Max-Age: 86400');    // cache for 1 day

    }

    // Access-Control headers are received during OPTIONS requests

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') 

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))

            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");        

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))

            header("Access-Control-Allow-Headers:        {$_SERVER[‘HTTP_ACCESS_CONTROL_REQUEST_HEADERS’]}");

         exit(0);

    }

 

    require "dbconnect.php";


    $sql ="SELECT * FROM users ;";
    
    $result = mysqli_query($con, $sql);
    
    $response = array();

$country = stripslashes($country);

$capital = stripslashes($capital);

 

/////// Check to see that the database does not contain repeated information

 $sql = "SELECT id FROM countries WHERE country = ‘$country'";

      $result = mysqli_query($db,$sql);

      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);

      $active = $row['active'];

    $count = mysqli_num_rows($result);

      // If result matched country and $country, table row must be 1 row                   

      if($count >0) {

      $response=  "Country already exists in our database";

      }else {

  $sql = "SELECT id FROM countries WHERE  capital = '$capital'";

      $result = mysqli_query($db,$sql);

      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);

      $active = $row['active'];

      $count = mysqli_num_rows($result);

      // If result matched capital and $capital, table row must be 1 row           

      if($count >0) {

      $response= "capital already exists, there are no two countries with the same capital";

      }                 

                  else

 {

$sql = "INSERT INTO user (country, capital)

VALUES ('$country', '$capital')";

if ($con->query($sql) === TRUE) {

                $response= "post successfull";

} else {

   $response= "Error:" . $sql . "<br>" . $db->error;

}

 }} 

                echo json_encode( $response);

$db->close();

?>