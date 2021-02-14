$(function() {
  //Función pada desplazar la rueda hacia abajo y cambiar imagen
  $(window).scroll(function() {
    if ($(document).scrollTop()>=200) {
      $(".fondo").css("background-image","url('img/background2.jpg')");
    }else {
        $(".fondo").css("background-image", "url('img/background.jpg')");
    }
  })

//Función que cambia el color del cuadrado del formulario al cambiar la selección del elemento select
  $("#color-favorito").change(function (evento) {
    var colectroDeDatos = $("#color-favorito option:selected").text();
    if (colectroDeDatos=="Azul") {
      $(".cuadrado-color").css("background","#4786F5");
    }
    if (colectroDeDatos=="Verde") {
      $(".cuadrado-color").css("background","#47F547");
    }
    if (colectroDeDatos=="Amarillo") {
      $(".cuadrado-color").css("background","#E9F547");
    }
    if (colectroDeDatos=="Rojo") {
      $(".cuadrado-color").css("background","#F54747");
    }
    if (colectroDeDatos=="Morado") {
      $(".cuadrado-color").css("background","#BB47F5");
    }
    if (colectroDeDatos=="Café") {
      $(".cuadrado-color").css("background","#A97E35");
    }
    console.log(colectroDeDatos);
  });

})
