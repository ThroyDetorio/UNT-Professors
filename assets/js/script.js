(function($){


const loginButton = document.getElementById("loginButton");
const loginModal = document.getElementById("loginModal");
const closeButton = document.querySelector(".close");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const emailInput = document.getElementById("email");
const password1 = document.getElementById("password");
const userNameDisplay = document.getElementById("userName");
const logoutButton = document.getElementById("logoutButton");
	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
	  var $parent = $(this)
	 
	  var $subMenu = $(this).next(".dropdown-menu");
	//  $subMenu.toggleClass('show');
	  if (!$(this).next().hasClass('show')) 
	  {
	 
		$subMenu.stop(true, true).slideDown(800, function(){
			$subMenu.addClass('show')
			$parent.addClass('expand')
		});
	  }
	  else{ 
	  
		$subMenu.stop(true, true).slideUp(800, function(){
		$subMenu.removeClass('show');
		$parent.removeClass('expand')
	   });
	  }
	  

	  

	  return false;
	});
	$('.leftmenubtn').on('click', function(e) {
		
		if($(this).hasClass('openbtn'))
		{
		
			$("#sidebar").css("width", "334");
			$("#main").css("margin-left", "334");
			$(this).removeClass('openbtn')
		}
		else{
			$("#sidebar").css("width", "0");
			$("#main").css("margin-left", "0");
			$(this).addClass('openbtn')
		}
	  });
	  $("#logoutButton").on('click', function(e) {
		$.ajax({
			  type: "POST",
			  url: "ajax.php",
			  data: { action:'logout'},
			success: function(data){
				location.reload();
			}
		})
	});
	
	  $("#loginForm").submit(function(){
		event.preventDefault(); // Prevent form submission
		
		const email1 = emailInput.value.trim();

		// Email domain validation
		if (email1.endsWith("@my.unt.edu")) {
			//const username = email1.split("@")[0];
			//localStorage.setItem("loggedInUser", username); // Store username in localStorage
			//displayUser(username);
			
			$.ajax({
			  type: "POST",
			  url: "ajax.php",
			  data: { action:'login', mail: email1, pass : password1.value},
			  success: function(data){
			  console.log(data)
				 var json = $.parseJSON(data);
				 if(json.success == 0)
				 {
					loginMessage.textContent =json.msg;
					loginMessage.style.color = "red";
				 }
				 else{
				 $("#profile-name").html(json.user)
				 loginMessage.textContent =json.msg;
					loginMessage.style.color = "green";
					$("#loginbtn").hide()
					$("#logindetails").show()
					
				 setTimeout(function(){
				  $('#loginModal').modal('hide')
				}, 1000);
				 }
			  }
			});
		} else {
			loginMessage.textContent = "Please use a valid UNT email ending with '@my.unt.edu'";
			loginMessage.style.color = "red";
		}
	});
	$('#loginModal').on('hidden.bs.modal', function () {
	 location.reload();
	});
	
	$('#reportIssueForm').on('submit', function (e) {

          e.preventDefault();

          $.ajax({
            type: 'post',
            url: 'ajax.php',
            data: $('#reportIssueForm').serialize(),
            success: function (data) {
              if(data ==1)
			  {
				  $("#reportIssueForm")[0].reset();
				  $("#successmodal").modal('show');
				 
			  }
            }
          });

        });

})(jQuery)
