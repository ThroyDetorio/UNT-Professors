<?php session_start();
$arrDept = array();
include "db_conn.php";
 $sql = "SELECT c.id as collegeId, c.name as collegeName,d.id as deptId, d.name as deptName FROM college c left join departments d on d.college_id = c.id  order by c.name, d.name;";                
   
 $courseSql = "select department_id, group_concat(name separator ',')as courseNames, group_concat(id separator ',')as courseIds from courses group by department_id;";
  if ($courseResult = mysqli_query($conn, $courseSql)) { 
 while ($courseRow = mysqli_fetch_assoc($courseResult)) {
	 $arrCourseName = explode(",",$courseRow['courseNames']);
	 
	 $courseId = explode(",",$courseRow['courseIds']);
	 foreach($courseId as $key=>$val)
	 {
		 $arrDept[$courseRow['department_id']][$courseId[$key]] = $arrCourseName[$key];
	 }
 }
  }
  
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>UNT</title>
    <link rel="stylesheet" href="assets/vendors/mdi/css/materialdesignicons.min.css" />
    <link rel="stylesheet" href="assets/vendors/flag-icon-css/css/flag-icon.min.css" />
    <link rel="stylesheet" href="assets/vendors/css/vendor.bundle.base.css" />
    <link rel="stylesheet" href="assets/vendors/font-awesome/css/font-awesome.min.css" />
    <link rel="stylesheet" href="assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
	
  </head>
  
    <body>
    <div class="container-scroller">
	
      <nav class="sidebar sidebar-offcanvas" id="sidebar">
        
		
		<ul class="nav navbar-nav mr-auto">
		
          
		  
          <li class="nav-item">
            <a class="nav-link" href="index.php">
              <i class="mdi mdi-home menu-icon"></i>
              <span class="menu-title">Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="mdi mdi-crosshairs-gps menu-icon"></i>
              <span class="menu-title">College Majors</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu dropdown-menu">
				<?php
					$collegeId = '';
				 if ($result = mysqli_query($conn, $sql)) { 
					
					  
				  // Fetch one and one row
				  while ($row = mysqli_fetch_assoc($result)) {
					 
					  if($collegeId == '')
					  {	
						$collegeId = $row['collegeId'];
						 echo '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" ><span class="menu-title">
						 '.$row['collegeName'].'</span>
						  <i class="menu-arrow"></i>
						</a>
					  <ul class=" flex-column  dropdown-menu" >';
					  }
					  
					   if($collegeId != $row['collegeId'])
					  {
						  $collegeId = $row['collegeId'];
						  echo '</ul>
							</li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" ><span class="menu-title">
						 '.$row['collegeName'].'</span>
						  <i class="menu-arrow"></i>
						</a>
					  <ul class=" flex-column  dropdown-menu" >';
					  }
					 	
								
						echo '<li class="nav-item dropdown">
						  <a class="nav-link dropdown-toggle" ><span class="menu-title">
						 '.$row['deptName'].'</span>
						  <i class="menu-arrow"></i></a>
						<ul class=" flex-column  dropdown-menu" >';
						
						foreach($arrDept[$row['deptId']] as $courseId => $courseName)
						{
							echo '<li class="nav-item "><a class="nav-link "  href="professor.php?id='.$courseId .'">'.$courseName.'</a></li>';
						}
						echo '</ul></li>';
				
				  }
				  echo '</ul></li>';
				  mysqli_free_result($result);
				} 
				?>
               
              </ul>
            </div>
          </li>
          <li class="nav-item" id="reportissue">
            <a class="nav-link" href="reportIssue.php">
              <i class="mdi mdi-contacts menu-icon"></i>
              <span class="menu-title">Report Issue</span>
            </a>
          </li>
         
          
        </ul>
      </nav>
      <div class="container-fluid " id="main">
     
        <nav class="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
          <div class="navbar-menu-wrapper d-flex align-items-stretch justify-content-between">
            <a class=" navbar-brand brand-logo-mini align-self-center d-lg-none" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
            <button  class="leftmenubtn col-md-2 text-left  navbar-toggler navbar-toggler align-self-center mr-2" type="button" data-toggle="minimize">
              <i class="mdi mdi-menu"></i>
            </button>
			<img src="assets/images/lettermark_wordmark_diving_eagle_combo_black.svg" alt="logo" style="flex: 1;justify-content: center;height: 100px;margin-top: -16px !important;"/>
             <ul class="navbar-nav navbar-nav-right ml-lg-auto">
            
              <li class="nav-item nav-profile dropdown border-0" id="logindetails">
                <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown">
                  
                  Hello, <span class="profile-name" id="profile-name"></span>
                </a>
                <div class="dropdown-menu navbar-dropdown w-100" aria-labelledby="profileDropdown">
                  
                  <a class="dropdown-item" href="#" id="logoutButton">
                    <i class="mdi mdi-logout mr-2 text-primary" ></i> Signout </a>
                </div>
              </li>
			  <li class="nav-item nav-login dropdown border-0">
                <a class="nav-link " data-toggle="modal" data-target="#loginModal"  id="loginbtn">
                  <span class="profile-name">Login</span>
                </a>
				<div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				  <div class="modal-dialog" role="document">
					<div class="modal-content">
					<form class="forms-sample" id="loginForm">
					  <div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Login</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						  <span aria-hidden="true">&times;</span>
						</button>
					  </div>
					  <div class="modal-body">
						<div class="form-group row">
							<div id="loginMessage" class="col-sm-12 col-form-label text-center"></div>
						</div>
						<div class="form-group row">
                        <label for="email" class="col-sm-3 col-form-label">Email</label>
                        <div class="col-sm-9">
                          <input type="email" class="form-control" id="email" placeholder="yourname@my.unt.edu" value="" required />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="password" class="col-sm-3 col-form-label">Password</label>
                        <div class="col-sm-9">
                          <input type="password" class="form-control" id="password" placeholder="Password" value="" required />
                        </div>
                      </div>
					  
						
					  </div>
					  <div class="modal-footer">
						
						<button type="submit" id="loginButton" class="btn btn-primary">Login</button>
					  </div>
					  </form>
					</div>
				  </div>
				</div>
			</ul>
            <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span class="mdi mdi-menu"></span>
            </button>
          </div>
        </nav>