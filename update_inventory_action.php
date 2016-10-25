<?php
//session_start(); // Starting Session
// Define $username and $password
//include('./includes/config.php');
$producttype=$_POST['producttype'];
$productbrand=$_POST['productbrand'];
$modelno=$_POST['productmodel'];
$details=$_POST['details'];
$quantity=$_POST['quantity'];


// To protect MySQL injection for Security purpose
$modelno = stripslashes($modelno);
$productbrand = stripslashes($productbrand);
$details = stripslashes($details);
$quantity = stripslashes($quantity);

$modelno = mysql_real_escape_string($modelno);
$productbrand = mysql_real_escape_string($productbrand);
$details = mysql_real_escape_string($details);
$quantity = mysql_real_escape_string($quantity);

$dbhost = 'localhost';
$dbuser = 'optic';
            $dbpass = 'optic';
            $conn = mysql_connect($dbhost, $dbuser, $dbpass);
            
            if(! $conn ) {
               die('Could not connect: ' . mysql_error());
            }
			
$sql = "SELECT COUNT(*) as total FROM product_master WHERE Product_Type='$producttype' and Product_Model='$modelno' and Product_Brand = '$productbrand' and Product_Detail = '$details'";
mysql_select_db('optic_db');
$check_qry = mysql_query( $sql, $conn );
if(! $check_qry ) {
               die('Could not enter data: ' . mysql_error());
            }
while ($check_row = mysql_fetch_array($check_qry))
			{
				$check_output = $check_row["total"];
			}
			
		
if( $check_output > 0){

		$sql2 = "SELECT Product_ID FROM product_master WHERE Product_Type='$producttype' and Product_Model='$modelno' and Product_Brand = '$productbrand' and Product_Detail = '$details'";
		$productid = mysql_query($sql2, $conn);
		if (!$productid) { // add this check.
			die('Invalid query: ' . mysql_error());
			echo $productid;
		}
		while ($row = mysql_fetch_array($productid))
			{
				$output = $row["Product_ID"];
			}
		$updateinventory = "INSERT INTO `optic_db`.`inventory` (`Inventory_ID`, `Product_ID`, `Qty`) VALUES (NULL, '$output', $quantity)";
		$result = mysql_query( $updateinventory, $conn );
		 if(! $result ) {
               die('Could not enter data: ' . mysql_error());
            }
            
            echo "found match";	

} 
else 
{
	$fresh_entry = "INSERT INTO `optic_db`.`product_master` (`Product_ID`, `Product_Type`, `Product_Model`, `Product_Brand`, `Product_Detail`) VALUES (NULL, '$producttype', '$modelno', '$productbrand', '$details')";
               
            mysql_select_db('optic_db');
            $fresh = mysql_query( $fresh_entry, $conn );
            
            if(! $fresh ) {
               die('Could not enter data: ' . mysql_error());
            }
            
            echo "new non matching product inserted";			
$getlastproductid = "SELECT max(Product_ID) as m1 FROM product_master";
$lastprodid = mysql_query( $getlastproductid, $conn );
if(! $lastprodid ) {
               die('Could not enter data: ' . mysql_error());
            }
while ($row2 = mysql_fetch_array($lastprodid))
			{
				$output2 = $row2["m1"];
			}
			
$updateinventory = "INSERT INTO `optic_db`.`inventory` (`Inventory_ID`, `Product_ID`, `Qty`) VALUES (NULL, '$output2', $quantity)";
$insert_inventory = mysql_query( $updateinventory, $conn );
if(! $insert_inventory ) {
               die('Could not enter data: ' . mysql_error());
            }
            
}
?>