<?php
include 'dbconfig.php';
$orderid = $_GET['id'];
//$orderid = 15;

if(isset($_POST['submit']))
	{
		$customerid=$_POST['customerid'];
		$prtype=$_POST['producttype'];
		$prbrand=$_POST['productbrand'];
		$prmodel=$_POST['productmodel'];
		$prdetail=$_POST['details'];
		$orderqty=$_POST['quantity'];

		//Get Eye number details
		$rdsph=$_POST['rdsph'];
		$rdcyl=$_POST['rdcyl'];
		$rdaxis=$_POST['rdaxis'];

		$rnsph=$_POST['rnsph'];
		$rncyl=$_POST['rncyl'];
		$rnaxis=$_POST['rnaxis'];

		$ldsph=$_POST['ldsph'];
		$ldcyl=$_POST['ldcyl'];
		$ldaxis=$_POST['ldaxis'];

		$lnsph=$_POST['lnsph'];
		$lncyl=$_POST['lncyl'];
		$lnaxis=$_POST['lnaxis'];

		//Get billing fields
		$total=$_POST['total'];
		$advance=$_POST['advance'];
		$discount=$_POST['discount'];
		$balance=$_POST['balance'];


		// To protect MySQL injection for Security purpose
		$customerid=stripslashes($customerid);
		$prtype=stripslashes($prtype);
		$prbrand = stripslashes($prbrand);
		$prmodel = stripslashes($prmodel);
		$prdetail = stripslashes($prdetail);
		$orderqty = stripslashes($orderqty);

		$customerid=mysql_real_escape_string($customerid);
		$prtype=mysql_real_escape_string($prtype);
		$prbrand = mysql_real_escape_string($prbrand);
		$prmodel = mysql_real_escape_string($prmodel);
		$prdetail = mysql_real_escape_string($prdetail);
		$orderqty = mysql_real_escape_string($orderqty);
		
		//look for productid			
		$sql = "SELECT COUNT(*) as total FROM product_master WHERE Product_Type='$prtype' and Product_Model='$prmodel' and Product_Brand = '$prbrand' and Product_Detail = '$prdetail'";
		mysql_select_db('optic_db');
		$check_qry = mysql_query( $sql, $conn );
		if(! $check_qry ) {
					   die('Could not enter data: ' . mysql_error());
					}
		while ($check_row = mysql_fetch_array($check_qry))
					{
						$check_output = $check_row["total"];
					}
		echo 'Check output- total product id found '. $check_output ;
		
	//if matching product is found, get productid	
if( $check_output > 0){

		$sql2 = "SELECT Product_ID,Product_Type FROM product_master WHERE Product_Type='$prtype' and Product_Model='$prmodel' and Product_Brand = '$prbrand' and Product_Detail = '$prdetail'";
		$productid = mysql_query($sql2, $conn);
		if (!$productid) { // add this check.
			die('Invalid query: ' . mysql_error());
		}
		while ($row = mysql_fetch_array($productid))
			{
				$output = $row["Product_ID"];
				$output_prd_name = $row["Product_Type"];
			}
		echo '  name of matching product ' . $output_prd_name. $output;
		
	//find inventory for the matching productid		
	$searchinventory = "select * from Inventory where Product_ID = '$output'";
	$result = mysql_query( $searchinventory, $conn );
	 if(! $result ) {
		   die('Invalid query: ' . mysql_error());
		}
	$output2 ='';
	while ($row2 = mysql_fetch_array($result))
	{
		$output2 = $row2["Qty"];
	}
	echo ' qty of product found'.$output2;
	if( $output2 > 0){
			
		//Insert into Order
		$insert_into_order = "update `optic_db`.`order` set `Product_ID`='$output',`Order_Quantity`='$orderqty' where order_id ='$orderid' ";
		
		mysql_select_db('optic_db');
		$insert_into_order_res = mysql_query( $insert_into_order, $conn );
		
		if(! $insert_into_order_res ) {
		   die('Could not enter data: ' . mysql_error());
		}
		echo 'Order updated';
		//$orderid_op ='';
		//$getorderid = "SELECT MAX(Order_ID) as or1 FROM `order`";
		//$getorderid_res = mysql_query( $getorderid, $conn );
		//if(! $getorderid_res ) {
         //      die('Could not enter data: ' . mysql_error());
       //  }
		//while ($orderid = mysql_fetch_array($getorderid_res))
		//{
			//current Order ID
		//	$orderid_op = $orderid["or1"];
		//}
		//echo '  Last order ID fetched.';
		//Insert into Order GL detail
		$insert_into_gl_detail = "update `optic_db`.`order_gl_detail` set `gl_re_dist_sph`='$rdsph', `gl_re_dist_cyl`='$rdcyl', `gl_re_dist_axis`='$rdaxis', `gl_re_near_sph`='$rnsph', `gl_re_near_cyl`='$rncyl', `gl_re_near_axis`='$rnaxis', `gl_le_dist_sph`='$ldsph', `gl_le_dist_cyl`='$ldcyl', `gl_le_dist_axis`='$ldaxis', `gl_le_near_sph`='$lnsph', `gl_le_near_cyl`='$lncyl', `gl_le_near_axis`='$lnaxis' where Order_ID = '$orderid'";
		
		$insert_into_GL_res = mysql_query( $insert_into_gl_detail, $conn );
		
		if(! $insert_into_GL_res ) {
		   die('Could not enter data: ' . mysql_error());
		}
		echo 'GL updated';
		//Get latest GL Detail ID
		//$order_gl ='';
		//$getglid = "SELECT max(Order_GL_Detail_ID) as gl1 FROM `order_gl_detail`";
		//$getglid_res = mysql_query( $getglid, $conn );
		//if(! $getglid_res ) {
        //       die('Could not enter data: ' . mysql_error());
        // }
		//while ($glid = mysql_fetch_array($getglid_res))
		//{
		//	//current Order ID
		//	$order_gl = $glid["gl1"];
		//}
		//Insert GL ID into Order ID
		//$reinsert_gl_into_order = "UPDATE `optic_db`.`order` SET `Order_GL_Detail_ID` = '$order_gl' WHERE `order`.`Order_ID` = $orderid_op";
		
		//$reinsert_gl_into_order_res = mysql_query( $reinsert_gl_into_order, $conn );
		
		//if(! $reinsert_gl_into_order_res ) {
		 //  die('Could not enter data: ' . mysql_error());
		//}
		//echo 'GL ID back to Order';
		//End Insert GL ID into Order ID
		
		//Insert into Billing
		
		$insert_bill = "update `optic_db`.`order_billing` set `Order_Bill_Total`='$total', `Order_Bill_Advance`='$advance', `Order_Bill_Balance`='$balance', `Order_Discount`='$discount' where `Order_Id`='$orderid'";
		
		$insert_bill_res = mysql_query( $insert_bill, $conn );
		
		if(! $insert_bill_res ) {
		   die('Could not enter data: ' . mysql_error());
		}
		//Get latest Bill ID
		/*$order_bill ='';
		$getbillid = "SELECT max(Order_Bill_ID) as bl1 FROM order_billing";
		$getbillid_res = mysql_query( $getbillid, $conn );
		if(! $getbillid_res ) {
               die('Could not enter data: ' . mysql_error());
         }
		while ($blid = mysql_fetch_array($getbillid_res))
		{
			//current Order ID
			$order_bill = $blid["bl1"];
		}
		echo 'Billing inserted';
		
		//Insert GL ID into Order ID
		$reinsert_bill_into_order = "UPDATE `optic_db`.`order` SET `Order_Bill_ID` = '$order_bill' WHERE `order`.`Order_ID` = $orderid_op";
		
		$reinsert_bill_into_order_res = mysql_query( $reinsert_bill_into_order, $conn );
		
		if(! $reinsert_bill_into_order_res ) {
		   die('Could not enter data: ' . mysql_error());
		}
		echo 'Billing updated in order';
		//End Insert into Billing
		*/
		//Reduce stock logic
		$updateinventory = "UPDATE `optic_db`.`inventory` SET `Qty` = `Qty`- '$orderqty' WHERE `inventory`.`Product_ID` = '$output'";
		$updateinventory_res = mysql_query( $updateinventory, $conn );
		if(! $updateinventory_res ) {
               die('Could not enter data: ' . mysql_error());
            }
		echo 'Stock reduce';
		//End stock
	}
	else{
		echo "no stock available";	
	}
} 
else 
{
	echo 'No matching product found';         
}
		echo '<script language="javascript">';
		echo 'alert("Record successfully updated!!")';
		echo '</script>';
	}
