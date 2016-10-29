<?php
include 'dbconfig.php';
if (isset($_POST['submit'])) {
    $customername = $_POST['customername'];
    $dob = $_POST['dob'];
    $gender = $_POST['gender'];
    $mobileno = $_POST['mobileno'];
    $customeraddress = $_POST['customeraddress'];
    $age = $_POST['age'];
    $comment = $_POST['comment'];
    $lastvisit = $_POST['lastvisit'];


// To protect MySQL injection for Security purpose
    $customername = stripslashes($customername);
    $dob = stripslashes($dob);
    $gender = stripslashes($gender);
    $mobileno = stripslashes($mobileno);
    $customeraddress = stripslashes($customeraddress);

    $customername = mysql_real_escape_string($customername);
    $dob = mysql_real_escape_string($dob);
    $gender = mysql_real_escape_string($gender);
    $mobileno = mysql_real_escape_string($mobileno);
    $customeraddress = mysql_real_escape_string($customeraddress);

    $sql = "INSERT INTO `optic_db`.`customer` (`Customer_ID`, `Customer_Name`, `Customer_DOB`, `Customer_Gender`, `Customer_Mobile_No`, `Customer_Address`, `Customer_Creation_DT`,`Photo_Addr`,`Last_Visit`,`Age`,`Comment`) VALUES (NULL, '$customername', '$dob', '$gender', '$mobileno','$customeraddress','','','$lastvisit','$age','$comment')";


    mysql_select_db('optic_db');
    $retval = mysql_query($sql, $conn);

    if (!$retval) {
        die('Could not enter data: ' . mysql_error());
    }

    header("Location:show_customers.php");
} 
?>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>New Customer - Ambaji Optics</title>
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

        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
       
    </head>
    <!-- ADD THE CLASS fixed TO GET A FIXED HEADER AND SIDEBAR LAYOUT -->
    <!-- the fixed layout is not compatible with sidebar-mini -->
    <body class="hold-transition skin-blue fixed sidebar-mini">
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
                            <li class="dropdown user user-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                                    <span class="hidden-xs">Ambaji Optics</span>
                                </a>

                            </li>
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
                        <li class="header">OPERATIONS</li>
                        <li class="treeview">
                            <a href="show_customers.php"><i class="fa fa-circle-o text-red"></i>Search Customers</a></li>
                        <li class="treeview active">
                            <a href="new_customer.php"><i class="fa fa-circle-o text-red"></i>Add New Customer</a>

                        </li>
                        <li class="treeview">
                            <a href="#"><i class="fa fa-circle-o text-orange"></i>New Order</a>
                        </li>
                        <li class="treeview">
                            <a href="#"><i class="fa fa-circle-o text-green"></i>Inventory</a>
                        </li>


                        <li class="header">STOCK</li>
                        <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>New Supplier</span></a></li>
                        <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Supplier Purchase</span></a></li>
                        <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Outstanding</span></a></li>
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
                        Customer 
                        <small>Add New Customer</small>
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
                                    <h3 class="box-title">New Customer</h3>
                                </div>
                                <!-- /.box-header -->
                                <!-- form start -->
                                <form role="form" action="<?php $_SERVER['PHP_SELF']?>" method="post">
                                    <div class="box-body">
                                        <div class="form-group">
                                            <label>Customer Name</label>
                                            <input type="text" class="form-control" id="customer-name" name="customername" placeholder="First Name Last Name">
                                        </div>
                                        <div class="form-group">
                                            <label>Date of Birth</label>
                                            <input type="text" class="form-control" id="c" name="dob" placeholder="DD/MM/YYYY">
                                        </div>
                                        <div class="form-group">
                                            <label>Age</label>
                                            <input type="text" class="form-control" id="c" name="age" placeholder="Age">
                                        </div>
                                        <div class="form-group">
                                            <label>Gender</label>
                                            <input type="text" class="form-control" id="customer-gender" name="gender" placeholder="Male/Female/Other">
                                        </div>
                                        <div class="form-group">
                                            <label>Mobile Number</label>
                                            <input type="text" class="form-control" id="mobile-no" name="mobileno" placeholder="Mobile Number">
                                        </div>
                                        <div class="form-group">
                                            <label>Address</label>
                                            <input type="text" class="form-control" id="customeraddress" name="customeraddress" placeholder="Address">
                                        </div>
                                        <div class="form-group">
                                            <label>Date of Last Visit</label>
                                            <input type="text" class="form-control" id="lastvisit" name="lastvisit" placeholder="DD/MM/YYYY">
                                        </div>
                                        <div class="form-group">
                                            <label>Notes</label>
                                            <input type="text" class="form-control" id="comment" name="comment" placeholder="Comment if any..">
                                        </div>

                                    </div>

                            </div>
                            <!-- /.box-body -->

                            <div class="box-footer">
                                <button type="submit" class="btn btn-default">Cancel</button>
                                <button type="submit" name="submit" class="btn btn-info pull-right">Submit</button>
                            </div>
                            </form>
                        </div>
                    </div>  
                </section>
                <!-- /.content -->
            </div>
            <!-- /.content-wrapper -->

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
                $("#txtDOB").keyup(function () {
                    if ($(this).val().length == 2) {
                        $(this).val($(this).val() + "/");
                    } else if ($(this).val().length == 5) {
                        $(this).val($(this).val() + "/");
                    }
                });
            });
        </script>

    </body>
</html>
