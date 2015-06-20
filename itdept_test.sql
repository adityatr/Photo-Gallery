-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2015 at 09:17 AM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `itdept_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `pictures`
--

CREATE TABLE IF NOT EXISTS `pictures` (
  `imageurl` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pictures`
--

INSERT INTO `pictures` (`imageurl`) VALUES
('images/2048 (2).jpg'),
('images/2048.jpg'),
('images/dummy-1280x720-Auger1-plain.jpg'),
('images/dummy-1280x720-Auger2-plain.jpg'),
('images/dummy-1280x720-Butterfly-plain.jpg'),
('images/dummy-1280x720-CanisLupus-plain.jpg'),
('images/dummy-1280x720-Cat-plain.jpg'),
('images/dummy-1280x720-CetoniaAurata-plain.jpg'),
('images/dummy-1280x720-Cow-plain.jpg'),
('images/dummy-1280x720-Dog-plain.jpg'),
('images/dummy-1280x720-Dragonfly-plain.jpg'),
('images/dummy-1280x720-Flamingo-plain.jpg'),
('images/dummy-1280x720-Gull-plain.jpg'),
('images/dummy-1280x720-Impala-plain.jpg'),
('images/dummy-1280x720-Jellyfish-plain.jpg'),
('images/dummy-1280x720-KingVulture-plain.jpg'),
('images/dummy-1280x720-Lama-plain.jpg'),
('images/dummy-1280x720-MarrusOrthocanna-plain.jpg'),
('images/dummy-1280x720-Puffin-plain.jpg'),
('images/dummy-1280x720-Sheep-plain.jpg'),
('images/dummy-1280x720-Snake-plain.jpg'),
('images/dummy-1280x720-WhiteTiger-plain.jpg'),
('images/dummy-400x400-Gull.jpg'),
('images/dummy-400x400-Jellyfish.jpg'),
('images/dummy-400x400-KingVulture.jpg'),
('images/dummy-400x400-Lizard.jpg'),
('images/dummy-400x400-MarrusOrthocanna.jpg'),
('images/dummy-400x400-Monkey1.jpg'),
('images/dummy-400x400-WhiteTiger.jpg'),
('images/image.jpg'),
('images/Untitled.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pictures`
--
ALTER TABLE `pictures`
  ADD PRIMARY KEY (`imageurl`), ADD FULLTEXT KEY `imageurl` (`imageurl`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
