$(document).ready(function() {

  $("input").focus(function() {
    $(this).siblings(".info").css("display","block");
    $(this).siblings(".error").css("display","none");

  });

  $("input").blur(function() {
    $(this).siblings(".info").css("display","none");

    if (!$(this).val()) {
      $(this).siblings(".error").css("display","block");
    }else {
      $(this).removeClass("campoError");
    }

  });

  $("input[type='email']").blur(function(){
    var emailIngresado = $(this).val();
    if(!emailIngresado.includes("@")||!emailIngresado.includes(".")){
      $(this).siblings(".info").css("display","none");
      $(this).siblings(".errMail").css("display","block");
      $(this).addClass("campoError");
    }else {
      $(this).siblings(".errMail").css("display","none");
      $(this).removeClass("campoError");
    }
  });

  $( "#target" ).select(function() {
    alert( "Handler for .select() called." );
  });



});

function myFunction() {
document.getElementById("demo").innerHTML = "You copied text!"};
