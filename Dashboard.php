<?php
include 'dbconfig.php';
?>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Dashboard - Ambaji Optics</title>
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


                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">
                            <!-- Messages: style can be found in dropdown.less-->

                            <!-- User Account: style can be found in dropdown.less -->

                            <!-- Control Sidebar Toggle Button -->
                           
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
                                <li>
                                    <a href="new_product.php"><i class="fa fa-circle-o text-blue"></i> <span>New Product</span></a></li>
                                <li>
                                    <a href="view_products.php"><i class="fa fa-circle-o text-blue"></i> <span>Search Products</span></a></li>
                                <li>
                                    <a href="new_supplier.php"><i class="fa fa-circle-o text-blue"></i> <span>New Supplier</span></a></li>
                                <li>
                                    <a href="show_suppliers.php"><i class="fa fa-circle-o text-blue"></i> <span>Search Suppliers</span></li>
                                <li>
                                    <a href="supplier_purchase_view.php"><i class="fa fa-circle-o text-blue"></i> <span>Supplier Purchase</span></li>
                                <li>
                                    <a href="show_inventory.php"><i class="fa fa-circle-o text-blue"></i> <span>View Inventory</span></a></li>
                            </ul>
                        </li>
                        </li>
                        <li class="treeview active">
                            <a href="#">
                                <i class="fa fa-newspaper-o"></i>
                                <span>REPORTS</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu menu-open" style="display: block;">
                                <li>
                                    <a href="show_outstanding_suppliers.php"><i class="fa fa-circle-o text-orange"></i> <span>Supplier's Outstanding</span></a>
                                </li>
                                <li>
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
                        Dashboard
                        <small></small>
                    </h1>
                    <ol class="breadcrumb">

                    </ol>
                </section>

                <!-- Main content -->
                <section class="content">
                    <div class="row">
                        <div class="col-md-6 col-sm-2 col-xs-6">
                            <div class="info-box">
                                <span class="info-box-icon bg-aqua"><i class="glyphicon glyphicon-user"></i></span>

                                <div class="info-box-content">
                                    <span class="info-box-text">Hello!!</span>
                                    <br>
                                    <span class="info-box-number"><?php
                                        date_default_timezone_set('Asia/Calcutta');

                                        $Hour = date('G');

                                        if ($Hour >= 5 && $Hour <= 11) {
                                            $morning = "Have a wonderful morning :)";
                                            echo $morning;
                                        } else if ($Hour >= 12 && $Hour <= 18) {
                                            echo "Good Afternoon :)";
                                        } else if ($Hour >= 19 || $Hour <= 4) {
                                            echo "Good Evening :)";
                                        }
                                        ?><small></small></span>

                                </div>
                                <!-- /.info-box-content -->
                            </div>
                            <!-- /.info-box -->
                        </div> 
                    </div>
                    <div class="row">
                        <div class="col-md-3 col-sm-2 col-xs-6">
                            <button type="button" class="btn btn-block btn-success btn-lg" onclick="window.location.href = 'new_customer.php'">Add New Customer</button>
                        </div>
                        <div class="col-md-3 col-sm-2 col-xs-6">
                            <button type="button" class="btn btn-block btn-success btn-lg" onclick="window.location.href = 'show_customers.php'">Show All Customers</button>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <div class="col-md-3 col-sm-2 col-xs-6">
                            <button type="button" class="btn btn-block btn-primary btn-lg" onclick="window.location.href = 'new_supplier.php'">Add New Supplier</button>
                        </div>
                        <div class="col-md-3 col-sm-2 col-xs-6">
                            <button type="button" class="btn btn-block btn-primary btn-lg" onclick="window.location.href = 'show_suppliers.php'">Show All Suppliers</button>
                        </div>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-3 col-sm-2 col-xs-6">
                            <button type="button" class="btn btn-block btn-default btn-lg" onclick="window.location.href = 'customer_balance_orders.php'">See Customers with Balance due</button>
                        </div>
                        <div class="col-md-3 col-sm-2 col-xs-6">
                            <button type="button" class="btn btn-block btn-default btn-lg" onclick="window.location.href = 'show_outstanding_suppliers.php'">See outstanding Suppliers</button>
                        </div>
                    </div>
                    <hr>
                    <!--                    <div class="row">
                                            <div class="col-md-6">
                                                <div class="box">
                                                    <div class="box-header">
                                                        <h3 class="box-title">Total Sales</h3>
                    
                                                    </div>
                                                     /.box-header 
                                                    <div class="box-body no-padding">
                                                        <table class="table">
                                                            <tbody>
                                                                <tr>
                    
                                                                    <th>Last 7 days</th>
                                                                    <th>This Week</th>
                                                                    <th>This Month</th>
                                                                </tr>
                                                                <tr>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                     /.box-body 
                                                </div>
                                                 /.box 
                    
                                                 /.box 
                                            </div>
                                        </div>-->

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
        <!-- Select2 -->
        <script src="plugins/select2/select2.full.min.js"></script>
        <!-- InputMask -->
        <script src="plugins/input-mask/jquery.inputmask.js"></script>
        <script src="plugins/input-mask/jquery.inputmask.date.extensions.js"></script>
        <script src="plugins/input-mask/jquery.inputmask.extensions.js"></script>
        <script>
                                $(function () {
                                    //Initialize Select2 Elements
                                    $(".select2").select2();
                                    //Datemask dd/mm/yyyy
                                    $("#datemask").inputmask("dd/mm/yyyy", {"placeholder": "dd/mm/yyyy"});
                                    //Datemask2 mm/dd/yyyy
                                    $("#datemask2").inputmask("mm/dd/yyyy", {"placeholder": "mm/dd/yyyy"});
                                    //Money Euro
                                    $("[data-mask]").inputmask();
                                });
        </script>
    </body>
</html>
