<?php
include 'dbconfig.php';
$purchaseid = $_GET['id'];
//$orderid = '15';

//get qty of the purchase
$get_qty = "select * from `supplier_purchase_detail` where Purchase_ID = '$purchaseid'";
$get_qty_res = mysql_query($get_qty, $conn);
if (!$get_qty_res)
    {
     die('Query failed: ' . mysql_error());
    }
    
while ($row = mysql_fetch_array($get_qty_res)) {
$qty = $row["Qty"];
$prodid = $row["Product_ID"];

}


// return the Quantity to inventory 

$ret_inventory = "UPDATE `optic_db`.`inventory` SET `Qty` = `Qty` - '$qty' where `inventory`.`product_id` = '$prodid'";
$ret_inventory_res = mysql_query($ret_inventory, $conn);
if (!$ret_inventory_res)
    {
     die('Query failed: ' . mysql_error());
    }

//delete from supplier purchase master
$del_purchase = "DELETE FROM `optic_db`.`supplier_purchase_detail` WHERE `supplier_purchase_detail`.`Purchase_ID` ='$purchaseid'";

$del_purchase_res = mysql_query($del_purchase, $conn);
if (!$del_purchase_res)
    {
     die('Query failed: ' . mysql_error());
    }
     echo "<script type='text/javascript'>alert('Purchase Cancel Successfull');</script>";

?>
  
   <script type="text/javascript">
        window.location.href = 'supplier_purchase_view.php';
    </script>
