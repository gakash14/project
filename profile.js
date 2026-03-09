
var userid=localStorage.getItem("userid");

$(document).ready(function(){

$.ajax({

url:"php/get_profile.php",
type:"POST",

data:{userid:userid},

success:function(res){

if(res){

var data=JSON.parse(res);

$("#age").val(data.age);
$("#dob").val(data.dob);
$("#contact").val(data.contact);

}

}

});

});

$("#updateBtn").click(function(){

var age=$("#age").val();
var dob=$("#dob").val();
var contact=$("#contact").val();

$.ajax({

url:"php/update_profile.php",

type:"POST",

data:{
userid:userid,
age:age,
dob:dob,
contact:contact
},

success:function(){

alert("Profile Updated");

}

});

});
