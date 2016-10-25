<?php
//session_start(); // Starting Session
// Define $username and $password
//include('./includes/config.php');
$suppliername=$_POST['suppliername'];
$mobileno=$_POST['mobileno'];
$supplieraddress=$_POST['supplieraddress'];


// To protect MySQL injection for Security purpose
$suppliername = stripslashes($suppliername);
$mobileno = stripslashes($mobileno);
$supplieraddress = stripslashes($supplieraddress);

$suppliername = mysql_real_escape_string($suppliername);
$mobileno = mysql_real_escape_string($mobileno);
$supplieraddress = mysql_real_escape_string($supplieraddress);


$dbhost = 'localhost';
$dbuser = 'optic';
            $dbpass = 'optic';
            $conn = mysql_connect($dbhost, $dbuser, $dbpass);
            
            if(! $conn ) {
               die('Could not connect: ' . mysql_error());
            }
			
$sql = "INSERT INTO `optic_db`.`supplier_master` (`Supplier_ID`, `Supplier_Name`,`Supplier_Address`,`Supplier_Mobile_No` ) VALUES (NULL, '$suppliername', '$supplieraddress',$mobileno)";
echo $mobileno;
echo '$mobileno';

               
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