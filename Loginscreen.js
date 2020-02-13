var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World! 1235');
 
var attempt =4;
function Validate()
{
    var username =document.getElementById("username").value;
    var password= document.getElementById("password").value;

    if (username =='' || password=='' && form.username.hasAttribute('required'))
    {
        document.getElementById("form-mandatory").innerHTML = "* Username and Password required."   
       // document.getElementById("username").disabled =false;
           // document.getElementById("password").disabled = false;
           
    }
    else
    {
    if (username == "Abcd" & password == "abcd"){

        window.location="C:/Users/spinisetty/Documents/MyFirstProject/index.html";
        return false;
    }
    else
    {
        document.getElementById("form-mandatory").innerHTML = "* Username Or Password doesn't match."
     
    }
    }
}

function NewRegistration()
{
    
}
function Sendemail()

{
    var usname=document.getElementById("Usernameemail").value;
    if (usname =="abcd" )
    {
    document.getElementById("sendmail").innerHTML = "An email has been sent to your account.Please click on the link in the email to reset your password!"
     
    }
}
function subscribe()
{
    var usname1=document.getElementById("Usermail").value;
    if (usname1 =="abcd" )
    {
    document.getElementById("subscribeemail").innerHTML = "Thank you for subscribing!"
     
    }
}

}).listen(8080);