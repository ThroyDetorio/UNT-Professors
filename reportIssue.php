<?php
include('header.php');

?>

<div class="mx-auto col-md-6 grid-margin stretch-card" style="padding-top:90px	">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Report Issue</h4>
                    <p class="card-description">Fill out the form below to report an issue.</p>
                    <form class="forms-sample" id="reportIssueForm">
					<input type="hidden" name="action" value="addissue">
                      <div class="form-group">
                        <label for="name " class="">Name</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="" required />
                      </div>
                      <div class="form-group">
                        <label for="euid">EUID</label>
                        <input type="text" class="form-control" id="euid" name="euid" placeholder=""  required />
                      </div>
                      <div class="form-group">
                        <label for="class">Subject</label>
                        <input type="text" class="form-control" id="class" name="class" placeholder="" required />
                      </div>
                      <div class="form-group">
                        <label for="issue">Issue</label>
                        <textarea
                          class="form-control"
                          id="issue" name="issue" 
                          rows="4" required 
                        ></textarea>
                      </div>
                      
                      <button type="submit" class="btn btn-primary mr-2"> Submit Issue </button>
                      
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
      <div class="modal-body text-success">Issue reported successfully.</div>
      <div class="modal-footer">
        <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-secondary" data-dismiss="modal" aria-label="Close">Close</button>
      </div>
    </div>
  </div>
</div>
        
		
<?php
include('footer.php');


?>
