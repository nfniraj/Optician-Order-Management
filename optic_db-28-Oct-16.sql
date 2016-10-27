-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2016 at 10:23 PM
-- Server version: 5.6.26
-- PHP Version: 5.5.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `optic_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `Customer_ID` int(11) NOT NULL,
  `Customer_Name` varchar(150) NOT NULL,
  `Customer_DOB` varchar(50) NOT NULL,
  `Customer_Gender` varchar(40) NOT NULL,
  `Customer_Mobile_No` int(20) NOT NULL,
  `Customer_Address` varchar(300) NOT NULL,
  `Customer_Creation_DT` datetime(6) NOT NULL,
  `Photo_Addr` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`Customer_ID`, `Customer_Name`, `Customer_DOB`, `Customer_Gender`, `Customer_Mobile_No`, `Customer_Address`, `Customer_Creation_DT`, `Photo_Addr`) VALUES
(1, 'Niraj Yogendra Yadav', '24/01/1991', 'Male+', 2147483647, 'b-106, bharat apt, kasturi park, navghar road, bhayandar east.', '2016-09-05 17:16:09.071458', ''),
(2, 'Ranjit', '21/01/1990', 'Male', 2147483647, 'b-106, bharat apt, kasturi park, navghar road, bhayandar east.', '2016-10-04 22:57:49.465735', ''),
(4, 'Yogendra yadav', '24/01/1990', 'Male', 2147483647, 'Bharat Apt, Kasturi park, Navghar Road, Bhayandar East', '0000-00-00 00:00:00.000000', ''),
(5, 'Manorma yadav', '25/02/2066', 'Female', 2147483647, 'Bharat Apt, Kasturi park, Navghar Road, Bhayandar East', '0000-00-00 00:00:00.000000', ''),
(6, 'Reena Yog Yadav', '25/25/25056', 'Female', 5566554, 'Bharat Apt, Kasturi park, Navghar Road, Bhayandar East', '2016-10-22 00:00:00.000000', ''),
(7, 'Khatri', '24/01/1991', 'Male', 56665, 'dsdfdsdfsf', '0000-00-00 00:00:00.000000', ''),
(8, 'Suryavanshi', '56/04/2015', 'Female', 0, 'sdfsfdsf', '0000-00-00 00:00:00.000000', '');

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

CREATE TABLE IF NOT EXISTS `inventory` (
  `Inventory_ID` int(11) NOT NULL,
  `Product_ID` int(11) NOT NULL,
  `Qty` int(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`Inventory_ID`, `Product_ID`, `Qty`) VALUES
(1, 1, 4),
(2, 9, 627),
(3, 30, 21),
(4, 31, 21),
(5, 27, 1),
(6, 10, 19),
(7, 11, 48);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE IF NOT EXISTS `login` (
  `Username` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`Username`, `Password`) VALUES
('admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE IF NOT EXISTS `order` (
  `Order_ID` int(11) NOT NULL,
  `Customer_ID` int(10) NOT NULL,
  `Order_DT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Order_Bill_ID` int(10) NOT NULL,
  `Product_ID` int(10) NOT NULL,
  `Order_GL_Detail_ID` int(10) NOT NULL,
  `Order_Quantity` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_billing`
--

