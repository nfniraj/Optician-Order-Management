<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Ambaji Optics | Log in</title>
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
  <!-- iCheck -->
  <link rel="stylesheet" href="plugins/iCheck/square/blue.css">
</head>
<body class="hold-transition login-page">
<div class="login-box">
  <div class="login-logo">
    <b>Ambaji</b>Optics
  </div>
  <!-- /.login-logo -->
  <div class="login-box-body">
    <p class="login-box-msg">Login</p>

    <form action="login.php" method="post">
      <div class="form-group has-feedback">
        <input type="text" class="form-control" name="username" placeholder="Username">
        <!--<span class="glyphicon glyphicon-envelope form-control-feedback"></span>-->
      </div>
      <div class="form-group has-feedback">
        <input type="password" class="form-control" name="password" placeholder="Password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
<?php
include('dbconfig.php'); // Includes Login Script
session_start(); // Starting Session

	if (isset($_POST['submit'])) {
		if (empty($_POST['username']) || empty($_POST['password'])) {
		?>
				 <div class="form-group has-feedback" align="center">
				 
				<?php
				echo "   Invalid Username or Password. Please try again!";	
					?></div><?php
		}
	else
	{
			$username=$_POST['username'];
			$password=$_POST['password'];
			$username = stripslashes($username);
			$password = stripslashes($password);
			$username = mysql_real_escape_string($username);
			$password = mysql_real_escape_string($password);
			
			$query = mysql_query("select * from login where password='$password' AND Username='$username'", $conn);
			$rows = mysql_num_rows($query);
			if ($rows == 1) {
			$_SESSION['login']=$username; // Initializing Session
			echo '<script type="text/javascript"> window.open("dashboard.php","_self");</script>'; // Redirecting To Other Page
			} else {
				?>
				 <div class="form-group has-feedback" align="center">
				 
				<?php
				echo "   Invalid Username or Password. Please try again!";	
					?></div><?php
				}
			}
	}

?>

      <div class="row">
	  <button type="submit" name="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
  
        </div>
        <!-- /.col -->
       
        <!-- /.col -->
      </div>
    </form>

   

    <!--<a href="#">I forgot my password</a><br>-->

  </div>
  <!-- /.login-box-body -->
</div>
<!-- /.login-box -->

<!-- jQuery 2.2.3 -->
<script src="../../plugins/jQuery/jquery-2.2.3.min.js"></script>
<!-- Bootstrap 3.3.6 -->
<script src="../../bootstrap/js/bootstrap.min.js"></script>
<!-- iCheck -->
<script src="../../plugins/iCheck/icheck.min.js"></script>
<script>
  $(function () {
    $('input').iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%' // optional
    });
  });
</script>
</body>
</html>
