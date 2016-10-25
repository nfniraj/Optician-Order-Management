<?php
//session_start(); // Starting Session
// Define $username and $password
//include('./includes/config.php');
$customername=$_POST['customername'];
$dob=$_POST['dob'];
$gender=$_POST['gender'];
$mobileno=$_POST['mobileno'];
$customeraddress=$_POST['customeraddress'];


// To protect MySQL injection for Security purpose
$customername = stripslashes($customername);
$dob = stripslashes($dob);
$gender = stripslashes($gender);
$mobileno = stripslashes($mobileno);
$customeraddress = stripslashes($customeraddress);

$customername = mysql_real_escape_string($customername);
$dob = mysql_real_escape_string($dob);
$gender = mysql_real_escape_string($gender);
$mobileno = mysql_real_escape_string($mobileno);
$customeraddress = mysql_real_escape_string($customeraddress);


$dbhost = 'localhost';
$dbuser = 'optic';
            $dbpass = 'optic';
            $conn = mysql_connect($dbhost, $dbuser, $dbpass);
            
            if(! $conn ) {
               die('Could not connect: ' . mysql_error());
            }
			
$sql = "INSERT INTO `optic_db`.`customer` (`Customer_ID`, `Customer_Name`, `Customer_DOB`, `Customer_Gender`, `Customer_Mobile_No`, `Customer_Address`, `Customer_Creation_DT`) VALUES (NULL, '$customername', '$dob', '$gender', '$mobileno','$customeraddress','')";

               
            mysql_select_db('optic_db');
            $retval = mysql_query( $sql, $conn );
            
            if(! $retval ) {
               die('Could not enter data: ' . mysql_error());
            }
            
            echo "Entered data successfully\n";			

//connection = mysql_connect("localhost", "optics", "");

// Selecting Database
//db = mysql_select_db("optic_db", $connection);
// SQL query to fetch information of registerd users and finds user match.
//$query = mysql_query("INSERT INTO `optic_db`.`product_master` (`Product_ID`, `Product_Type`, `Product_Model`, `Product_Brand`, `Product_Detail`) VALUES (NULL, '$producttype', '$modelno', '$productbrand', '$details')", $connection);
//echo "data written";

//mysql_close($connection); // Closing Connection
?>