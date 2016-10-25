<?php
include 'dbconfig.php';
if(isset($_POST['submit']))
	{
$suppliername=$_POST['suppliername'];
$mobileno=$_POST['mobileno'];
$supplieraddress=$_POST['supplieraddress'];

// To protect MySQL injection for Security purpose
$suppliername = stripslashes($suppliername);
$mobileno = stripslashes($mobileno);
$supplieraddress = stripslashes($supplieraddress);

$suppliername = mysql_real_escape_string($suppliername);
$mobileno = mysql_real_escape_string($mobileno);
$supplieraddress = mysql_real_escape_string($supplieraddress);

$sql = "INSERT INTO `optic_db`.`supplier_master` (`Supplier_ID`, `Supplier_Name`,`Supplier_Address`,`Supplier_Mobile_No` ) VALUES (NULL, '$suppliername', '$supplieraddress',$mobileno)";

               
          mysql_select_db('optic_db');
            $retval = mysql_query( $sql, $conn );
            
            if(! $retval ) {
               die('Could not enter data: ' . mysql_error());
            }
            
        echo '<script language="javascript">';
		echo 'alert("Super! New Supplier added successfully :) \nYou will be redirected to Show all suppliers page.")';
		echo '</script>';	
		
		//fetch the new supplier id to pass on to show suppliers
		$getsupid = "SELECT max(Supplier_ID) as id FROM `supplier_master`";
		$getsupid_res = mysql_query($getsupid,$conn);  
            if(! $getsupid_res ) {
               die('Could not read: ' . mysql_error());
            }
			while ($row1 = mysql_fetch_array($getsupid_res))
			{
				$supid = $row1['id'];
			}
		header("Location: show_suppliers.php?id=".$supid."");
	}	
else
	{
		echo '<script language="javascript">';
		echo 'alert("Sorry! Record insertion failed :("")';
		echo '</script>';		

	}

?>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>New Supplier - Ambaji Optics</title>
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
			<a href="new_customer.php">
			<i class="fa fa-circle-o text-purple"  ></i>Add New Customer</a>
		 </li>
		<li class="treeview active">
			<a href="show_customers.php"><i class="fa fa-circle-o text-red"></i>Search Customers</a>
        </li>
         <li class="treeview">
			<a href="new_order.php"><i class="fa fa-circle-o text-orange"></i>New Order</a>
        </li>
		 <li class="treeview">
			<a href="customer_order_view.php"><i class="fa fa-circle-o text-orange"></i>Search Order</a>
        </li>
      
        <li class="treeview active">
          <a href="#">
            <i class="fa fa-laptop"></i>
            <span>STOCK</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
        <ul class="treeview-menu menu-open" style="display: block;">
            <li>
				<a href="new_supplier.php"><i class="fa fa-circle-o text-yellow active"></i> <span>Add Supplier</span></a></li>
            <li>
				<a href="show_suppliers.php"><i class="fa fa-circle-o text-green active"></i> <span>Show Suppliers</span></li>
            <li>
				<a href="#"><i class="fa fa-circle-o text-red active"></i> <span>Add Inventory</span></a></li>
            <li>
				<a href="#"><i class="fa fa-circle-o text-purple active"></i> <span>Show Inventory</span></a></li>
            <li>
				<a href="#"><i class="fa fa-circle-o text-white active"></i> <span>Add Product</span></a></li>
            <li>
				<a href="#"><i class="fa fa-circle-o text-orange"></i> <span>Show Product</span></a></li>
          </ul>
        </li>
		</li>
		 <li class="treeview active">
          <a href="#">
            <i class="fa fa-laptop"></i>
            <span>REPORTING</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
        <ul class="treeview-menu menu-open" style="display: block;">
         	<li>
			<a href="#"><i class="fa fa-circle-o text-red"></i> <span>Supplier's Outstanding</span></a>
		</li>
		<li>
			<a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Customer with Balance</span></a>
		</li>
		<li>
			<a href="#"><i class="fa fa-circle-o text-green"></i> <span>Monthly Sales</span></a>
		</li>
		<li>
			<a href="#"><i class="fa fa-circle-o text-white"></i> <span>Top Products</span></a>
		</li>
          </ul>
        </li>
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
        Supplier 
        <small>Add New Supplier</small>
      </h1>
      <ol class="breadcrumb">
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
	<div class="box-body">
     
		<div class="col-md-8">
			<div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">New Supplier</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <form role="form" action="<?=$_SERVER['PHP_SELF'];?>" method="post">
              <div class="box-body">
                <div class="form-group">
                  <label>Supplier Name</label>
                  <input type="text" class="form-control" id="supplier-name" name="suppliername" placeholder="Supplier Name">
                </div>
				<div class="form-group">
                  <label>Mobile Number</label>
                  <input type="text" class="form-control" id="mobile-no" name="mobileno" placeholder="Mobile Number">
                </div>
				<div class="form-group">
                  <label>Address</label>
                  <input type="text" class="form-control" id="supplieraddress" name="supplieraddress" placeholder="Address">
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
</body>
</html>
