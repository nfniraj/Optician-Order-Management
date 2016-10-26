<?php

include 'dbconfig.php';
$output = '';

if (!$conn) {
    die('Could not connect: ' . mysql_error());
}

if (isset($_POST['producttype_id'])) {
    if ($_POST["producttype_id"] != '') {
        $sql = "SELECT distinct Product_Brand FROM Product_Master WHERE Product_Type = '" . $_POST["producttype_id"] . "'";
    } else {
        $sql = "SELECT * FROM Product_Master";
    }

    mysql_select_db('optic_db');
    $retval = mysql_query($sql, $conn);
    $output .= '<option value="">Select Product Brand</option>';

    while ($row = mysql_fetch_array($retval)) {
        $output .= '<option value="' . $row["Product_Brand"] . '">' . $row["Product_Brand"] . '</option>';
    }
    echo $output;
    if (!$retval) {
        die('Could not enter data: ' . mysql_error());
    }
}

////check for product brand
if (isset($_POST['productbrand_id'])) {
    if ($_POST["productbrand_id"] != '') {
        $sql = "SELECT distinct Product_Model FROM Product_Master WHERE Product_Brand = '" . $_POST["productbrand_id"] . "'";
    } else {
        $sql = "SELECT * FROM Product_Master";
    }

    mysql_select_db('optic_db');
    $retval = mysql_query($sql, $conn);
    $output .= '<option value="">Select Product Brand</option>';

    while ($row = mysql_fetch_array($retval)) {
        $output .= '<option value="' . $row["Product_Model"] . '">' . $row["Product_Model"] . '</option>';
    }
    echo $output;
    if (!$retval) {
        die('Could not enter data: ' . mysql_error());
    }
}

////check for product detail
if (isset($_POST['productmodel_id'])) {
    if ($_POST["productmodel_id"] != '') {
        $sql = "SELECT distinct Product_Detail FROM Product_Master WHERE Product_Model = '" . $_POST["productmodel_id"] . "'";
    } else {
        $sql = "SELECT * FROM Product_Master";
    }

    mysql_select_db('optic_db');
    $retval = mysql_query($sql, $conn);

    $output .= '<option value="">Select Product Detail</option>';

    while ($row = mysql_fetch_array($retval)) {
        $output .= '<option value="' . $row["Product_Detail"] . '">' . $row["Product_Detail"] . '</option>';
    }
    echo $output;
    if (!$retval) {
        die('Could not enter data: ' . mysql_error());
    }
}
?>