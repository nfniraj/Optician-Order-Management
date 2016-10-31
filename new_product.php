<?php
include 'dbconfig.php';
if (isset($_POST['submit'])) {
//insert into db
    $newtype = $_POST['newtype'];
    $newmodel = $_POST['newmodel'];
    $newbrand = $_POST['newbrand'];
    $newdetail = $_POST['newdetail'];

    $oldtype = $_POST['oldtype'];
    $oldmodel = $_POST['oldmodel'];
    $oldbrand = $_POST['oldbrand'];
    $olddetail = $_POST['olddetail'];

    if ($newtype != '') {
        $type = $newtype;
    } else {
        $type = $oldtype;
    }
    if ($newmodel != '') {
        $model = $newmodel;
    } else {
        $model = $oldmodel;
    }
    if ($newbrand != '') {
        $brand = $newbrand;
    } else {
        $brand = $oldbrand;
    }
    if ($newdetail != '') {
        $detail = $newdetail;
    } else {
        $detail = $olddetail;
    }

    $sql = "INSERT INTO `optic_db`.`product_master` (`Product_ID`, `Product_Type`, `Product_Model`, `Product_Brand`, `Product_Detail`) VALUES ('', '$type', '$model', '$brand', '$detail')";
    mysql_select_db('optic_db');
    $retval = mysql_query($sql, $conn);
    if (!$retval) {
        die('Could not enter data: ' . mysql_error());
    }
    header("Location:view_products.php");
}

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
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Add Product - Ambaji Optics</title>
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

                                <li class="treeview">
                                    <a href="customer_order_view.php"><i class="fa fa-circle-o text-green"></i>Search Orders</a>
                                </li>
                            </ul>
                        </li>
                        <li class="treeview active">
                            <a href="#">
                                <i class="fa fa-plus-circle"></i>   
                                <span>SUPPLIER</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu menu-open" style="display: block;">
                                <li class="treeview active">
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
                        Product 
                        <small>Add New Product</small>
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
                                <form role="form" action="new_product.php" method="post" id="main" autocomplete="off">
                                    <div class="box-body">

                                        <div class="form-group">
                                            <label>New Product Type</label>
                                            <input type="text" class="form-control select2" id="newtype" name="newtype">
                                        </div> Or choose from database<br><br/>

                                        <div class="form-group">
                                            <label>Product Type</label>
                                            <select class="form-control select2" id="oldtype" name="oldtype">
                                                <option value="">Select Product Type</option>
                                                <?php echo fill_product_type($conn); ?>	
                                            </select>
                                        </div><hr>
                                        <div class="form-group">
                                            <label>New Product Brand</label>
                                            <input type="text" class="form-control select2" id="newbrand" name="newbrand">
                                        </div> Or choose from database<br><br/>

                                        <div class="product-brand">
                                            <label>Product Brand</label>
                                            <select class="form-control select2" id="oldbrand" name="oldbrand">
                                                <option value="">Select Brand</option>
                                                <?php echo fill_product_brand($conn); ?>	
                                            </select>
                                        </div><hr>
                                        <div class="form-group">
                                            <label>New Product Model</label>
                                            <input type="text" class="form-control select2" id="newmodel" name="newmodel">
                                        </div> Or choose from database<br><br/>

                                        <div class="product-model">
                                            <label>Product Model</label>
                                            <select class="form-control select2" id="oldmodel" name="oldmodel">
                                                <option value="">Select Model</option>
                                                <?php echo fill_product_model($conn); ?>
                                            </select>
                                        </div> <hr>

                                        <div class="form-group">
                                            <label>New Product Detail</label>
                                            <input type="text" class="form-control select2" id="newdetail" name="newdetail">
                                        </div> Or choose from database<br><br/>
                                        <div class="product-detail">
                                            <label>Details</label>
                                            <select class="form-control select2" id="olddetail" name="olddetail">
                                                <option value="">Product Detail</option>
                                                <?php echo fill_product_detail($conn); ?>
                                            </select>
                                        </div>

                                    </div>
                                    <hr>
                                    <div class="box-body">



                                        <!-- /.box-body -->

                                        <div class="box-footer" style="text-align:center;">  
                                            <button type="submit" name="submit" class="btn btn-primary">Add New Product</button>
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
        <script>
            $(document).ready(function () {

            });
        </script>
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
