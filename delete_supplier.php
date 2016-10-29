<?php
include 'dbconfig.php';
$supp_id = $_GET['id'];
//$orderid = '15';

//delete product from product master
$del_supp = "delete from `supplier_master` WHERE Supplier_ID = '$supp_id'";

$del_supp_res = mysql_query($del_supp, $conn);
if (!$del_supp_res)
    {
     die('Query failed: ' . mysql_error());
    }
    echo "<script type='text/javascript'>alert('Supplier deleted!');</script>";
    ?>
    <script type="text/javascript">
        window.location.href = 'show_suppliers.php';
    </script>
