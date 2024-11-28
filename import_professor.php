<?php
include "db_conn.php";
// MySQL table's name
$tableName = 'professor';
// Get JSON file and decode contents into PHP arrays/values
//$jsonFile = 'assets/data/CS.json';
$content = file_get_contents($jsonFile);
$jsonData = json_decode($content, TRUE);
$arrDepartment = array();
$arrCollege = array();
$arrCourse = array();


// Iterate through JSON and build INSERT statements
foreach ($jsonData as $id=>$row) {
	
	
	$strCollege = trim($row['Major']);
	$strDepartment = trim($row['Department']);
	$strCourseName = trim($row['Course_name']);
	$strCourseCode = trim($row['Course_code']);
	$strProfessor = trim($row['Name']);
	$strRating = trim($row['Avg_Rating']);
	
	if(!array_key_exists($strCollege, $arrCollege))
	{
		echo '<br/>'.$sqlCollege = "SELECT id from college where name='" . $strCollege . "'";
		$resultCollege = mysqli_query($conn, $sqlCollege);        
		if (mysqli_num_rows($resultCollege) === 1) {            
			$rowCollege = mysqli_fetch_assoc($resultCollege);   
			$intCollegeId = $rowCollege['id'];
		}
		else{
				
			echo '<br/>'.$sqlCollege = "INSERT INTO college (name) VALUES ('".$strCollege."')";

			if ($conn->query($sqlCollege) === TRUE) {
			  $intCollegeId = $last_id = mysqli_insert_id($conn);
			} 
			
		}
		$arrCollege[$strCollege] = $intCollegeId;
	}
	$intCollegeId = $arrCollege[$strCollege];
	
	if(!array_key_exists($strDepartment, $arrDepartment[$intCollegeId]))
	{
		echo '<br/>'.$sqlDept = "SELECT id from departments where name='" . $strDepartment . "' and college_id='" . $intCollegeId . "'";
		$resultDept = mysqli_query($conn, $sqlDept);        
		if (mysqli_num_rows($resultDept) === 1) {            
			$rowDept = mysqli_fetch_assoc($resultDept);   
			
			$intDeptId = $rowDept['id'];
		}
		else{
				
			echo '<br/>'.$sqlDept = "INSERT INTO departments (name, college_id) VALUES ('".$strDepartment."', '" . $intCollegeId . "')";

			if ($conn->query($sqlDept) === TRUE) {
			  $intDeptId = $last_id = mysqli_insert_id($conn);
			} 
			
		}
		 $arrDepartment[$intCollegeId][$strDepartment] = $intDeptId;
	}
	 $intDeptId = $arrDepartment[$intCollegeId][$strDepartment];
	
	
	if(!array_key_exists($strCourseName, $arrCourse))
	{
		echo '<br/>'.$sqlCourse = "SELECT id from courses where name='" . $strCourseName . "' and department_id='" . $intDeptId . "' and course_code='" . $strCourseCode . "'";
		$resultCourse = mysqli_query($conn, $sqlCourse);        
		if (mysqli_num_rows($resultCourse) === 1) {            
			$rowCourse = mysqli_fetch_assoc($resultCourse);   
			$intCourseId = $rowCourse['id'];
		}
		else{
				
			echo '<br/>'.$sqlCourse = "INSERT INTO courses (name, department_id, course_code) VALUES ('".$strCourseName."', '" . $intDeptId . "', '" . $strCourseCode . "')";

			if ($conn->query($sqlCourse) === TRUE) {
			  $intCourseId = $last_id = mysqli_insert_id($conn);
			} 
			
		}
		$arrCourse[$strCourseName] = $intCourseId;
	}
	$intCourseId = $arrCourse[$strCourseName];
	
	

   echo '<br/>'. $sqlProf = "INSERT INTO professors(name, courseId, rating) VALUES ('".$strProfessor."', '" . $intCourseId . "', '" . $strRating . "');";
	if ($conn->query($sqlProf) === TRUE) {
	  $intProfessorId = $last_id = mysqli_insert_id($conn);
	} 

	foreach($row['Reviews'] as $arrReview)
	{
		 echo '<br/>'.$sqlReview = "INSERT INTO reviews(professorID, studentName, comment, rating, reviewDate) VALUES ('".$intProfessorId."', '" . $arrReview['Student'] . "', '" . $arrReview['Comment'] . "', '" . $arrReview['Rating'] . "', '" . $arrReview['Date'] . "');";
		$conn->query($sqlReview);
	}
}


?>