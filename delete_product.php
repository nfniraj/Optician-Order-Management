<?php
include 'dbconfig.php';
$product_id = $_GET['id'];
//$orderid = '15';

//delete product from product master
$del_inv = "delete from `inventory` WHERE Product_ID = '$product_id'";

$del_inv_res = mysql_query($del_inv, $conn);
if (!$del_inv_res)
    {
     die('Query failed: ' . mysql_error());
    }
    
//delete product from product master
$del_prod = "delete from `product_master` WHERE Product_ID = '$product_id'";

$del_prod_res = mysql_query($del_prod, $conn);
if (!$del_prod_res)
    {
     die('Query failed: ' . mysql_error());
    }
    echo "<script type='text/javascript'>alert('Product deleted!');</script>";
    ?>
    <script type="text/javascript">
        window.location.href = 'view_products.php';
    </script>
