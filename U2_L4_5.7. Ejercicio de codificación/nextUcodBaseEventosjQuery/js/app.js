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
  });

  //Función que muestra el elemento informativo al seleccionar un campo del formulario
  $("input, select").focus(function () {
    $(this).siblings(".info").css("display","block");
    $(this).siblings(".error").css("display","none");
    $(this).siblings("errPswRepeat").css("display","block");
  });

  //Función que muestra error al dejar la selección de un campo y dejarlo vacío

  $("input, select").blur(function(){
    $(this).siblings(".info").css("display","none")
    ;
    if (!$(this).val()) {
      $(this).siblings(".error").css("display","block");
      $(this).addClass("campoError");
    }else {
      $(this).removeClass("campoError");
    }
  });
  //Función que muestra error en el campo mail al no ingresar un mail correcto
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

  //Función que evita que se seleccione el texto en la contraseña y evita que sea copiada
  $("#psw").select(function () {
    alert("No puedes copiar, debes escribir la contraseña en el siguiente campo");
    $(this).attr("oncopy","return false");
    $(this).contextmenu(function(){
      event.preventDefault();
    });
  });

  //Función que evita que se ingresen símbolos en el campo de la contraseña
  $("#psw").keypress(function(event){
    var key = event.which;
    if ((key>32&&key<48)||(key>57&&key<65)||(key>90&&key<97)||(key>122&&key<127)||(key>160&&key<256))
    {
      $(this).siblings(".info").css("display","none");
      $(this).siblings(".errPsw").css("display","block");
      event.preventDefault();
    }else {
      $(this).siblings(".errPsw").css("display","none");
    }
  });
  //Función que verifica si las contraseñas coinciden
  $("#pswRepeat").blur(function(){
    if ($(this).val()!=$("#psw").val()) {
      $(this).siblings(".info").css("display","none");
      $(this).siblings(".errPswRepeat").css("display","block");
      $(this).addClass("campoError");
      $("#psw").addClass("campoError");
    }else if (!$(this).val()) {
      $(this).siblings(".error").css("display","block");
      $(this).addClass("campoError");
    }else {
      $(this).siblings(".errPswRepeat").css("display","none");
      $(this).removeClass("campoError");
      $("#psw").removeClass("campoError");
    }
  });

  //Función que verifica que no haya ningún tipo de error en el formulario para enviarlo
  $("#formulario").submit(function(event){
    $("input, select").trigger("blur");
    if (($("input").hasClass("campoError"))||(contador!=4)) {
      $("#molde").addClass("borde-rojo");
      contador=0;
      event.preventDefault();
    }
  });

  //Función que cambia el estilo a una pieza del rompecabezas al hacer click
  $(".imagen").mousedown(function(){
    var self = $(this);
    $(this).addClass("imagen-seleccionada");
    $(this).on('dragstart', function(event) {
      event.preventDefault();
  });
  //Función anidada que cambia la posición de la pieza si se presiona el click y se mueve
  $(".prueba-container").mousemove(function(event){
    self.css("left", function(){
      var newLeft = event.pageX - 234;
      return newLeft+"px";
    });
    self.css("top", function(){
      var newLeft = event.pageY - 591;
      return newLeft+"px";
    });
  });


})
});
