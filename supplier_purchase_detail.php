<?php
include 'dbconfig.php';
$suppid = $_GET['id'];
$suppid = '1';

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

//check if submit is pressed
if (isset($_POST['submit'])) {
    $producttype = $_POST['producttype'];
    $productbrand = $_POST['productbrand'];
    $modelno = $_POST['productmodel'];
    $details = $_POST['productdetail'];
    $quantity = $_POST['quantity'];
    $suppid = $_POST['suppid'];
    $dop = $_POST['dop'];
    $ppi = $_POST['ppi'];


    //Get billing fields
    $total = $_POST['total'];
    $advance = $_POST['advance'];
    $discount = $_POST['discount'];
    $balance = $_POST['balance'];


    // To protect MySQL injection for Security purpose

    $producttype = stripslashes($producttype);
    $productbrand = stripslashes($productbrand);
    $modelno = stripslashes($modelno);
    $details = stripslashes($details);
    $quantity = stripslashes($quantity);
    $dop = stripslashes($dop);

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
            $prodid = $row["Product_ID"];
            $output_prd_name = $row["Product_Type"];
        }

        //find inventory for the matching productid		
        $searchinventory = "update `inventory` set qty = qty + '$quantity' where Product_ID = '$prodid'";
        $result = mysql_query($searchinventory, $conn);
        if (!$result) {
            die('Invalid query: ' . mysql_error());
        }


        //Insert into Supplier Purchase Detail

        $supp_purhcase = "INSERT INTO `optic_db`.`supplier_purchase_detail` (`Purchase_ID`, `Supplier_ID`, `Product_ID`, `DOP`, `Qty`, `PPI`, `Total`, `Advance`, `Discount`, `Balance`) VALUES (NULL, '$suppid', '$prodid', '$dop', '$quantity', '$ppi', '$total', '$advance', '$discount', '$balance')";

        $supp_purhcase_res = mysql_query($supp_purhcase, $conn);

        if (!$supp_purhcase_res) {
            die('Could not enter data: ' . mysql_error());
        } else {

            echo '<script language="javascript">';
            echo 'alert("Purchase added for Supplier")';
            echo '</script>';
        }
    }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Supplier Purchase - Ambaji Optics</title>
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
                                <li class="treeview">
                                    <a href="new_product.php"><i class="fa fa-circle-o text-blue"></i> <span>New Product</span></a></li>
                                <li class="treeview">
                                    <a href="view_products.php"><i class="fa fa-circle-o text-blue"></i> <span>Search Products</span></a></li>
                                 <li class="treeview">
                                    <a href="new_supplier.php"><i class="fa fa-circle-o text-blue"></i> <span>New Supplier</span></a></li>
                                 <li class="treeview">
                                    <a href="show_suppliers.php"><i class="fa fa-circle-o text-blue"></i> <span>Search Suppliers</span></li>
                                                                 <ul class="sidebar-menu>
                                    <li class="treeview active">
                                    &nbsp;&nbsp;   <a href="javascript:window.location.href=window.location.href"><i class="fa fa-caret-right text-green"></i> &nbsp; Add Purchase</a>
                                 </li>
                                </ul>
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
                        Supplier Purchase 
                        <small>..</small>
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
                                    <h3 class="box-title">Add Purchase</h3>
                                </div>
                                <!-- /.box-header -->
                                <!-- form start -->
                                <form role="form" action="<?php $_SERVER['PHP_SELF'] ?>" method="post" id="main">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label>Supplier ID</label>
                                            <input type="text" class="form-control" id="suppid" name="suppid" value="<?php echo $suppid ?>">
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
                                            <label>Date of Purchase</label>
                                            <input type="text" class="form-control" id="dop" name="dop" placeholder="DD/MM/YYYY">
                                        </div>
                                        <div class="form-group">
                                            <label>Quantity</label>
                                            <input type="text" class="form-control" id="quantity" name="quantity" placeholder="Quantity">
                                        </div>



                                    </div>

                                    <div class="box-body">

                                        <hr>
                                        <div class="form-group">

                                            <div class="box-body">
                                                <strong>Billing Details</strong>
                                                <hr>
                                                <div class="form-group">
                                                    <label>Price Per Item</label>
                                                    <input type="text" class="form-control" id="ppi" name="ppi" placeholder="Price Per Item">
                                                </div>
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
                                                    <label>Outstanding</label>
                                                    <input type="text" class="form-control" id="balance" name="balance" placeholder="Balance">
                                                </div>
                                            </div>

                                        </div>

                                        <!-- /.box-body -->

                                         <div class="box-footer" style="text-align:center;">  
                                <button type="submit" name="submit" class="btn btn-primary">Add Purchase</button>
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
                                                                $.ajax({
                                                                    url: "get_product_details.php",
                                                                    method: "POST",
                                                                    data: {productbrand_id: productbrand_id},
                                                                    success: function (data)
                                                                    {
                                                                        $(".product-model").show();
                                                                        $('#productmodel').html(data);
                                                                    }

                                                                });
                                                            });

                                                            $('#productmodel').on('change', function () {
                                                                var productmodel_id = $(this).val();
                                                                $.ajax({
                                                                    url: "get_product_details.php",
                                                                    method: "POST",
                                                                    data: {productmodel_id: productmodel_id},
                                                                    success: function (data)
                                                                    {
                                                                        $(".product-detail").show();
                                                                        $('#productdetail').html(data);
                                                                    }

                                                                });
                                                            });


                                                            $("#dop").keyup(function () {
                                                                if ($(this).val().length == 2) {
                                                                    $(this).val($(this).val() + "/");
                                                                } else if ($(this).val().length == 5) {
                                                                    $(this).val($(this).val() + "/");
                                                                }
                                                            });

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
