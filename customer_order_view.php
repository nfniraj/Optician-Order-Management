<?php
	include 'dbconfig.php';
	$customerid = $_GET['id'];
	//$customerid = 1;
	
?>

<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Customer Orders - Ambaji Optics</title>
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
        <li class="treeview">
		<a href="show_customers.php"><i class="fa fa-circle-o text-red"></i>Search Customers</a>
        </li>
		<li class="treeview active">
		<a href="customer_order_view.php"><i class="fa fa-circle-o text-red"></i>Search Orders</a>
        </li>
        <li class="treeview">
		<a href="new_customer.php"><i class="fa fa-circle-o text-purple"></i>Add New Customer</a>
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
        Search 
        <small>Customers or Orders</small>
      </h1>
      <ol class="breadcrumb">
        <!--<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Layout</a></li>
        <li class="active">Fixed</li>-->
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
	<form role="form" action="<?=$_SERVER['PHP_SELF'];?>" method="post" id="main">
	<div class="box-body">
		 <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Search</h3>
            </div>
            <div class="box-body">
              <div class="row">
				<div class="col-xs-5">
                  <input type="text" class="form-control" name="customername" placeholder="Type Customer name here">
                </div>
				
                
              </div>
			
			  <div class="row">
				<div class="col-md-3">
					<div class="box-footer">
						<button type="submit" name="submit" class="btn btn-primary">Show all Orders for the Customer</button>
						</form>
					</div>
				</div>
			  </div>
            </div>
            <!-- /.box-body -->
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
					  <th width="20%">Customer Name</th>
					  <th width="10%">Order ID</th>
					  <th width="15%">	Order Type</th>
					  <th width="15%">Order  Date</th>
					  <th width="20%">Order Total</th>
					  <th width="20%">Action</th>
					</tr>
                </thead>
                <tbody link="white">
				
				<?php
				//form is empty show all customers code
				//check if submit button is pressed	
					if ((!empty($_POST['customername'])) )
						{
				//Show filtered list when form fields are filled in
				$customername = $_POST['customername'];
				
				//To protect MySQL injection for Security purpose
				$customername = stripslashes($customername);
					
				//$sql="SELECT * FROM customer WHERE Customer_Name LIKE '%" . $customername . "%' OR Customer_Mobile_No LIKE '%" . $mobileno  ."%'";
				//$sql="SELECT * FROM customer WHERE Customer_Name Like '%".$customername."%'";
					
				//$sql="SELECT * FROM order WHERE Customer_Name LIKE '%" . $customername . "%' AND Customer_Mobile_No LIKE '%" . $mobileno  ."%'";
				$sql ="SELECT * FROM `customer` inner JOIN `optic_db`.`order` ON `customer`.`Customer_ID` = `order`.`Customer_ID` WHERE customer.Customer_Name like '%" . $customername . "%'";
					}
					else
					{
						if ((!empty($_GET['id'])))
						{
							$sql ="SELECT * FROM `customer` inner JOIN `optic_db`.`order` ON `customer`.`Customer_ID` = `order`.`Customer_ID` WHERE customer.Customer_ID='$customerid'";
						}
	
					}

				
				$result ='';
				$result = mysql_query($sql,$conn);
				while($row = mysql_fetch_array($result))
					{
						$prid = $row['Product_ID'];
						$orid = $row['Order_ID'];
						//get product type from product id
						$product_id ="SELECT * FROM `product_master` inner join `optic_db`.`order` ON `product_master`.`Product_ID` = order.Product_ID where `product_master`.`product_id` = '$prid'";
						$prid_res = mysql_query($product_id,$conn);
						if(! $prid_res ) {
							   die('Could not enter data: ' . mysql_error());
							}
						while($row1 = mysql_fetch_array($prid_res))
						{
							$productid = $row1['Product_Type'];
						}
						//end get product type
						//get order total amount
						$order_id ="SELECT * FROM `order_billing` inner join `optic_db`.`order` ON `order_billing`.`Order_ID` = Order.Order_ID where `Order_billing`.`order_id` = '$orid'";
						$orid_res = mysql_query($order_id,$conn);
						if(! $orid_res ) {
							   die('Could not enter data: ' . mysql_error());
							}
						while($row2 = mysql_fetch_array($orid_res))
						{
							$orderid = $row2['Order_Bill_Total'];
						
						//end order total amount
						
						$id = $row['Order_ID'];
						echo "<tr>";
						//echo ("<td>" . '<a href="show_customers.php?id=' . $id . '">' . $row['Customer_ID'] . '</a>'. "</td>");
						echo "<td>" . $row['Customer_Name'] . "</td>";
						echo ("<td>" . '<a href="view_order.php?id=' . $id . '">' . $row['Order_ID'] . '</a>'. "</td>");
						//echo "<td>" . $row['Customer_Name'] . "</td>";
						echo "<td>" . $productid . "</td>";
						echo "<td>" . $row['Order_DT'] . "</td>";
						echo "<td>" . $orderid . "</td>"; ?>
						<td> 
							<span class="pull-l-container">
								<small class="label pull-middle bg-white">
								<?php 
									echo ('<a href="edit_order.php?id=' . $row['Order_ID'] . '">' . "Edit Orders" . '</a>'); 
								?>
								</small>
							</span>
						</td>
						</td>
						<?php
						//echo "<td>" . $row['nooforders'] . "</td>";
						echo "</tr>";
						}}?>
				</tbody>	
				<tfoot>
					<tr>
					  <th>Customer Name</th>
					  <th>Order ID</th>
					  <th>Order Type</th>
					  <th>Order  Date</th>
					  <th>Order Total</th>
					  <th>Action</th>
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