else
	{
		//Fetch order details from order table
	$sql = "SELECT * FROM `order` where Order_ID = '$orderid'";
	$result = mysql_query($sql,$conn);
	if(! $result ) {
		   die('Could not enter data: ' . mysql_error());
		}
				while($row = mysql_fetch_array($result))
					{
						$customerid = $row['Customer_ID'];
						$productid = $row['Product_ID'];
						$billid = $row['Order_Bill_ID'];
						$glid = $row['Order_GL_Detail_ID'];
						$orderqty = $row['Order_Quantity'];
					}
		//end order details
		//fetch order details
		$billid_sql = "SELECT * FROM `order_billing` where Order_Bill_ID = '$billid'";
		$billid_sql_res = mysql_query($billid_sql,$conn);
		if(! $billid_sql_res ) {
			   die('Could not enter data: ' . mysql_error());
			}
				while($row2 = mysql_fetch_array($billid_sql_res))
					{
						$total = $row2['Order_Bill_Total'];
						$advance = $row2['Order_Bill_Advance'];
						$balance = $row2['Order_Bill_Balance'];
						$discount = $row2['Order_Discount'];
					}   
		//end order details
		
		//fetch order details
		$prid_sql = "SELECT * FROM `product_master` where product_id = '$productid'";
		$prid_sql_res = mysql_query($prid_sql,$conn);
		if(! $prid_sql_res ) {
			   die('Could not enter data: ' . mysql_error());
			}
				while($row4 = mysql_fetch_array($prid_sql_res))
					{
						$prtype = $row4['Product_Type'];
						$prmodel = $row4['Product_Model'];
						$prbrand = $row4['Product_Brand'];
						$prdetail = $row4['Product_Detail'];
					}
		//end order details
		
		//fetch gl details
		$glid_sql = "SELECT * FROM `order_gl_detail` where Order_GL_Detail_ID = '$glid'";
		$glid_sql_res = mysql_query($glid_sql,$conn);
		if(! $glid_sql_res ) {
			   die('Could not read data: ' . mysql_error());
			} 
				while($row3 = mysql_fetch_array($glid_sql_res))
					{
						$rdsph = $row3['gl_re_dist_sph'];
						$rdcyl = $row3['gl_re_dist_cyl'];
						$rdaxis = $row3['gl_re_dist_axis'];
						$rnsph = $row3['gl_re_near_sph'];
						$rncyl = $row3['gl_re_near_cyl'];
						$rnaxis = $row3['gl_re_near_axis'];
						
						$ldsph = $row3['gl_le_dist_sph'];
						$ldcyl = $row3['gl_le_dist_cyl'];
						$ldaxis = $row3['gl_le_dist_axis'];
						$lnsph = $row3['gl_le_near_sph'];
						$lncyl = $row3['gl_le_near_cyl'];
						$lnaxis = $row3['gl_le_near_axis'];
					}
		//end order details
		  
	}
