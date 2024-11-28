
<?php 
session_start(); 
include "db_conn.php";

if($_POST['action'] =='login')
{
	if (isset($_POST['mail']) && isset($_POST['pass'])) 
	{    
		function validate($data)	{       
			$data = trim($data);       
			$data = stripslashes($data);       
			$data = htmlspecialchars($data);       
			return $data;    	
			}    

		$uname = validate($_POST['mail']);    
		$pass = validate($_POST['pass']);    
		if (empty($uname)) {        
			header("Location: index.php?error=User Name is required");        
			exit();    
		}
		else if(empty($pass)){       
			header("Location: index.php?error=Password is required");        
			exit();    
		}else{        
		
			 $sql = "SELECT * FROM login WHERE email='$uname' and password='" . base64_encode($pass) . "'";        
			$result = mysqli_query($conn, $sql);        
			if (mysqli_num_rows($result) === 1) {            
				$row = mysqli_fetch_assoc($result);   
				
				if ($row['email'] === $uname && $row['password'] === base64_encode($pass)) {                
					$response['success']=1;
					$response['user']= $row['name']; 
					$response['msg']= 'Logged in successfully'; 				
					$_SESSION['email'] = $row['email'];                
					$_SESSION['name'] = $row['name'];                
					$_SESSION['id'] = $row['id'];                
					
				}else{                
					$response['success']=0;
					$response['msg']= 'Invalid Email address or password';    
							   
				}        
			}else{            
				$response['success']=0;
				$response['msg']= 'Invalid Email address or password';    
					   
			} 
		print json_encode($response);
	exit;	
		}
	}else{    
		header("Location: index.php");    
		exit();
	}
}
else if($_POST['action'] =='logout')
{
	session_unset();
	session_destroy();
	echo 1;
}
else if($_POST['action'] =='addissue')
{
	$name=$_POST['name'];
	$euid=$_POST['euid'];
	$class=$_POST['class'];
	$issue=$_POST['issue'];
	
	$sql = "INSERT INTO issues (name, EUID, subject, issue)
	VALUES ('".$name."', '".$euid."', '".$class."','".$issue."')";

	if ($conn->query($sql) === TRUE) {
	  echo 1;
	} else {
	  echo "Error: " . $sql . "<br>" . $conn->error;
	}
}
else if($_POST['action'] =='addReview')
{
	
	$studentName=$_POST['studentName'];
	$comment=$_POST['comment'];
	$rateRange=$_POST['rateRange'];
	$studentId=$_POST['studentId'];
	$professorId=$_POST['professorId'];
	
	$sql = "INSERT INTO reviews (userId, professorID, studentName, comment, rating)
	VALUES ('".$studentId."', '".$professorId."', '".$studentName."','".$comment."','".$rateRange."')";

	if ($conn->query($sql) === TRUE) {
	  echo 1;
	} else {
	  echo "Error: " . $sql . "<br>" . $conn->error;
	}
}
