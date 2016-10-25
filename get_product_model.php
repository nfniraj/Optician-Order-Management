<?php
//session_start(); // Starting Session
// Define $username and $password
//include('./includes/config.php');
//$producttype=$_POST['producttype_id'];

// To protect MySQL injection for Security purpose
//$producttype = stripslashes($producttype);

//$customername = mysql_real_escape_string($producttype);
$output = '';
$dbhost = 'localhost';
$dbuser = 'optic';
            $dbpass = 'optic';
            $conn = mysql_connect($dbhost, $dbuser, $dbpass);
            
            if(! $conn ) {
               die('Could not connect: ' . mysql_error());
            }
		
if (isset($_POST['productbrand_id']))
{
	if ($_POST["productbrand_id"]!= '')
	{
		$sql = "SELECT Product_Model FROM Product_Master WHERE Product_Brand = '".$_POST["productbrand_id"]."'";
	}
}	
else
{
		$sql = "SELECT * FROM Product_Master";

}
               
            mysql_select_db('optic_db');
            $retval = mysql_query( $sql, $conn );
 
			while ($row = mysql_fetch_array($retval))
			{
				$output .= '<option value="'.$row["Product_Model"].'">'.$row["Product_Model"].'</option>';
			}
			echo $output;
            if(! $retval ) {
               die('Could not enter data: ' . mysql_error());
            }
            
            echo "Entered data successfully\n";			

?>