CREATE TABLE IF NOT EXISTS `order_billing` (
  `Order_Bill_ID` int(11) NOT NULL,
  `Order_Bill_Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Order_Bill_Total` int(10) NOT NULL,
  `Order_Bill_Advance` int(10) NOT NULL,
  `Order_Bill_Balance` int(10) NOT NULL,
  `Order_Discount` int(10) NOT NULL,
  `Order_ID` int(10) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_gl_detail`
--

CREATE TABLE IF NOT EXISTS `order_gl_detail` (
  `Order_GL_Detail_ID` int(11) NOT NULL,
  `Order_ID` int(5) NOT NULL,
  `gl_re_dist_sph` float NOT NULL,
  `gl_re_dist_cyl` float NOT NULL,
  `gl_re_dist_axis` float NOT NULL,
  `gl_re_near_sph` float NOT NULL,
  `gl_re_near_cyl` float NOT NULL,
  `gl_re_near_axis` float NOT NULL,
  `gl_le_dist_sph` float NOT NULL,
  `gl_le_dist_cyl` float NOT NULL,
  `gl_le_dist_axis` float NOT NULL,
  `gl_le_near_sph` float NOT NULL,
  `gl_le_near_cyl` float NOT NULL,
  `gl_le_near_axis` float NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_master`
--

CREATE TABLE IF NOT EXISTS `product_master` (
  `Product_ID` int(5) NOT NULL,
  `Product_Type` varchar(100) NOT NULL,
  `Product_Model` varchar(200) NOT NULL,
  `Product_Brand` varchar(200) NOT NULL,
  `Product_Detail` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_master`
--

INSERT INTO `product_master` (`Product_ID`, `Product_Type`, `Product_Model`, `Product_Brand`, `Product_Detail`) VALUES
(38, 'asdfasf', 'Frameless', 'dasdf', 'sdfasfd'),
(37, 'Contact Lens', 'Carl Zeiss', 'Bosch', 'Yellow color'),
(9, 'Contact Lens', 'Silicon', 'Bosch and Laumbs', 'green color'),
(8, 'Frame', 'Frameless', 'Bosch', 'Yellow color'),
(1, 'Glass', 'Carl Zeiss', 'Carl Zeiss', 'Coated 1'),
(11, 'Solution', '30 days', 'LT', '200ml'),
(10, 'Sunglass', 'Aviator', 'Ray Ban', 'Silver frame'),
(33, 'Sunglass', 'Frameless', 'LT', 'Coated 1'),
(27, 'Sunglass', 'Frameless', 'LT', 'green color');

-- --------------------------------------------------------

--
-- Table structure for table `supplier_master`
--

CREATE TABLE IF NOT EXISTS `supplier_master` (
  `Supplier_ID` int(11) NOT NULL,
  `Supplier_Name` varchar(100) NOT NULL,
  `Supplier_Address` varchar(200) NOT NULL,
  `Supplier_Mobile_No` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supplier_master`
--

INSERT INTO `supplier_master` (`Supplier_ID`, `Supplier_Name`, `Supplier_Address`, `Supplier_Mobile_No`) VALUES
(1, 'Manoj Glasses', 'Kasturi Park', ''),
(2, 'Niraj yadav', 'Rajesh APt, B/106, Chandrsh Nagar,, RNP Park, Rahul Park, Bhayandar East, Thane', ''),
(3, 'Suresh Contact Lenses', 'Rajesh APt, B/106, Chandrsh Nagar,, RNP Park, Rahul Park, Bhayandar East, Thane', ''),
(4, 'Suresh Contact Lenses', 'Rajesh APt, B/106, Chandrsh Nagar,, RNP Park, Rahul Park, Bhayandar East, Thane', ''),
(5, 'Suresh Contact Lenses', 'Rajesh APt, B/106, Chandrsh Nagar,, RNP Park, Rahul Park, Bhayandar East, Thane', ''),
(6, 'self', 'self', ''),
(7, 'Transact ABC', 'Rahul Park, Bhayandar East', '9987106507'),
(8, 'The salami', 'Kasturi Park', '998756544'),
(9, 'Grand Master', 'Rahul Park', '8655847487'),
(10, 'Grand Master', 'Rahul Park', '8655847487'),
(11, 'Grand Master', 'Rahul Park', '8655847487'),
(12, 'Grand Master', 'Rahul Park', '8655847487');

-- --------------------------------------------------------

--
-- Table structure for table `supplier_purchase_detail`
--

CREATE TABLE IF NOT EXISTS `supplier_purchase_detail` (
  `Purchase_ID` int(11) NOT NULL,
  `Supplier_ID` int(5) NOT NULL,
  `Product_ID` int(5) NOT NULL,
  `DOP` varchar(20) NOT NULL,
  `Qty` int(5) NOT NULL,
  `PPI` int(5) NOT NULL,
  `Total` int(5) NOT NULL,
  `Advance` int(5) NOT NULL,
  `Discount` int(5) NOT NULL,
  `Balance` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `supplier_purchase_detail`
--

INSERT INTO `supplier_purchase_detail` (`Purchase_ID`, `Supplier_ID`, `Product_ID`, `DOP`, `Qty`, `PPI`, `Total`, `Advance`, `Discount`, `Balance`) VALUES
(1, 1, 1, '2016-10-03', 1, 2, 2, 2, 2, 2),
(5, 1, 9, '24/01/1990', 202, 2, 2, 2, 2, -2),
(6, 1, 9, '30/20/2016', 2, 2, 200, 2, 2, 196);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`Customer_ID`);

--
-- Indexes for table `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`Inventory_ID`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`Order_ID`);

--
-- Indexes for table `order_billing`
--
ALTER TABLE `order_billing`
  ADD PRIMARY KEY (`Order_Bill_ID`);

--
-- Indexes for table `order_gl_detail`
--
ALTER TABLE `order_gl_detail`
  ADD PRIMARY KEY (`Order_GL_Detail_ID`);

--
-- Indexes for table `product_master`
--
ALTER TABLE `product_master`
  ADD PRIMARY KEY (`Product_ID`),
  ADD UNIQUE KEY `Product_Type` (`Product_Type`,`Product_Model`,`Product_Brand`,`Product_Detail`);

--
-- Indexes for table `supplier_master`
--
ALTER TABLE `supplier_master`
  ADD PRIMARY KEY (`Supplier_ID`);

--
-- Indexes for table `supplier_purchase_detail`
--
ALTER TABLE `supplier_purchase_detail`
  ADD PRIMARY KEY (`Purchase_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `Customer_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `inventory`
--
ALTER TABLE `inventory`
  MODIFY `Inventory_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `Order_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `order_billing`
--
ALTER TABLE `order_billing`
  MODIFY `Order_Bill_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `order_gl_detail`
--
ALTER TABLE `order_gl_detail`
  MODIFY `Order_GL_Detail_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `product_master`
--
ALTER TABLE `product_master`
  MODIFY `Product_ID` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT for table `supplier_master`
--
ALTER TABLE `supplier_master`
  MODIFY `Supplier_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `supplier_purchase_detail`
--
ALTER TABLE `supplier_purchase_detail`
  MODIFY `Purchase_ID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
