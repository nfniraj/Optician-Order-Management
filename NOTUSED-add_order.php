<?php
//session_start(); // Starting Session
// Define $username and $password
//include('./includes/config.php');
$customerid=$_POST['customerid'];
$producttype=$_POST['producttype'];
$productbrand=$_POST['productbrand'];
$modelno=$_POST['productmodel'];
$details=$_POST['details'];
$quantity=$_POST['quantity'];

//Get Eye number details
$rdsph=$_POST['rdsph'];
$rdcyl=$_POST['rdcyl'];
$rdaxis=$_POST['rdaxis'];

$rnsph=$_POST['rnsph'];
$rncyl=$_POST['rncyl'];
$rnaxis=$_POST['rnaxis'];

$ldsph=$_POST['ldsph'];
$ldcyl=$_POST['ldcyl'];
$ldaxis=$_POST['ldaxis'];

$lnsph=$_POST['lnsph'];
$lncyl=$_POST['lncyl'];
$lnaxis=$_POST['lnaxis'];

//Get billing fields
$total=$_POST['total'];
$advance=$_POST['advance'];
$discount=$_POST['discount'];
$balance=$_POST['balance'];


// To protect MySQL injection for Security purpose
$customerid=stripslashes($customerid);
$producttype=stripslashes($producttype);
$productbrand = stripslashes($productbrand);
$modelno = stripslashes($modelno);
$details = stripslashes($details);
$quantity = stripslashes($quantity);

$customerid=mysql_real_escape_string($customerid);
$producttype=mysql_real_escape_string($producttype);
$productbrand = mysql_real_escape_string($productbrand);
$modelno = mysql_real_escape_string($modelno);
$details = mysql_real_escape_string($details);
$quantity = mysql_real_escape_string($quantity);

$dbhost = 'localhost';
$dbuser = 'optic';
            $dbpass = 'optic';
            $conn = mysql_connect($dbhost, $dbuser, $dbpass);
            
            if(! $conn ) {
               die('Could not connect: ' . mysql_error());
            }
//look for productid			
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
		echo 'Check output- total product id found '. $check_output ;
		
