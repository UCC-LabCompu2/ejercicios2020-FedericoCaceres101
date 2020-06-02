
/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarunidades
 * @param (string) id - El id de los inputs de metros, yardas, pies o pulgadas.
 * @param (number) valor - El valor de los inputs de metros, yardas, pies o pulgadas.
 * @return
 */

function cambiarunidades(id, valor) {
    var metro, pulgada, pie, yarda;

    if (valor.includes(",")){
    valor = valor.replace(",", ".");
    }

    if(isNaN(valor)){
        alert("Se ingreso un valor invalido");
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if (id=="metro"){
        metro = valor;
        pulgada = 39.3701*valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
    }else if(id=="pulgada"){
        pulgada = valor;
        metro = 0.0254*valor;
        pie = 0.0833333*valor;
        yarda = 0.0277778*valor;
    }else if (id=="pie"){
        pie = valor;
        metro = 0.3048*valor;
        pulgada = 12*valor;
        yarda = 0.333333*valor;
    }else if (id=="yarda"){
        yarda = valor;
        metro = 0.9144*valor;
        pulgada = 36*valor;
        pie = 3*valor;
    }
    document.lasunidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasunidades.unid_yarda.value = Math.round(yarda*100)/100;
    document.lasunidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasunidades.unid_pulgada.value = Math.round(pulgada*100)/100;

}
function convertirGR(id) {
    var grad, rad;
    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if (id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}
function mostrar_ocultar(valorMO) {
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }
}

function calcularsuma() {
    var num1, num2;

    num1=document.getElementsByName("sum_num1")[0].value;
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML= Number(num1) + Number(num2);
}

function calcularresta() {
    var num1, num2;

    num1=document.getElementsByName("res_num1")[0].value;
    num2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML= Number(num1) - Number(num2);
}

function calcularmult() {
    var num1, num2;

    num1=document.getElementsByName("mul_num1")[0].value;
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML= Number(num1) * Number(num2);

}

function calculardiv() {
    var num1, num2;

    num1=document.getElementsByName("div_num1")[0].value;
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML= Number(num1) / Number(num2);

}

function cargarweb() {
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function cargarres() {
    var urlComp, cant, un;

    urlComp = window.location.href.split("/")[5];
    cant = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById("dist").value = cant + " " + un;

}
function dibujarCirCuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var ymax = canvas.height;
    var margen = 5;
    var xmax = canvas.width;

    ctx.fillStyle="#333899";
    ctx.fillRect(0 + margen,ymax-40-margen,"40", "40");

    ctx.arc(xmax/2, ymax/2,20, 0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
var bandera;
function dibujar(event) {
    var canvas = document.getElementById("canvasadibujar");
    var ctx = canvas.getContext("2d");
    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function(){bandera = true};
    canvas.onmouseup = function(){bandera = false};

    if(bandera){
        ctx.fillRect(posX,posY,5,5);
        ctx.fill;
    }
}
function limpiarcanvas(){
    var canvas = document.getElementById("canvasadibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}
function dibujarcuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var altmax = canvas.height;
    var anchomax = canvas.width;

    // Lineas Horizontales
    ctx.beginPath();
    for(var i=0;i<altmax;){
        ctx.moveTo(0,i);
        ctx.lineTo(anchomax,i);
        ctx.strokeStyle = "#991219";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    // Lineas Verticales

    ctx.beginPath();
    for(var i=0;i<anchomax;){
        ctx.moveTo(i,0);
        ctx.lineTo(i,altmax);
        ctx.strokeStyle = "#990f8a";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    // Eje x

    ctx.beginPath();
    ctx.moveTo(0,altmax/2);
    ctx.lineTo(anchomax,altmax/2);
    ctx.strokeStyle = "rgba(6,0,6,0.98)";
    ctx.stroke();
    ctx.closePath()

    // Eje y

    ctx.beginPath();
    ctx.moveTo(anchomax/2,0);
    ctx.lineTo(anchomax/2,altmax);
    ctx.strokeStyle = "rgba(6,0,6,0.98)";
    ctx.stroke();
    ctx.closePath()

}
function dibujarimagen(posX, posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX, posY);
    var img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;

    img.onload = function(){
        ctx.drawImage(img,posX,posY);
    }


}