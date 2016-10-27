<?php
include 'dbconfig.php';
$orderid = $_GET['id'];
//$orderid = '15';

//get product id of the order
$get_prodid = "SELECT * FROM `order` WHERE Order_ID = '$orderid'";

$get_prodid_res = mysql_query($get_prodid, $conn);
if (!$get_prodid_res)
    {
     die('Query failed: ' . mysql_error());
    }
while ($row1 = mysql_fetch_array($get_prodid_res)) {
$prodid = $row1["Product_ID"];
$orderqty = $row1["Order_Quantity"];
$billid = $row1["Order_Bill_ID"];
$glid = $row1["Order_GL_Detail_ID"];
}

// return the Quantity to inventory 
$ret_inventory = "UPDATE inventory set Qty = Qty + '$orderqty' where inventory.Product_ID = '$prodid'";
$ret_inventory_res = mysql_query($ret_inventory, $conn);
if (!$ret_inventory_res)
    {
     die('Query failed: ' . mysql_error());
    }

//delete bill id
$del_bill_id = "delete from `order_billing` where Order_ID = '$orderid'";
$del_bill_id_res = mysql_query($del_bill_id, $conn);
if (!$del_bill_id_res)
    {
     die('Query failed: ' . mysql_error());
    }


//delete glid
$del_glid_id = "delete from `order_gl_detail` where Order_ID = '$orderid'";
$del_glid_id_res = mysql_query($del_glid_id, $conn);
if (!$del_glid_id_res)
    {
     die('Query failed: ' . mysql_error());
    }


//delete order entry
$del_order = "delete from `order` where Order_ID = '$orderid'";
$del_order_res = mysql_query($del_order, $conn);
if (!$del_order_res)
    {
     die('Query failed: ' . mysql_error());
    }
    echo "<script type='text/javascript'>alert('Order Cancel Successfull');</script>";
    ?>
    <script type="text/javascript">
        window.location.href = 'customer_order_view.php';
    </script>

   // sleep(20);
  //  header('Location:customer_order_view.php');