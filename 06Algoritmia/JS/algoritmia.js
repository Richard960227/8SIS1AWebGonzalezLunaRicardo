
function invertir() {
    const input = document.querySelector('#p1input').value;
    const p1input = input.split(" ").reverse().join(" ");
    document.querySelector('#p1output').textContent = p1input;

//utiliza el método split() para separar las palabras en una matriz, invierte el orden de las palabras utilizando el método reverse(), y finalmente junta de nuevo las palabras en una sola cadena utilizando el método join().
}

function vector(){
var p2_x1 = document.querySelector('#p2-x1').value;
var p2_x2 = document.querySelector('#p2-x2').value;
var p2_x3 = document.querySelector('#p2-x3').value;
var p2_x4 = document.querySelector('#p2-x4').value;
var p2_x5 = document.querySelector('#p2-x5').value;

var p2_y1 = document.querySelector('#p2-y1').value;
var p2_y2 = document.querySelector('#p2-y2').value;
var p2_y3 = document.querySelector('#p2-y3').value;
var p2_y4 = document.querySelector('#p2-y4').value;
var p2_y5 = document.querySelector('#p2-y5').value;

//construir el vector
var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];

var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

//ordeno los vectores
v1 = v1.sort(function(a, b){
  return b-a;
})
v2 = v2.sort(function(a, b){
  return b-a;
})

v2 = v2.reverse();

//el producto escalar

var p2_producto = 0;
for(var i=0; i < v1.length; i++){
  p2_producto += v1[i]*v2[i];
}

document.querySelector('#p2output').textContent='Producto Escalar Minimo: ' + p2_producto;

}

function encontrarpalabras() {
    const input = document.querySelector('#p3input').value;
    const p3input = input.split(",");
    let palabralarga = "";
    let caracteresmax = 0;
    for (const palabra of p3input) {
      const caracteresunicos = new Set(palabra.toUpperCase()).size;
      if (caracteresunicos > caracteresmax) {
        caracteresmax = caracteresunicos;
        palabralarga = palabra;
      }
    }
    document.querySelector('#p3output').textContent = 'La palabra con más caracteres es: ' + palabralarga + ' (' +  caracteresmax + ' caracteres)';

    //Utiliza el método split() para separar las palabras en una matriz y luego usa un bucle for para iterar a través de las palabras y calcular el número de caracteres únicos en cada palabra. Para hacer esto, se convierte la palabra a mayúsculas y se utiliza el objeto Set para eliminar duplicados. Si el número de caracteres únicos es mayor que el máximo anterior, la palabra actual se convierte en la palabra más larga y se actualiza el número máximo de caracteres únicos.
}
