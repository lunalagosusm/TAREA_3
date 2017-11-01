function calc2grad(a, b, c) {
    discriminante = Math.pow(b, 2) - 4 * a * c;
    if (discriminante > 0){
        document.getElementById("discri").innerHTML = "Tiene dos soluciones [Δ > 0]"
        document.getElementById("val_x1").innerHTML = "X1: " + parseFloat(((-b) + Math.sqrt(discriminante)) / (2 * a));
        document.getElementById("val_x2").innerHTML = "X2: " + parseFloat(((-b) - Math.sqrt(discriminante)) / (2 * a));
    } else if (discriminante < 0) {
        document.getElementById("discri").innerHTML = "No tiene solucion [Δ < 0]"
    } else {
        document.getElementById("discri").innerHTML = "Tiene una sola solución [Δ = 0]"
        document.getElementById("val_x1").innerHTML = parseFloat((-b) / (2 * a));
    }
}
window.onload = function () {
    var but = document.getElementById("boton");
    but.addEventListener('click', function () {
        var a = parseFloat(document.getElementById("cons_a").value);
        var b = parseFloat(document.getElementById("cons_b").value);
        var c = parseFloat(document.getElementById("cons_c").value);
        calc2grad(a, b, c);
    }, false);
}