function fill_product_type ($conn)		
{
	$output = '';
	$sql = "SELECT distinct Product_Type from Product_Master";
	mysql_select_db('optic_db');
	$retval = mysql_query( $sql, $conn );
	while ($row = mysql_fetch_array($retval))
		{
			$output .= '<option value="'.$row["Product_Type"].'">'.$row["Product_Type"].'</option>';
		}
		return $output;	
}	
	
function fill_product_brand ($conn)		
{
	//$producttype=$_POST['producttypeID'];
	$output = '';
	$sql = "SELECT distinct Product_Brand from Product_Master";
	mysql_select_db('optic_db');
	$retval = mysql_query( $sql, $conn );
	while ($row = mysql_fetch_array($retval))
		{
			$output .= '<option value="'.$row["Product_Brand"].'">'.$row["Product_Brand"].'</option>';
		}
		return $output;	
}
function fill_product_model ($conn)		
{
	//$producttype=$_POST['producttypeID'];
	$output = '';
	$sql = "SELECT distinct Product_Model from Product_Master";
	mysql_select_db('optic_db');
	$retval = mysql_query( $sql, $conn );
	while ($row = mysql_fetch_array($retval))
		{
			$output .= '<option value="'.$row["Product_Model"].'">'.$row["Product_Model"].'</option>';
		}
		return $output;	
}
function fill_product_detail ($conn)		
{
	//$producttype=$_POST['producttypeID'];
	$output = '';
	$sql = "SELECT distinct Product_Detail from Product_Master";
	mysql_select_db('optic_db');
	$retval = mysql_query( $sql, $conn );
	while ($row = mysql_fetch_array($retval))
		{
			$output .= '<option value="'.$row["Product_Detail"].'">'.$row["Product_Detail"].'</option>';
		}
		return $output;	
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
      
      <ul class="sidebar-menu">
        <li class="header">OPERATIONS</li>
        <li class="treeview">
		<a href="show_customers.php"><i class="fa fa-circle-o text-red"></i>Search Customers</a>
        </li>
		<li class="treeview">
		<a href="customer_order_view.php"><i class="fa fa-circle-o text-red"></i>Search Orders</a>
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
        Order 
        <small>Edit Order</small>
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
              <h3 class="box-title">Edit Order</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <form role="form" action="edit_order.php" method="post" id="main">
              <div class="box-body">
                <div class="form-group">
                  <label>Customer ID</label>
                  <input type="text" class="form-control" id="customerid" name="customerid" value="<?php echo $customerid;?>">
                </div>
				<div class="form-group">
                  <label>Product Type</label>
				  <select class="form-control select2" id="producttype" name="producttype">
				  <option selected="selected"><?php echo $prtype;?></option>
					<option value="">Select Product Type</option>
					<?php echo fill_product_type ($conn);?>	
                  </select>
                </div>
                <div class="form-group">
                  <label>Product Brand</label>
				  <select class="form-control select2" id="productbrand" name="productbrand" value="">
					<option selected="selected"><?php echo $prbrand;?></option>
						<option value="">Select Brand</option>
						<?php echo fill_product_brand ($conn);?>	
				  </select>
                </div>
				<div class="form-group">
                  <label>Product Model</label>
					<select class="form-control select2" id="productmodel" name="productmodel" value="">
					<option selected="selected"><?php echo $prmodel;?></option>
						<option value="">Select Model</option>
						<?php echo fill_product_model ($conn);?>
				  </select>
                </div>
				<div class="form-group">
                  <label>Details</label>
                  <select class="form-control select2" id="details" name="details">
				  <option selected="selected"><?php echo $prdetail;?></option>
						<option value="">Product Detail</option>
						<?php echo fill_product_detail ($conn);?>
				  </select>
                </div>
				<div class="form-group">
                  <label>Quantity</label>
                  <input type="text" class="form-control" id="quantity" name="quantity" value="<?php echo $orderqty;?>">
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
                  <td><input type="text" class="form-control" id="rdsph" name="rdsph" value="<?php echo $rdsph;?>"></td>
				 
				  <td><input type="text" class="form-control" id="rdcyl" name="rdcyl" value="<?php echo $rdcyl;?>"></td>
				  <td><input type="text" class="form-control" id="rdaxis" name="rdaxis" value="<?php echo $rdaxis;?>"></td>	
                </tr>
                <tr>
                  <td>Near</td>
				  <td><input type="text" class="form-control" id="rnsph" name="rnsph" value="<?php echo $rnsph;?>"></td>
				  <td><input type="text" class="form-control" id="rncyl" name="rncyl" value="<?php echo $rncyl;?>"></td>
				  <td><input type="text" class="form-control" id="rnaxis" name="rnaxis" value="<?php echo $rnaxis;?>"></td>	
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
                  <td><input type="text" class="form-control" id="ldsph"  name="ldsph" value="<?php echo $ldsph;?>"></td>
				  <td><input type="text" class="form-control" id="ldcyl"  name="ldcyl" value="<?php echo $ldcyl;?>"></td>
				  <td><input type="text" class="form-control" id="ldaxis" name="ldaxis" value="<?php echo $ldaxis;?>"></td>	
                </tr>
                <tr>
                  <td>Near</td>
				  <td><input type="text" class="form-control" id="lnsph" name="lnsph" value="<?php echo $lnsph;?>"></td>
				  <td><input type="text" class="form-control" id="lncyl" name="lncyl" value="<?php echo $lncyl;?>"></td>
				  <td><input type="text" class="form-control" id="lnaxis" name="lnaxis" value="<?php echo $lnaxis;?>"></td>	
                </tr>    
              </tbody>
			  </table>
		
				
				<hr>
				<div class="box-body">
				<strong>Billing Details</strong>
				<hr>
					<div class="form-group">
					  <label>Total</label>
					  <input type="text" class="form-control" id="total" name="total" value="<?php echo $total;?>">
					</div>
					<div class="Advance">
					  <label>Advance</label>
					  <input type="text" class="form-control" id="advance" name="advance" value="<?php echo $advance;?>">
					</div>
					<div class="Discount">
					  <label>Discount</label>
					  <input type="text" class="form-control" id="discount" name="discount" value="<?php echo $discount;?>">
					</div>
					<div class="Balance">
					  <label>Balance</label>
					  <input type="text" class="form-control" id="balance" name="balance" value="<?php echo $balance;?>">
					</div>
				</div>
				
              </div>
			 
              <!-- /.box-body -->

              <div class="box-footer">
			    <button type="submit" class="btn btn-default">Cancel</button>
                <button type="submit" name="submit" class="btn btn-info pull-right">Update Order Details</button>
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
	$(document).ready(function(){
		$('#producttype').change(function(){
			var producttype_id = $(this).val();
			$.ajax({
				url:"get_product_brand.php",
				method:"POST",
				data:{producttype_id:producttype_id},
				success:function(data)
				{
					$('#productbrand').html(data);
				}
				
			});
		});
		$('#productbrand').change(function(){
			var productbrand_id = $(this).val();
			$.ajax({
				url:"get_product_model.php",
				method:"POST",
				data:{productbrand_id:productbrand_id},
				success:function(data)
				{
					$('#productmodel').html(data);
				}
				
			});
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


</body>
</html>