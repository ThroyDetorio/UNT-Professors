-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2024 at 04:49 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `unt`
--

-- --------------------------------------------------------

--
-- Table structure for table `college`
--

CREATE TABLE `college` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `college`
--

INSERT INTO `college` (`id`, `name`) VALUES
(1, 'Computer Science'),
(2, 'Computer Engineering');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `department_id` int(11) NOT NULL,
  `course_code` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `name`, `department_id`, `course_code`) VALUES
(1, 'Communications Systems', 2, 'CSCE3020'),
(2, 'Circuit Analysis', 3, 'EENG2610'),
(3, 'Electronics I (Devices and Materials)', 3, 'EENG3510'),
(4, 'Computer Engineering Design II', 2, 'CSCE4915'),
(5, 'Foundations of Computing', 2, 'CSCE2100'),
(6, 'Digital Logic Design', 3, 'EENG2710'),
(7, 'Electronics I Lab', 3, 'EENG3511'),
(8, 'Social Issues in Computing', 2, 'CSCE4010'),
(9, 'Advanced Topics in Computer Networks', 2, 'CSCE6581'),
(10, 'Analog and Digital Circuit Design Project', 3, 'EENG2920'),
(11, 'Engineering Electromagnetics Lab', 3, 'EENG3411'),
(12, 'Introduction to Electrical Engineering', 3, 'EENG1910'),
(13, 'Computer Networks', 3, 'EENG4810'),
(14, 'Digital Logic Design Lab', 3, 'EENG2711'),
(15, 'Reconfigurable Computing', 3, 'EENG4760'),
(16, 'Digital Communications', 3, 'EENG4510'),
(17, 'Foundations of Cybersecurity', 1, 'CSCE3550'),
(18, 'Intro to Computer Networks', 1, 'CSCE3530'),
(19, 'Programming Languages', 1, 'CSCE4430'),
(20, 'Intro to Operating Systems', 1, 'CSCE4600'),
(21, 'Intro to Compilation Techniques', 1, 'CSCE4650'),
(22, 'Formal Languages, Automata and Computability', 1, 'CSCE4115'),
(23, 'Intro to Artificial Intelligence', 1, 'CSCE4201'),
(24, 'Intro to Digital Image Processing', 1, 'CSCE4240'),
(25, 'Intro to Natural Language Processing', 1, 'CSCE4290'),
(26, 'Fundamentals of Database Systems', 1, 'CSCE4350'),
(27, 'Computer Science I', 1, 'CSCE1030'),
(28, 'Computer Science II', 1, 'CSCE1040'),
(29, 'Computing Foundations', 1, 'CSCE2100'),
(30, 'Computing Foundations II', 1, 'CSCE2110'),
(31, 'Assembly Language & Computer Organization', 1, 'CSCE2610'),
(32, 'Data Structures and Algorithms', 1, 'CSCE3110'),
(33, 'Software Engineering', 1, 'CSCE3444'),
(34, 'Systems Programming', 1, 'CSCE3600'),
(35, 'Social Issues in Computing', 1, 'CSCE4010'),
(36, 'Algorithms', 1, 'CSCE4110'),
(37, 'Software Development Capstone I', 1, 'CSCE4901'),
(38, 'Software Development Capstone II', 1, 'CSCE4902');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `college_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `college_id`) VALUES
(1, 'Computer Science and Engineering', 1),
(2, 'Computer Science and Engineering', 2),
(3, 'Electrical Engineering', 2);

-- --------------------------------------------------------

--
-- Table structure for table `issues`
--

CREATE TABLE `issues` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `EUID` varchar(100) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `issue` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `email`, `password`) VALUES
(1, 'Kush Satani', 'kush@my.unt.edu', 'MTIzNDU2');

-- --------------------------------------------------------

--
-- Table structure for table `professors`
--

CREATE TABLE `professors` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `courseId` int(11) NOT NULL,
  `rating` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `professors`
--

INSERT INTO `professors` (`id`, `name`, `courseId`, `rating`) VALUES
(1, 'Professor Robert Akl', 1, 3.8),
(2, 'Professor Shahram D. Rohani', 2, 1.4),
(3, 'Professor Shuping Wang', 3, 2),
(4, 'Professor Robin J. Pottathuparambil', 4, 2),
(5, 'Professor Paul Tarau', 5, 3.8),
(6, 'Professor Tom Derryberry', 6, 4.3),
(7, 'Professor Jungkwun Kim', 7, 2.8),
(8, 'Professor Hung Luyen', 2, 4.7),
(9, 'Professor Asif Baba', 8, 4.3),
(10, 'Professor Ram Dantu', 9, 4.5),
(11, 'Professor Miguel Acevedo', 10, 4.1),
(12, 'Professor Sensong An', 11, 4.8),
(13, 'Professor Colleen Bailey', 2, 3.3),
(14, 'Professor Shengli Fu', 12, 4.5),
(15, 'Professor Parthasarathy Guturu', 13, 2.7),
(16, 'Professor Elias Kougianos', 14, 4.4),
(17, 'Professor Gayatri Mehta', 15, 4.5),
(18, 'Professor King man Siu', 3, 4.1),
(19, 'Professor Hyusim Park', 2, 3.1),
(20, 'Professor Kamesh Namuduri', 1, 4.4),
(21, 'Professor Hua Sun', 16, 3.5),
(22, 'Professor Beddhu Murali', 5, 4.4),
(23, 'Professor Jacob Hochstetler', 17, 4.4),
(24, 'Professor Bilal Abu Bakr', 18, 4.4),
(25, 'Professor Faridul Islam', 19, 2),
(26, 'Professor Jonathon H. Doran', 20, 2),
(27, 'Professor Amar Maharjan', 21, 3.8),
(28, 'Professor Bahar Dorri', 22, 4.3),
(29, 'Professor Rodney D. Nielsen', 23, 2.8),
(30, 'Professor Russel L. Pears', 23, 4.7),
(31, 'Professor Bill Buckles', 24, 4.3),
(32, 'Professor Xiaohui Yuan', 24, 4.5),
(33, 'Professor Zeenat Tariq', 25, 4.1),
(34, 'Professor Ryan M. Garlick', 26, 4.8),
(35, 'Professor Amar Maharjan', 27, 3.3),
(36, 'Professor Pradhumna L. Shrestha', 27, 4.5),
(37, 'Professor Rubenia Borge O. Borge Flores', 28, 2.7),
(38, 'Professor Fernando Mosquera', 28, 4.4),
(39, 'Professor Bahar Dorri', 29, 4.5),
(40, 'Professor Yuan Li', 29, 4.1),
(41, 'Professor Curtis Chambers', 30, 3.1),
(42, 'Professor Gary T. James', 31, 4.4),
(43, 'Professor Saqib Khalil', 31, 3.5),
(44, 'Professor Xuan Guo', 32, 4.4),
(45, 'Professor Faridul Islam', 32, 4.6),
(46, 'Professor Satya Vrvt Parupudi', 32, 3.5),
(47, 'Professor Wajdi Aljedaani', 33, 4.9),
(48, 'Professor Hadiseh Gooranorimi', 33, 4.7),
(49, 'Professor Faridul Islam', 34, 4.7),
(50, 'Professor Fernando Mosquera', 34, 4),
(51, 'Professor Jonathon H. Doran', 35, 1),
(52, 'Professor Jonathon H. Doran', 35, 1),
(53, 'Professor Faridul Islam', 36, 4.6),
(54, 'Professor Faridul Islam', 36, 4.6),
(55, 'Professor Abdelnasser H. Ouda', 36, 4.7),
(56, 'Professor Wajdi Aljedaani', 37, 4.7),
(57, 'Professor Stephanie A. Ludi', 37, 4.5),
(58, 'Professor Stephanie A. Ludi', 38, 4.7),
(59, 'Professor Diana Rabah', 38, 4.9);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `professorID` int(11) NOT NULL,
  `studentName` varchar(100) NOT NULL,
  `comment` text NOT NULL,
  `rating` float NOT NULL,
  `reviewDate` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `userId`, `professorID`, `studentName`, `comment`, `rating`, `reviewDate`) VALUES
(1, NULL, 1, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(2, NULL, 1, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(3, NULL, 2, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(4, NULL, 2, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(5, NULL, 3, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(6, NULL, 3, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(7, NULL, 4, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(8, NULL, 4, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(9, NULL, 5, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(10, NULL, 5, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(11, NULL, 6, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(12, NULL, 6, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(13, NULL, 7, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(14, NULL, 7, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(15, NULL, 8, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(16, NULL, 8, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(17, NULL, 9, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(18, NULL, 9, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(19, NULL, 10, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(20, NULL, 10, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(21, NULL, 11, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(22, NULL, 11, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(23, NULL, 12, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(24, NULL, 12, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(25, NULL, 13, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(26, NULL, 13, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(27, NULL, 14, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(28, NULL, 14, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(29, NULL, 15, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(30, NULL, 15, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(31, NULL, 16, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(32, NULL, 16, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(33, NULL, 17, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(34, NULL, 17, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(35, NULL, 18, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(36, NULL, 18, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(37, NULL, 19, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(38, NULL, 19, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(39, NULL, 20, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(40, NULL, 20, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(41, NULL, 21, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(42, NULL, 21, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(43, NULL, 22, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(44, NULL, 22, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(45, NULL, 23, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(46, NULL, 23, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(47, NULL, 24, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(48, NULL, 24, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(49, NULL, 25, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(50, NULL, 25, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(51, NULL, 26, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(52, NULL, 26, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(53, NULL, 27, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(54, NULL, 27, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(55, NULL, 28, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(56, NULL, 28, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(57, NULL, 29, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(58, NULL, 29, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(59, NULL, 30, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(60, NULL, 30, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(61, NULL, 31, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(62, NULL, 31, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(63, NULL, 32, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(64, NULL, 32, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(65, NULL, 33, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(66, NULL, 33, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(67, NULL, 34, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(68, NULL, 34, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(69, NULL, 35, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(70, NULL, 35, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(71, NULL, 36, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(72, NULL, 36, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(73, NULL, 37, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(74, NULL, 37, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(75, NULL, 38, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(76, NULL, 38, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(77, NULL, 39, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(78, NULL, 39, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(79, NULL, 40, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(80, NULL, 40, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(81, NULL, 41, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(82, NULL, 41, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(83, NULL, 42, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(84, NULL, 42, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(85, NULL, 43, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(86, NULL, 43, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(87, NULL, 44, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(88, NULL, 44, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(89, NULL, 45, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(90, NULL, 45, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(91, NULL, 46, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(92, NULL, 46, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(93, NULL, 47, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(94, NULL, 47, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(95, NULL, 48, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(96, NULL, 48, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(97, NULL, 49, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(98, NULL, 49, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(99, NULL, 50, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(100, NULL, 50, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(101, NULL, 51, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(102, NULL, 51, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(103, NULL, 52, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(104, NULL, 52, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(105, NULL, 53, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(106, NULL, 53, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(107, NULL, 54, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(108, NULL, 54, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(109, NULL, 55, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(110, NULL, 55, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(111, NULL, 56, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(112, NULL, 56, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(113, NULL, 57, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(114, NULL, 57, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(115, NULL, 58, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(116, NULL, 58, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02'),
(117, NULL, 59, 'Alice', 'Very clear explanations.', 4.8, '2024-11-01'),
(118, NULL, 59, 'Bob', 'Helpful and approachable.', 4.6, '2024-11-02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `college`
--
ALTER TABLE `college`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `issues`
--
ALTER TABLE `issues`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `professors`
--
ALTER TABLE `professors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `college`
--
ALTER TABLE `college`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `issues`
--
ALTER TABLE `issues`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `professors`
--
ALTER TABLE `professors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
