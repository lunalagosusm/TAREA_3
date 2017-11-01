function calchipotenusa(a,b){
pot1=Math.pow(a,2);
pot2=Math.pow(b,2);
suma=pot1+pot2;
    document.getElementById("val_c").innerHTML=+Math.sqrt(suma);
  }

window.onload = function(){
var but = document.getElementById("boton");
but.addEventListener('click',function(){
    var a=parseFloat(document.getElementById("val_a").value);
    var b=parseFloat(document.getElementById("val_b").value);
    calchipotenusa(a,b);
},false);
}