
$("#loginBtn").click(function(){

var email=$("#email").val();
var password=$("#password").val();

$.ajax({

url:"php/login.php",
type:"POST",

data:{
email:email,
password:password
},

success:function(response){

var data=JSON.parse(response);

if(data.status=="success"){

localStorage.setItem("userid",data.userid);
window.location="profile.html";

}else{

alert("Invalid login");

}

}

});

});
