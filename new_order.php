<?php
include 'dbconfig.php';
$customerid = $_GET['id'];

//$customerid = '1';
//functions to populate product type, model, brand and detail
function fill_product_type($conn) {
    $output = '';
    $sql = "SELECT distinct Product_Type from Product_Master";
    mysql_select_db('optic_db');
    $retval = mysql_query($sql, $conn);
    while ($row = mysql_fetch_array($retval)) {
        $output .= '<option value="' . $row["Product_Type"] . '">' . $row["Product_Type"] . '</option>';
    }
    return $output;
}

function fill_product_brand($conn) {
    //$producttype=$_POST['producttypeID'];
    $output = '';
    $sql = "SELECT distinct Product_Brand from Product_Master";
    mysql_select_db('optic_db');
    $retval = mysql_query($sql, $conn);
    while ($row = mysql_fetch_array($retval)) {
        $output .= '<option value="' . $row["Product_Brand"] . '">' . $row["Product_Brand"] . '</option>';
    }
    return $output;
}

function fill_product_model($conn) {
    //$producttype=$_POST['producttypeID'];
    $output = '';
    $sql = "SELECT distinct Product_Model from Product_Master";
    mysql_select_db('optic_db');
    $retval = mysql_query($sql, $conn);
    while ($row = mysql_fetch_array($retval)) {
        $output .= '<option value="' . $row["Product_Model"] . '">' . $row["Product_Model"] . '</option>';
    }
    return $output;
}

function fill_product_detail($conn) {
    //$producttype=$_POST['producttypeID'];
    $output = '';
    $sql = "SELECT distinct Product_Detail from Product_Master";
    mysql_select_db('optic_db');
    $retval = mysql_query($sql, $conn);
    while ($row = mysql_fetch_array($retval)) {
        $output .= '<option value="' . $row["Product_Detail"] . '">' . $row["Product_Detail"] . '</option>';
    }
    return $output;
}

//get customer name

$get_customer_name = "select * from `customer` where Customer_ID ='$customerid'";
$get_customer_name_res = mysql_query($get_customer_name, $conn);
while ($row = mysql_fetch_array($get_customer_name_res)) {
    $customername = $row["Customer_Name"];
}

