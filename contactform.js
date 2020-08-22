function myFunction(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
	var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if((fname == "") && (lname == "") && ((email.indexOf('@') == -1) || (email.slice(email.indexOf("@") , email.lenght).indexOf(".") == -1)) && (phone == "") && (message == "")){
        alert("PLEASE FILL THE FORM*");
    }
    else if((fname == "") && ((email.indexOf('@') == -1) || (email.slice(email.indexOf("@") , email.lenght).indexOf(".") == -1)) && (phone == "")){
        alert("PLEASE ENTER YOUR NAME , EMAIL AND PHONE NUMBER*");
    }
    else if ((fname == "") && ((email.indexOf('@') == -1) || (email.slice(email.indexOf("@") , email.lenght).indexOf(".") == -1))){
        alert("PLEASE ENTER YOUR NAME AND EMAIL*");
    }
    else if(((email.indexOf('@') == -1) || (email.slice(email.indexOf("@") , email.lenght).indexOf(".") == -1)) && (phone == "")){
        alert("EMPTY OR INVALID EMAIL AND PLEASE ENTER YOUR PHONE NUMBER*");
    }
    else if((fname == "") && (phone == "")){
        alert("PLEASE ENTER YOUR NAME AND PHONE NUMBER*");
    }
    else if(fname == ""){
        alert("PLEASE ENTER YOUR NAME*");
    }
    else if((email.indexOf('@') == -1) || (email.slice(email.indexOf("@") , email.lenght).indexOf(".") == -1)){
        alert("EMPTY OR INVALID EMAIL*");
    }
    else if(phone == ""){
        alert("PHONE NUMBER IS EMPTY");
    }
    else {
        alert("Your form is submitted, your name is "+fname+" "+lname+" , email - "+email+" , phone- "+phone+"\nmessage subject is "+subject+" - and message is about - "+message)
    }
}