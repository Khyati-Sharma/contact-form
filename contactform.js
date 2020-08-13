function myFunction(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
	var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
	
    alert("Your form is submitted, your name is "+fname+" "+lname+" , email - "+email+" , phone- "+phone+"\nmessage subject is "+subject+" - and message is about - "+message)
}