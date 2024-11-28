 <?php
 
include('header.php');

 $sql = "SELECT courses.name as courseName, departments.name as deptName, college.name as collegeName from courses inner join departments on departments.id=courses.department_id inner join college on college.id= departments.college_id where courses.id='".$_GET['id']."';";    

   $sql1 = "select professors.id as professorId, professors.name as professorName, professors.rating as avgRating,reviews.id as reviewId, reviews.*, courses.name as courseName from professors left join courses on courses.id = professors.courseId left join reviews on reviews.professorId= professors.id where courseId  ='".$_GET['id']."'  ";  

  if ($result = mysqli_query($conn, $sql)) { 
	$courseRow = mysqli_fetch_assoc($result);
 
  }
  $arrProfessors = array();
  if ($result1 = mysqli_query($conn, $sql1)) { 
	while($ProfessorRow1 = mysqli_fetch_assoc($result1))
	{
		
		$arrProfessors[$ProfessorRow1['professorId']][] = $ProfessorRow1;
	}
 
  }
  
 
?>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<div class="col-lg-12 grid-margin stretch-card" >
                <div class="col-md-12">
                
                    
                   
                    <div class="table-responsive" style="padding-top:100px">
                      
<div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title"><?php echo $courseRow['collegeName'];?>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;<?php echo $courseRow['deptName'];?>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;<?php echo $courseRow['courseName'];?></h4>
                    
                    <div class="table-responsive">
							<table class="table table-condensed table-striped table-primary">
    <thead>
        <tr>
					
          <th>Name</th>
          <th>Course Code</th>
          <th>Ratings</th>
          <th></th>
        </tr>
    </thead>

    <tbody>
		<?php
		
		foreach($arrProfessors as $profId => $arrProfessor)
		{
		
			$hasComment = (!empty($arrProfessor[0]['reviewId']) || sizeof($arrProfessor)>1)?1:0;
			echo '<tr data-toggle="collapse" data-target="#professor'.$profId.'" class="accordion-toggle reviewtable">
           
            <td>'. $arrProfessor[0]['professorName'] .'</td>
             <td>'. $arrProfessor[0]['courseName'] .'</td>
           <td>'. $arrProfessor[0]['avgRating'] .'/5</td>
			<td>
			<button class="btn btn-default btn-xs" style="font-size:20px"><img src="assets/images/review.png"></button>
			</td>
        </tr>';
			
				echo '<tr s>
            <td colspan="12" class="hiddenRow noPadding" >
							<div class="accordian-body reviewDetail collapse" id="professor'.$profId.'" > 
              <table class="table table-striped table-warning" >
                      <thead>
                        <tr >
							<th>Name</th>
							<th>Comment</th>
							<th>Rating</th>		
							
						</tr>
					</thead><tbody>	';
				if($hasComment ==1 )
				{
					foreach($arrProfessor as $arrProfessorData)
					{
						echo '<tr>
							<td>'. $arrProfessorData['studentName'] .'</td>
							<td>'. $arrProfessorData['comment'] .'</td>
							<td>'. $arrProfessorData['rating'] .'/5</td>
						</tr>';
					}
				}
				else{
					echo '<tr><td colspan="4">No reviews found.</td></tr>';
				}
				echo ' <tr><td colspan="4"><button onclick="addComment('.$profId.', \''.$arrProfessor[0]['professorName'].'\')" id="addComment" class="addComment btn btn-primary" value="'.$profId.'">Add Review</button></td></tr>';
				echo '</tbody></table>';
			
		}
		?>
       
      
    </tbody>
</table>
<div class="modal fade" id="addComments" tabindex="-1" role="dialog" >
				  <div class="modal-dialog" role="document">
					<div class="modal-content">
					<form class="forms-sample" id="ratingForm">
					  <div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">Professior Review</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						  <span aria-hidden="true">&times;</span>
						</button>
					  </div>
					  <div class="modal-body">
						<div class="form-group row">
							<div id="reviewMessage" class="col-sm-12 col-form-label text-center"></div>
						</div>
						<div class="form-group row">
                        <label for="studentName" class="col-sm-3 col-form-label">Name</label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" id="studentName" name ="studentName" required readonly  value=""  />
                        </div>
                      </div>
						<div class="form-group row">
                        <label for="professorName" class="col-sm-3 col-form-label">Professor</label>
                        <div class="col-sm-9">
                          <input type="text" class="form-control" name="professorName" id="professorName" required readonly value=""  />
                        </div>
                      </div>
					  <input type="hidden" name="action" value="addReview">
					  <input type="hidden" id="professorId" name="professorId">
					  <input type="hidden" id="studentId" name="studentId" value="">
                      <div class="form-group row">
                        <label for="professorName" class="col-sm-3 col-form-label">comment</label>
                        <div class="col-sm-9">
                          <textarea
                          class="form-control"
                          id="comment" name="comment" 
                          rows="4" required 
                        ></textarea>
                        </div>
                      </div>
					  <div class="form-group row">
                        <label for="professorName" class="col-sm-3 col-form-label">Ratings</label>
                        <div class="col-sm-9" style="padding-top:10px">
                          <input type="range" class="form-range" min="1" max="5" value="3" step="0.5" id="rateRange" name="rateRange">
						<label class="form-label"> <span id="rateText">3</span>/5</label>
						  
                        </div>
                      </div>
					  
						
					  </div>
					  <div class="modal-footer">
						
						<button type="submit" id="loginButton" class="btn btn-primary">Submit</button>
					  </div>
					  </form>
					</div>
				  </div>
				</div>
          <div class="modal fade" id="successmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						  <span aria-hidden="true">&times;</span>
						</button>
      </div>
      <div class="modal-body text-success">Review submitted successfully.</div>
      <div class="modal-footer">
        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-secondary" data-dismiss="modal" aria-label="Close">Close</button>
      </div>
    </div>
  </div>
</div>
					
                     </div>
                  </div>
                </div>
              </div>
			  

              <?php
include('footer.php');


?>
<script>
const events = ['mousemove', 'touchmove']

$.each(events, function(k,v) {
  $('#rateRange').on(v, function() {
    $('#rateText').text($('#rateRange').val());
  });
})

function addComment(id, name){
	
	if(sessionlogin =='')
	{
		alert('Please login to provide reviews.');
	}
	else
	{
		$("#professorName").val(name);
		$("#professorId").val(id);
		$("#studentId").val(sessionid);
		$("#studentName").val(sessionlogin);
		$('#addComments').modal('show');
	}
}


$('#ratingForm').on('submit', function (e) {

          e.preventDefault();

          $.ajax({
            type: 'post',
            url: 'ajax.php',
            data: $('#ratingForm').serialize(),
            success: function (data) {
              if(data.trim() ==1)
			  {
				  $("#ratingForm")[0].reset();
				  $("#addComments").modal('hide');
				  $("#successmodal").modal('show');
				 
			  }
            }
          });

        });
		
$('#successmodal').on('hidden.bs.modal', function () {
	 location.reload();
	});
</script>
