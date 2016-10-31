<?php
//php to mysql
$orderdate = '20-04-2012';
echo 'date'.$orderdate;
$orderdt = date('Y-m-d',strtotime($orderdate));
echo $orderdt;
?>



<?php
//mysql to php
$originalDate = "2010-03-21";
$newDate = date("d-m-Y", strtotime($originalDate));
echo $newDate;
echo date("d-m-Y", time());
?>

<?php
//SELECT * FROM `order` WHERE (Order_DT) between '01' and '25'
//http://www.plus2net.com/sql_tutorial/between-date.php
//SELECT * FROM `order` where `Order_DT` BETWEEN '2016-10-30' AND '2016-10-30'
//No of orders in last 7 days
//SELECT SUM(`Order_Quantity`) as q1 FROM `order` WHERE `ORDER_DT` > DATE_SUB(NOW(), INTERVAL 7 DAY)
//Total sales last week
//SELECT sum(`order_billing`.`Order_Bill_Total`) FROM `order` join order_billing on order.Order_Bill_ID=order_billing.Order_Bill_ID WHERE `ORDER_DT` > DATE_SUB(NOW(), INTERVAL 7 DAY)
?>
<!DOCTYPE html>
<html>
<body>

<h2>Spectacular Mountain</h2>
<img src="riverscape.jpg" alt="Mountain View" style="width:304px;height:228px;">

</body>
</html>