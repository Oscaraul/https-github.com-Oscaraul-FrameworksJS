$(document).ready(function() {

  $("input").focus(function() {
    $(this).siblings(".info").css("display","block")

  });

  $("input").blur(function() {
    $(this).siblings(".info").css("display","none");

    if (!$(this).val()) {
      $(this).siblings(".error").css("display","block");
    }else {
      $(this).removeClass("campoError");
    }

  })

})
