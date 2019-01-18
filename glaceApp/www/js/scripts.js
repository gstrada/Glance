// JavaScript Document
function fadeImg(){
	//$('#usr').fadeOut();
	//$('#logo').fadeOut(3000);
	//$('#logo').fadeIn(3000);
}
function iniciar(){
	setTimeout("location.href='#page1'", 3000);
}
function salir() {
	alert("La aplicación se cerrará");
    navigator.app.exitApp();
}
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true
    })
  });