//if matching product is found, get productid	
if( $check_output > 0){

		$sql2 = "SELECT Product_ID,Product_Type FROM product_master WHERE Product_Type='$producttype' and Product_Model='$modelno' and Product_Brand = '$productbrand' and Product_Detail = '$details'";
		$productid = mysql_query($sql2, $conn);
		if (!$productid) { // add this check.
			die('Invalid query: ' . mysql_error());
		}
		while ($row = mysql_fetch_array($productid))
			{
				$output = $row["Product_ID"];
				$output_prd_name = $row["Product_Type"];
			}
		echo '  name of matching product ' . $output_prd_name. $output;
		
	//find inventory for the matching productid		
	$searchinventory = "select * from Inventory where Product_ID = '$output'";
	$result = mysql_query( $searchinventory, $conn );
	 if(! $result ) {
		   die('Invalid query: ' . mysql_error());
		}
	$output2 ='';
	while ($row2 = mysql_fetch_array($result))
	{
		$output2 = $row2["Qty"];
	}
	echo ' qty of product found'.$output2;
	if( $output2 > 0){
			
		//Insert into Order
		$insert_into_order = "INSERT INTO `optic_db`.`order` (`Order_ID`, `Customer_ID`, `Order_DT`, `Order_Bill_ID`, `Product_ID`, `Order_GL_Detail_ID`) VALUES (NULL, '$customerid', NULL, '', '$output','')";
		
		mysql_select_db('optic_db');
		$insert_into_order_res = mysql_query( $insert_into_order, $conn );
		
		if(! $insert_into_order_res ) {
		   die('Could not enter data: ' . mysql_error());
		}
		echo 'Inserted into Order';
		$orderid_op ='';
		$getorderid = "SELECT MAX(Order_ID) as or1 FROM `order`";
		$getorderid_res = mysql_query( $getorderid, $conn );
		if(! $getorderid_res ) {
               die('Could not enter data: ' . mysql_error());
         }
		while ($orderid = mysql_fetch_array($getorderid_res))
		{
			//current Order ID
			$orderid_op = $orderid["or1"];
		}
		echo '  Last order ID fetched.';
		//Insert into Order GL detail
		$insert_into_gl_detail = "INSERT INTO `optic_db`.`order_gl_detail` (`Order_GL_Detail_ID`, `Order_ID`, `gl_re_dist_sph`, `gl_re_dist_cyl`, `gl_re_dist_axis`, `gl_re_near_sph`, `gl_re_near_cyl`, `gl_re_near_axis`, `gl_le_dist_sph`, `gl_le_dist_cyl`, `gl_le_dist_axis`, `gl_le_near_sph`, `gl_le_near_cyl`, `gl_le_near_axis`) VALUES (NULL, '$orderid_op', '$rdsph', '$rdcyl', '$rdaxis', '$rnsph', '$rncyl', '$rnaxis', '$ldsph', '$ldcyl', '$ldaxis', '$lnsph', '$lncyl', '$lnaxis')";
		
		$insert_into_GL_res = mysql_query( $insert_into_gl_detail, $conn );
		
		if(! $insert_into_GL_res ) {
		   die('Could not enter data: ' . mysql_error());
		}
		echo 'GL updated';
		//Get latest GL Detail ID
		$order_gl ='';
		$getglid = "SELECT max(Order_GL_Detail_ID) as gl1 FROM `order_gl_detail`";
		$getglid_res = mysql_query( $getglid, $conn );
		if(! $getglid_res ) {
               die('Could not enter data: ' . mysql_error());
         }
		while ($glid = mysql_fetch_array($getglid_res))
		{
			//current Order ID
			$order_gl = $glid["gl1"];
		}
		//Insert GL ID into Order ID
		$reinsert_gl_into_order = "UPDATE `optic_db`.`order` SET `Order_GL_Detail_ID` = '$order_gl' WHERE `order`.`Order_ID` = $orderid_op";
		
		$reinsert_gl_into_order_res = mysql_query( $reinsert_gl_into_order, $conn );
		
		if(! $reinsert_gl_into_order_res ) {
		   die('Could not enter data: ' . mysql_error());
		}
		echo 'GL ID back to Order';
		//End Insert GL ID into Order ID
		
		//Insert into Billing
		
		$insert_bill = "INSERT INTO `optic_db`.`order_billing` (`Order_Bill_ID`, `Order_Bill_Date`, `Order_Bill_Total`, `Order_Bill_Advance`, `Oder_Bill_Balance`, `Order_Discount`, `Oder_Id`) VALUES (NULL, NULL, '$total', '$advance', '$balance', '$discount', '$orderid_op')";
		
		$insert_bill_res = mysql_query( $insert_bill, $conn );
		
		if(! $insert_bill_res ) {
		   die('Could not enter data: ' . mysql_error());
		}
		//Get latest Bill ID
		$order_bill ='';
		$getbillid = "SELECT max(Order_Bill_ID) as bl1 FROM order_billing";
		$getbillid_res = mysql_query( $getbillid, $conn );
		if(! $getbillid_res ) {
               die('Could not enter data: ' . mysql_error());
         }
		while ($blid = mysql_fetch_array($getbillid_res))
		{
			//current Order ID
			$order_bill = $blid["bl1"];
		}
		echo 'Billing inserted';
		
		//Insert GL ID into Order ID
		$reinsert_bill_into_order = "UPDATE `optic_db`.`order` SET `Order_Bill_ID` = '$order_bill' WHERE `order`.`Order_ID` = $orderid_op";
		
		$reinsert_bill_into_order_res = mysql_query( $reinsert_bill_into_order, $conn );
		
		if(! $reinsert_bill_into_order_res ) {
		   die('Could not enter data: ' . mysql_error());
		}
		echo 'Billing updated in order';
		//End Insert into Billing
		
		//Reduce stock logic
		$updateinventory = "UPDATE `optic_db`.`inventory` SET `Qty` = `Qty`- '$quantity' WHERE `inventory`.`Product_ID` = '$output'";
		$updateinventory_res = mysql_query( $updateinventory, $conn );
		if(! $updateinventory_res ) {
               die('Could not enter data: ' . mysql_error());
            }
		echo 'Stock reduce';
		//End stock
	}
	else{
		echo "no stock available";	
	}
} 
else 
{
	echo 'No matching product found';         
}
?>