//check if submit is pressed
if (isset($_POST['submit'])) {
    $producttype = $_POST['producttype'];
    $productbrand = $_POST['productbrand'];
    $modelno = $_POST['productmodel'];
    $details = $_POST['productdetail'];
    $quantity = $_POST['quantity'];
    $customerid = $_POST['customerid'];
    $orderstatus = $_POST['orderstatus'];
    $orderdate = $_POST['orderdate'];
    $orderdt = date('Y-m-d', strtotime($orderdate));
    $deliverydate = $_POST['deliverydate'];
    $deldt = date('Y-m-d', strtotime($deliverydate));

    $comment = $_POST['comment'];

    //Get Eye number details
    $rdsph = $_POST['rdsph'];
    $rdcyl = $_POST['rdcyl'];
    $rdaxis = $_POST['rdaxis'];

    $rnsph = $_POST['rnsph'];
    $rncyl = $_POST['rncyl'];
    $rnaxis = $_POST['rnaxis'];

    $ldsph = $_POST['ldsph'];
    $ldcyl = $_POST['ldcyl'];
    $ldaxis = $_POST['ldaxis'];

    $lnsph = $_POST['lnsph'];
    $lncyl = $_POST['lncyl'];
    $lnaxis = $_POST['lnaxis'];

    //Get billing fields
    $total = $_POST['total'];
    $advance = $_POST['advance'];
    $discount = $_POST['discount'];
    $balance = $_POST['balance'];


    // To protect MySQL injection for Security purpose
    $customerid = stripslashes($customerid);
    $producttype = stripslashes($producttype);
    $productbrand = stripslashes($productbrand);
    $modelno = stripslashes($modelno);
    $details = stripslashes($details);
    $quantity = stripslashes($quantity);

    $customerid = mysql_real_escape_string($customerid);
    $producttype = mysql_real_escape_string($producttype);
    $productbrand = mysql_real_escape_string($productbrand);
    $modelno = mysql_real_escape_string($modelno);
    $details = mysql_real_escape_string($details);
    $quantity = mysql_real_escape_string($quantity);

    //look for productid			
    $sql = "SELECT COUNT(*) as total FROM product_master WHERE Product_Type='$producttype' and Product_Model='$modelno' and Product_Brand = '$productbrand' and Product_Detail = '$details'";
    mysql_select_db('optic_db');
    $check_qry = mysql_query($sql, $conn);
    if (!$check_qry) {
        die('Could not enter data: ' . mysql_error());
    }
    while ($check_row = mysql_fetch_array($check_qry)) {
        $check_output = $check_row["total"];
    }
    echo 'Check output- total product id found ' . $check_output;

    //if matching product is found, get productid	
    if ($check_output > 0) {

        $sql2 = "SELECT Product_ID,Product_Type FROM product_master WHERE Product_Type='$producttype' and Product_Model='$modelno' and Product_Brand = '$productbrand' and Product_Detail = '$details'";
        $productid = mysql_query($sql2, $conn);
        if (!$productid) { // add this check.
            die('Invalid query: ' . mysql_error());
        }
        while ($row = mysql_fetch_array($productid)) {
            $output = $row["Product_ID"];
            $output_prd_name = $row["Product_Type"];
        }
        echo '  name of matching product ' . $output_prd_name . $output;

        //find inventory for the matching productid		
//        $searchinventory = "select * from Inventory where Product_ID = '$output'";
//        $result = mysql_query($searchinventory, $conn);
//        if (!$result) {
//            die('Invalid query: ' . mysql_error());
//        }
//        $output2 = '';
//        while ($row2 = mysql_fetch_array($result)) {
//            $output2 = $row2["Qty"];
//        }
//        echo ' qty of product found' . $output2;
//        if ($output2 > 0) {
        echo 'dude customer id is' . $customerid;
        //Insert into Order
        $insert_into_order = "INSERT INTO `optic_db`.`order` (`Order_ID`, `Customer_ID`, `Order_DT`, `Order_Bill_ID`, `Product_ID`, `Order_GL_Detail_ID`,`Order_Quantity`,`Order_Status`,`Delivery_Date`,`Comment`) VALUES (NULL, '$customerid', '$orderdt', '', '$output','','$quantity','$orderstatus','$deldt','$comment')";

        mysql_select_db('optic_db');
        $insert_into_order_res = mysql_query($insert_into_order, $conn);

        if (!$insert_into_order_res) {
            die('Could not enter data: ' . mysql_error());
        }
        echo 'Inserted into Order';
        $orderid_op = '';
        $getorderid = "SELECT MAX(Order_ID) as or1 FROM `order`";
        $getorderid_res = mysql_query($getorderid, $conn);
        if (!$getorderid_res) {
            die('Could not enter data: ' . mysql_error());
        }
        while ($orderid = mysql_fetch_array($getorderid_res)) {
            //current Order ID
            $orderid_op = $orderid["or1"];
        }
        echo '  Last order ID fetched.';
        //Insert into Order GL detail
        $insert_into_gl_detail = "INSERT INTO `optic_db`.`order_gl_detail` (`Order_GL_Detail_ID`, `Order_ID`, `gl_re_dist_sph`, `gl_re_dist_cyl`, `gl_re_dist_axis`, `gl_re_near_sph`, `gl_re_near_cyl`, `gl_re_near_axis`, `gl_le_dist_sph`, `gl_le_dist_cyl`, `gl_le_dist_axis`, `gl_le_near_sph`, `gl_le_near_cyl`, `gl_le_near_axis`) VALUES (NULL, '$orderid_op', '$rdsph', '$rdcyl', '$rdaxis', '$rnsph', '$rncyl', '$rnaxis', '$ldsph', '$ldcyl', '$ldaxis', '$lnsph', '$lncyl', '$lnaxis')";

        $insert_into_GL_res = mysql_query($insert_into_gl_detail, $conn);

        if (!$insert_into_GL_res) {
            die('Could not enter data: ' . mysql_error());
        }
        echo 'GL updated';
        //Get latest GL Detail ID
        $order_gl = '';
        $getglid = "SELECT max(Order_GL_Detail_ID) as gl1 FROM `order_gl_detail`";
        $getglid_res = mysql_query($getglid, $conn);
        if (!$getglid_res) {
            die('Could not enter data: ' . mysql_error());
        }
        while ($glid = mysql_fetch_array($getglid_res)) {
            //current Order ID
            $order_gl = $glid["gl1"];
        }
        //Insert GL ID into Order ID
        $reinsert_gl_into_order = "UPDATE `optic_db`.`order` SET `Order_GL_Detail_ID` = '$order_gl' WHERE `order`.`Order_ID` = $orderid_op";

        $reinsert_gl_into_order_res = mysql_query($reinsert_gl_into_order, $conn);

        if (!$reinsert_gl_into_order_res) {
            die('Could not enter data: ' . mysql_error());
        }
        echo 'GL ID back to Order';
        //End Insert GL ID into Order ID
        //Insert into Billing

        $insert_bill = "INSERT INTO `optic_db`.`order_billing` (`Order_Bill_ID`, `Order_Bill_Date`, `Order_Bill_Total`, `Order_Bill_Advance`, `Order_Bill_Balance`, `Order_Discount`, `Order_Id`) VALUES (NULL, NULL, '$total', '$advance', '$balance', '$discount', '$orderid_op')";

        $insert_bill_res = mysql_query($insert_bill, $conn);

        if (!$insert_bill_res) {
            die('Could not enter data: ' . mysql_error());
        }
        //Get latest Bill ID
        $order_bill = '';
        $getbillid = "SELECT max(Order_Bill_ID) as bl1 FROM order_billing";
        $getbillid_res = mysql_query($getbillid, $conn);
        if (!$getbillid_res) {
            die('Could not enter data: ' . mysql_error());
        }
        while ($blid = mysql_fetch_array($getbillid_res)) {
            //current Order ID
            $order_bill = $blid["bl1"];
        }
        echo 'Billing inserted';

        //Insert GL ID into Order ID
        $reinsert_bill_into_order = "UPDATE `optic_db`.`order` SET `Order_Bill_ID` = '$order_bill' WHERE `order`.`Order_ID` = $orderid_op";

        $reinsert_bill_into_order_res = mysql_query($reinsert_bill_into_order, $conn);

        if (!$reinsert_bill_into_order_res) {
            die('Could not enter data: ' . mysql_error());
        }
        echo 'Billing updated in order';
        //End Insert into Billing
        //Reduce stock logic
//            $updateinventory = "UPDATE `optic_db`.`inventory` SET `Qty` = `Qty`- '$quantity' WHERE `inventory`.`Product_ID` = '$output'";
//            $updateinventory_res = mysql_query($updateinventory, $conn);
//            if (!$updateinventory_res) {
//                die('Could not enter data: ' . mysql_error());
//            }
        echo '<script language="javascript">';
        echo 'alert("Super! Order successfully added! \nRedirecting you to check orders page.")';

        echo 'windows.location = "customer_order_view.php"';
        echo '</script>';
        header("Location: customer_order_view.php");
        //End stock
//        } else {
//            echo '<script language="javascript">';
//            echo 'alert("Sorry, Item not available in inventory! \n\nTry to add inventory for the product or select other product.")';
//            echo '</script>';
//            
    } else {
        echo '<script language="javascript">';
        echo 'alert("The product you are looking for does not exist. \n\nPlease select correct combination of product.")';
        echo '</script>';
    }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>New Order - Ambaji Optics</title>
        <!-- Tell the browser to be responsive to screen width -->
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
        <!-- Bootstrap 3.3.6 -->
        <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
        <!-- Ionicons -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
        <!-- Theme style -->
        <link rel="stylesheet" href="dist/css/AdminLTE.min.css">
        <!-- Select2 -->
        <link rel="stylesheet" href="plugins/select2/select2.min.css">
        <!-- AdminLTE Skins. Choose a skin from the css/skins
             folder instead of downloading all of them to reduce the load. -->
        <link rel="stylesheet" href="dist/css/skins/_all-skins.min.css">
        <!-- bootstrap datepicker -->
        <link rel="stylesheet" href="plugins/datepicker/datepicker3.css">

    </head>
    <!-- ADD THE CLASS fixed TO GET A FIXED HEADER AND SIDEBAR LAYOUT -->
    <!-- the fixed layout is not compatible with sidebar-mini -->
    <body class="hold-transition skin-blue-light fixed sidebar-mini">
        <!-- Site wrapper -->
        <div class="wrapper">

            <header class="main-header">
                <!-- Logo -->
                <a href="#" class="logo">
                    <!-- mini logo for sidebar mini 50x50 pixels -->
                    <span class="logo-mini"><b>A</b>LT</span>
                    <!-- logo for regular state and mobile devices -->
                    <span class="logo-lg"><b>Ambaji</b>Optics</span>
                </a>
                <!-- Header Navbar: style can be found in header.less -->
                <nav class="navbar navbar-static-top">
                    <!-- Sidebar toggle button-->
                    <!--<a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                    </a>-->

                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">
                            <!-- Messages: style can be found in dropdown.less-->



                            <!-- User Account: style can be found in dropdown.less -->

                            <!-- Control Sidebar Toggle Button -->
                            <li>
                                <a href="dashboard.php" >Dashboard</a>
                            </li>
                            <li>
                                <a href="logout.php" >Logout</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <!-- =============================================== -->

            <!-- Left side column. contains the sidebar -->
            <aside class="main-sidebar">
                <!-- sidebar: style can be found in sidebar.less -->
                <section class="sidebar">
                    <ul class="sidebar-menu">
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-user"></i>
                                <span>CUSTOMER</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu menu-open" style="display: block;">                            
                                <li class="treeview">
                                    <a href="new_customer.php">
                                        <i class="fa fa-circle-o text-green"  ></i>New Customer</a>
                                </li>
                                <li class="treeview">
                                    <a href="show_customers.php"><i class="fa fa-circle-o text-green"></i>Search Customers</a>
                                </li>
                                <ul class="sidebar-menu>
                                    <li class="treeview active">
                                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <a href="javascript:window.location.href=window.location.href"><i class="fa fa-caret-right text-green"></i>  New Order</a>
                                    </li>
                                </ul>

                                <li class="treeview">
                                    <a href="customer_order_view.php"><i class="fa fa-circle-o text-green"></i>Search Orders</a>
                                </li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-plus-circle"></i>   
                                <span>SUPPLIER</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu menu-open" style="display: block;">
                                <li class="treeview">
                                    <a href="new_product.php"><i class="fa fa-circle-o text-blue"></i> <span>New Product</span></a></li>
                                <li class="treeview">
                                    <a href="view_products.php"><i class="fa fa-circle-o text-blue"></i> <span>Search Products</span></a></li>
                                <li class="treeview">
                                    <a href="new_supplier.php"><i class="fa fa-circle-o text-blue"></i> <span>New Supplier</span></a></li>
                                <li class="treeview">
                                    <a href="show_suppliers.php"><i class="fa fa-circle-o text-blue"></i> <span>Search Suppliers</span></li>
                                <li class="treeview">
                                    <a href="supplier_purchase_view.php"><i class="fa fa-circle-o text-blue"></i> <span>Supplier Purchase</span></li>
                                <li class="treeview">
                                    <a href="show_inventory.php"><i class="fa fa-circle-o text-blue"></i> <span>View Inventory</span></a></li>
                            </ul>
                        </li>
                        </li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-newspaper-o"></i>
                                <span>REPORTS</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu menu-open" style="display: block;">
                                <li class="treeview">
                                    <a href="show_outstanding_suppliers.php"><i class="fa fa-circle-o text-orange"></i> <span>Supplier's Outstanding</span></a>
                                </li>
                                <li class="treeview">
                                    <a href="customer_balance_orders.php"><i class="fa fa-circle-o text-orange"></i> <span>Balance Customers</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </section>
                <!-- /.sidebar -->
            </aside>

            <!-- =============================================== -->

            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <!-- Content Header (Page header) -->
                <section class="content-header">
                    <h1>
                        Order 
                        <small>Add New Order</small>
                    </h1>
                    <ol class="breadcrumb">
                      <!--<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
                      <li><a href="#">Layout</a></li>
                      <li class="active">Fixed</li>-->
                    </ol>
                </section>

                <!-- Main content -->
                <section class="content">
                    <div class="box-body">

                        <div class="col-md-8">
                            <div class="box box-primary">
                                <div class="box-header with-border">
                                    <h3 class="box-title">New Order</h3>
                                </div>
                                <!-- /.box-header -->
                                <!-- form start -->
                                <form role="form" action="new_order.php" method="post" id="main" autocomplete="off">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label>Customer ID</label>
                                            <input type="text" class="form-control" id="customerid" name="customerid" value="<?php echo $customerid ?>">
                                        </div>
                                        <div class="form-group">
                                            <label>Customer Name</label>
                                            <input type="text" class="form-control" id="customername" name="customername" value="<?php echo $customername ?>">
                                        </div>

                                        <div class="form-group">
                                            <label>Product Type</label>
                                            <select class="form-control select2" id="producttype" name="producttype">
                                                <option value="">Select Product Type</option>
                                                <?php echo fill_product_type($conn); ?>	
                                            </select>
                                        </div>
                                        <div class="product-brand">
                                            <label>Product Brand</label>
                                            <select class="form-control select2" id="productbrand" name="productbrand">
                                                <option value="">Select Brand</option>
                                                <?php echo fill_product_brand($conn); ?>	
                                            </select>
                                        </div>
                                        <div class="product-model">
                                            <label>Product Model</label>
                                            <select class="form-control select2" id="productmodel" name="productmodel">
                                                <option value="">Select Model</option>
                                                <?php echo fill_product_model($conn); ?>
                                            </select>
                                        </div>
                                        <div class="product-detail">
                                            <label>Details</label>
                                            <select class="form-control select2" id="productdetail" name="productdetail">
                                                <option value="">Product Detail</option>
                                                <?php echo fill_product_detail($conn); ?>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Quantity</label>
                                            <input type="text" class="form-control" id="quantity" name="quantity" placeholder="Quantity">
                                        </div>
                                        <div class="form-group">
                                            <label>Order Status</label>
                                            <select class="form-control select2" id="orderstatus" name="orderstatus">
                                                <option value="">Select Order status</option>
                                                <option value="Active">Active</option>
                                                <option value="Fulfilled">Fulfilled</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Order Date</label><sup>(DD-MM-YYY)</sup>
<!--                                            <div class="input-group date">
                                                <div class="input-group-addon">
                                                    <i class="fa fa-calendar"></i>
                                                </div>-->
                                                <input type="text" class="form-control pull-right" id="orderdate" name="orderdate" >
<!--                                            </div>-->
                                        </div>
                                        <div class="form-group">
                                            <label>Delivery Date</label> <sup>(DD-MM-YYY)</sup>
<!--                                            <div class="input-group date">
                                                <div class="input-group-addon">
                                                    <i class="fa fa-calendar"></i>
                                                </div>-->
                                                <input type="text" class="form-control pull-right" id="deliverydate" name="deliverydate">
<!--                                            </div>-->
                                        </div>
                                        <div class="form-group">
                                            <label>Comment</label>
                                            <input type="text" class="form-control" id="comment" name="comment" placeholder="Any specific comment related to the order">
                                        </div>


                                    </div>
                                    <hr>
                                    <div class="box-body">
                                        <strong>Number details</strong> (*Leave Blank if not required)
                                        <hr>
                                        <div class="form-group">
                                            <table class="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <th style='text-align:center' colspan="4" >Right Eye</th>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td style='text-align:center'>SPH</td>
                                                        <td style='text-align:center'>CYL</td>
                                                        <td style='text-align:center'>Axis</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dist.</td>
                                                        <td><input type="text" class="form-control" id="rdsph" name="rdsph"></td>
                                                        <td><input type="text" class="form-control" id="rdcyl" name="rdcyl"></td>
                                                        <td><input type="text" class="form-control" id="rdaxis" name="rdaxis"></td>	
                                                    </tr>
                                                    <tr>
                                                        <td>Near</td>
                                                        <td><input type="text" class="form-control" id="rnsph" name="rnsph"></td>
                                                        <td><input type="text" class="form-control" id="rncyl" name="rncyl"></td>
                                                        <td><input type="text" class="form-control" id="rnaxis" name="rnaxis"></td>	
                                                    </tr>    
                                                </tbody>
                                            </table>

                                            <table class="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <th style='text-align:center' colspan="4" >Left Eye</th>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td style='text-align:center'>SPH</td>
                                                        <td style='text-align:center'>CYL</td>
                                                        <td style='text-align:center'>Axis</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Dist.</td>
                                                        <td><input type="text" class="form-control" id="ldsph"  name="ldsph"></td>
                                                        <td><input type="text" class="form-control" id="ldcyl"  name="ldcyl"></td>
                                                        <td><input type="text" class="form-control" id="ldaxis" name="ldaxis"></td>	
                                                    </tr>
                                                    <tr>
                                                        <td>Near</td>
                                                        <td><input type="text" class="form-control" id="lnsph" name="lnsph"></td>
                                                        <td><input type="text" class="form-control" id="lncyl" name="lncyl"></td>
                                                        <td><input type="text" class="form-control" id="lnaxis" name="lnaxis"></td>	
                                                    </tr>    
                                                </tbody>
                                            </table>


                                            <hr>
                                            <div class="box-body">
                                                <strong>Billing Details</strong>
                                                <hr>
                                                <div class="form-group">
                                                    <label>Total</label>
                                                    <input type="text" class="form-control" id="total" name="total" placeholder="Total">
                                                </div>
                                                <div class="Advance">
                                                    <label>Advance</label>
                                                    <input type="text" class="form-control" id="advance" name="advance" placeholder="Advance">
                                                </div>
                                                <div class="Discount">
                                                    <label>Discount</label>
                                                    <input type="text" class="form-control" id="discount" name="discount" placeholder="Discount" onblur='Calculate();'>
                                                </div>
                                                <div class="Balance">
                                                    <label>Balance</label>
                                                    <input type="text" class="form-control" id="balance" name="balance" placeholder="Balance">
                                                </div>
                                            </div>

                                        </div>

                                        <!-- /.box-body -->

                                        <div class="box-footer" style="text-align:center;">  
                                            <button type="submit" name="submit" class="btn btn-primary">Add New Order</button>
                                        </div>

                                </form>
                            </div>
                        </div>  
                </section>
                <!-- /.content -->
            </div>
            <!-- /.content-wrapper -->

            <!--<footer class="main-footer">
              <div class="pull-right hidden-xs">
                <b>Version</b> 2.3.6
              </div>
              <strong>Copyright &copy; 2016 <a href="#">Niraj Yadav</a>.</strong> All rights
              reserved.
            </footer>-->

            <!-- Control Sidebar -->

            <!-- /.control-sidebar -->
            <!-- Add the sidebar's background. This div must be placed
                 immediately after the control sidebar -->
            <div class="control-sidebar-bg"></div>
        </div>
        <!-- ./wrapper -->

        <!-- jQuery 2.2.3 -->
        <script src="plugins/jQuery/jquery-2.2.3.min.js"></script>
        <!-- Bootstrap 3.3.6 -->
        <script src="bootstrap/js/bootstrap.min.js"></script>
        <!-- SlimScroll -->
        <script src="plugins/slimScroll/jquery.slimscroll.min.js"></script>
        <!-- FastClick -->
        <script src="plugins/fastclick/fastclick.js"></script>
        <!-- AdminLTE App -->
        <script src="dist/js/app.min.js"></script>
        <!-- AdminLTE for demo purposes -->
        <script src="dist/js/demo.js"></script>
        <script src="plugins/datepicker/bootstrap-datepicker.js"></script>
        <script>
                                                        $(document).ready(function () {
                                                            $(".product-brand").hide();
                                                            $(".product-model").hide();
                                                            $(".product-detail").hide();

                                                            $('#producttype').on('change', function () {
                                                                var producttype_id = $(this).val();
                                                                $.ajax({
                                                                    url: "get_product_details.php",
                                                                    method: "POST",
                                                                    data: {producttype_id: producttype_id},
                                                                    success: function (data)
                                                                    {
                                                                        $('#productbrand').html(data);
                                                                        $(".product-brand").show();

                                                                    }
                                                                });


                                                            });

                                                            $('#productbrand').on('change', function () {
                                                                var productbrand_id = $(this).val();
                                                                var producttype_id2 = $('#producttype').val();
                                                                $.ajax({
                                                                    url: "get_product_details.php",
                                                                    method: "POST",
                                                                    data: {productbrand_id: productbrand_id, producttype_id2: producttype_id2},
                                                                    success: function (data)
                                                                    {
                                                                        $(".product-model").show();
                                                                        $('#productmodel').html(data);
                                                                    }

                                                                });
                                                            });

                                                            $('#productmodel').on('change', function () {
                                                                var productmodel_id = $(this).val();
                                                                var productbrand_id2 = $('#productbrand').val();
                                                                var producttype_id3 = $('#producttype').val();

                                                                $.ajax({
                                                                    url: "get_product_details.php",
                                                                    method: "POST",
                                                                    data: {productmodel_id: productmodel_id,productbrand_id2:productbrand_id2,producttype_id3:producttype_id3},
                                                                    success: function (data)
                                                                    {
                                                                        $(".product-detail").show();
                                                                        $('#productdetail').html(data);
                                                                    }

                                                                });
                                                            });
                                                        });
        </script>

<!--        <script>
            $(function () {
                //Date picker
                $('#orderdate').datepicker({
                    autoclose: true
                });
                //Date picker
                $('#deliverydate').datepicker({
                    autoclose: true
                });
            });
        </script>-->
        <script>
            function Calculate()
            {
                var total = document.getElementById('total').value;
                var advance = document.getElementById('advance').value;
                var discount = document.getElementById('discount').value;
                var balance = parseInt(total) - parseInt(advance) - parseInt(discount);
                document.getElementById('balance').value = balance;
                document.form1.submit();
            }
        </script>

    </body>
</html>
