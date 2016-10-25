<?php
	include 'dbconfig.php';
	$suppid = $_GET['id'];
	//$suppid = 2;
	if(isset($_POST['submit']))
	{
		$suppname = $_POST['suppname'];
		$mobileno = $_POST['mobileno'];
		$address = $_POST['address'];

		
		$sql="UPDATE `optic_db`.`supplier_master` SET `Supplier_Name` = '$suppname', `Supplier_Address` = '$address', `Supplier_Mobile_No` = '".$mobileno."' WHERE `Supplier_ID` = '$suppid'";
			
        $result1 = mysql_query( $sql, $conn );
            
		if(! $result1 ) {
		   die('Could not enter data: ' . mysql_error());
		}
		echo '<script language="javascript">';
		echo 'alert("Record successfully updated!!")';
		echo '</script>';		
	}
	else
	{
	$sql = "select * from supplier_master where Supplier_ID = '$suppid'";
	$result = mysql_query($sql,$conn);
				while($row = mysql_fetch_array($result))
					{
						$suppname = $row['Supplier_Name'];
						$mobileno = $row['Supplier_Mobile_No'];
						$address = $dob = $row['Supplier_Address'];
					}
	}
?>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Ambaji Optics</title>
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

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->
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
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">Ambaji Optics</span>
            </a>
           
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="#" >Logout</a>
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
      <!-- Sidebar user panel -->
      <!--<div class="user-panel">
        <div class="pull-left image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>-->
      <!-- search form -->
      <!--<form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>-->
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">ORDERS</li>
        <li class="treeview active">
		<a href="index.html"><i class="fa fa-circle-o text-red"></i>Add New Customer</a>
          <!--<a href="#">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><a href="index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
            <li><a href="index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
          </ul>-->
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
        Supplier
        <small>Edit Supplier</small>
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
              <h3 class="box-title">Edit Supplier</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <form role="form" action="edit_supplier.php" method="post">
              <div class="box-body">
                <div class="form-group">
                  <label>Supplier Name</label>
                  <input type="text" class="form-control" id="customer-name" name="suppname" value="<?php echo $suppname;?>">
                </div>
				<div class="form-group">
                  <label>Mobile Number</label>
                  <input type="text" class="form-control" id="mobileno" name="mobileno" value="<?php echo $mobileno;?>">
                </div>
				<div class="form-group">
                  <label>Address</label>
                  <input type="text" class="form-control" id="address" name="address" value="<?php echo $address;?>">
                </div>
                </div>
				
              </div>
              <!-- /.box-body -->

              <div class="box-footer">
			    <!--<button type="submit" class="btn btn-default">Cancel</button>-->
                <button type="submit" name="submit" class="btn btn-info">Update Customer Record</button>

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
</body>
</html>
