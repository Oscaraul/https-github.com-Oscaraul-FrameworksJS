$( document ).ready(function() {
  $("body").click(function(){
    //Realiza las selecciones en este bloque de código
    $("div > h1").css("color","yellow");
    $("div > a").find("i").css("color","yellow");
    $("#fh5co-main-nav").find(":contains('Home')").css("color","yellow");
    $("img[src$='2.jpg']+a").find(":contains('15 images')").css("color","yellow");

    $("div[data-section='about'] div:nth-child(2)").find("h2:contains('Jean Smith') ~ p").css("color","yellow");

  });
});
