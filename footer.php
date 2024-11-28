 <footer class="footer">
            <div class="d-sm-flex justify-content-center justify-content-sm-between">
              <span class="text-muted d-block text-center text-sm-left d-sm-inline-block"><p>Email: <a href="mailto:contact@unt.edu">contact@unt.edu</a></p>
                <p>Contact No: +1 (940) 565-2000</p></span>
              <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-right"> <p>Office: Eagle Student Services Center</p>
                <p>Location: 1155 Union Cir, Denton, TX 76203, USA</p></span>
            </div>
          </footer>
        </div>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
    <!-- plugins:js -->
    <script src="assets/vendors/js/vendor.bundle.base.js"></script>
    <!-- endinject -->
    <!-- Plugin js for this page -->
    <script src="assets/vendors/chart.js/Chart.min.js"></script>
    <script src="assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.js"></script>
    <script src="assets/vendors/flot/jquery.flot.js"></script>
    <script src="assets/vendors/flot/jquery.flot.resize.js"></script>
    <script src="assets/vendors/flot/jquery.flot.categories.js"></script>
    <script src="assets/vendors/flot/jquery.flot.fillbetween.js"></script>
    <script src="assets/vendors/flot/jquery.flot.stack.js"></script>
    <script src="assets/vendors/flot/jquery.flot.pie.js"></script>
    <!-- End plugin js for this page -->
    <!-- inject:js -->
    <script src="assets/js/off-canvas.js"></script>
    <script src="assets/js/hoverable-collapse.js"></script>
    <script src="assets/js/misc.js"></script>
    <!-- endinject -->
    <!-- Custom js for this page -->
    <script src="assets/js/dashboard.js"></script>
	<script src="assets/js/script.js"></script>
    <!-- End custom js for this page -->
  </body>
</html>

<script>
  var sessionlogin = "<?php echo isset($_SESSION['name'])?$_SESSION['name']:''; ?>"; 
  var sessionid = "<?php echo isset($_SESSION['id'])?$_SESSION['id']:''; ?>"; 

if(sessionlogin =='')
{
	$("#loginbtn").show()
	$("#logindetails").hide()
	
}
else{
	$("#loginbtn").hide()
	$("#logindetails").show()
	$("#profile-name").html(sessionlogin)
	
}
</script>