<?php
include 'dbconfig.php';
$prodid = $_GET['id'];


//check if user is coming from show inventory page
if ($prodid) {
    $sql = "SELECT product_master.Product_ID,product_master.Product_Type,product_master.Product_Model, product_master.Product_Brand, product_master.Product_Detail, inventory.Qty from product_master inner join inventory on product_master.Product_ID=inventory.Product_ID where product_master.Product_ID = '$prodid'";
    $result = '';
    $result = mysql_query($sql, $conn);
    while ($row = mysql_fetch_array($result)) {
        $type = $row['Product_Type'];
        $model = $row['Product_Model'];
        $brand = $row['Product_Brand'];
        $detail = $row['Product_Detail'];
        $qty = $row['Qty'];
    }
}

//update inventory
if (isset($_POST['submit'])) {
    $qty1 = $_POST['quantity'];
    $prodid = $_POST['prodid'];
    echo 'dude' . $qty1;
    echo 'product' . $prodid;

    $sql1 = "UPDATE `optic_db`.`inventory` SET `Qty` = '$qty1' WHERE `inventory`.`Product_ID` = '$prodid'";

    $result1 = mysql_query($sql1, $conn);

    if (!$result1) {
        die('Could not enter data: ' . mysql_error());
    }
    echo '<script language="javascript">';
    echo 'alert("Record successfully updated!!")';
    echo '</script>';
    header('Location: show_inventory.php');
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Update Inventory - Ambaji Optics</title>
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

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

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
                                                                 <ul class="sidebar-menu>
                                    <li class="treeview active">
                                    &nbsp;&nbsp;   <a href="javascript:window.location.href=window.location.href"><i class="fa fa-caret-right text-green"></i> &nbsp; Update Inventory</a>
                                 </li>
                                </ul>
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
                        Inventory 
                        <small>Update Inventory</small>
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
                                    <h3 class="box-title">Update Inventory</h3>
                                </div>
                                <!-- /.box-header -->
                                <!-- form start -->
                                <form role="form" action="update_inventory.php" method="post" id="main" autocomplete="off">
                                    <div class="box-body">


                                        <div class="form-group">
                                            <label>Product Type</label>
                                            <select class="form-control select2" id="producttype" name="producttype">
                                                <option value="<?php echo $type; ?>" selected><?php echo $type; ?></option>

                                            </select>
                                        </div>
                                        <div class="product-brand">
                                            <label>Product Brand</label>
                                            <select class="form-control select2" id="productbrand" name="productbrand">
                                                <option value="<?php echo $brand; ?>" selected><?php echo $brand; ?></option>   	
                                            </select>
                                        </div>
                                        <div class="product-model">
                                            <label>Product Model</label>
                                            <select class="form-control select2" id="productmodel" name="productmodel">
                                                <option value="<?php echo $model; ?>" selected><?php echo $model; ?></option>
                                            </select>
                                        </div>
                                        <div class="product-detail">
                                            <label>Details</label>
                                            <select class="form-control select2" id="productdetail" name="productdetail">
                                                <option value="<?php echo $detail; ?>" selected><?php echo $detail; ?></option> 
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <input type="hidden" name="prodid" value="<?php echo $prodid; ?>">
                                            <label>Quantity</label>
                                            <input type="text" class="form-control" id="quantity" name="quantity" value="<?php echo $qty; ?>">
                                        </div>

                                    </div>


                            </div>

                            <!-- /.box-body -->

                             <div class="box-footer" style="text-align:center;">  
                                <button type="submit" name="submit" class="btn btn-primary">Update Inventory</button>
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
            $(function () {
                //Initialize Select2 Elements
                $(".select2").select2();
                //iCheck for checkbox and radio inputs
                $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
                    checkboxClass: 'icheckbox_minimal-blue',
                    radioClass: 'iradio_minimal-blue'
                });
            });
        </script>


    </body>
</html>
