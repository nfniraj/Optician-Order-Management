<?php
	include 'dbconfig.php';
?>

<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Search Customers - Ambaji Optics</title>
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
        <li class="treeview active">
		<a href="show_customers.php"><i class="fa fa-circle-o text-red"></i>Search Customers</a>
        </li>
        <li class="treeview">
		<a href="new_customer.php"><i class="fa fa-circle-o text-purple"></i>Add New Customer</a>
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
        Customers
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
					</div>
				</div>
			
		  
		  <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <h3 class="box-title">Search results..</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
					<tr>
					  <th width="20%">Month</th>
					  <th width="20%">No of Orders</th>
					  <th width="10%">Total Billing</th>
					  <th width="15%">Major Product Sold</th>
					</tr>
                </thead>
                <tbody link="white">
				
				<?php
				
				$no_of_orders="select count(*) as count, MONTH(Order_DT) as m from `order` group by m";
				
				$total_billing="select sum(Order_Bill_Total), MONTH(Order_Bill_Date) as m from `order_billing` group by m";
					
				$no_of_orders_res = mysql_query($no_of_orders,$conn);
				$total_billing_res = mysql_query($total_billing,$conn);
				while($row = mysql_fetch_array($no_of_orders_res))
					{
						$id = $row['count'];
						
						echo "<tr>";
						echo "<td>" . $row['m'] . "</td>";
						echo "</tr>";
					}?>
					
				</tbody>	
				<tfoot>
					<tr>
					  <th width="20%">Month</th>
					  <th width="20%">No of Orders</th>
					  <th width="10%">Total Billing</th>
					  <th width="15%">Major Product Sold</th>
					</tr>
                </tfoot>
              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
		  </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
		
	
    </section>

  <div class="control-sidebar-bg"></div>

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