function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;

    if (teclado == 8) return true;

    var patron = /[0-9/d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
    
}

function interes() {
    var valor = document.formulario.cantidad.value;

    var result = parseInt(valor);

    var interes = result * 0.02;

    var total = interes * result;

    document.formulario.sueldo1.value = "$" + total.toFixed(2);
}

function borrardatos() {
    document.formulario.cantidad.value = "";
    document.formulario.sueldo1.value = "";
}

// Función para calcular la inversión
document.getElementById("calcularInversion").addEventListener("click", function () {
    var capitalInvertido = parseFloat(prompt("Capital invertido: "));
    if (isNaN(capitalInvertido)) {
        return;
    }
        var ganancia = capitalInvertido * 0.02;
        alert("Ganancia después de un mes: $" + ganancia.toFixed(2));
});

// Función para calcular las comisiones
document.getElementById("calcularComisiones").addEventListener("click", function () {
    const sueldoBase = parseFloat(prompt("Sueldo base: "));
    if (isNaN(sueldoBase)) {
        return;
    }
    const ventasRealizadas = parseFloat(prompt("Ventas realizadas: "));
    if (ventasRealizadas === null) {
        return;
    }
    const comision = ventasRealizadas * 0.1;
    const sueldoTotal = sueldoBase + comision;

    alert("Sueldo total: $" + sueldoTotal.toFixed(2));
});


// Función para calcular el descuento
document.getElementById("calcularDescuento").addEventListener("click", function () {
    const totalCompra = parseFloat(prompt("Total de la compra: "));
    if (isNaN(totalCompra)) {
        return;
    }
    const descuento = totalCompra * 0.15;
    const totalPagar = totalCompra - descuento;

    alert("Total a pagar: $" + totalPagar.toFixed(2));
});

// Función para calcular la calificación final
document.getElementById("calcularCalificacionFinal").addEventListener("click", function () {
    const calificacionParcial1 = parseFloat(prompt("Calificación del Parcial 1"));
    if (isNaN(calificacionParcial1)) {
        return;
    }
    const calificacionParcial2 = parseFloat(prompt("calificación del Parcial 2"));
    if (isNaN(calificacionParcial2)) {
        return;
    }
    const calificacionParcial3 = parseFloat(prompt("calificación del Parcial 3"));
    if (isNaN(calificacionParcial3)) {
        return;
    }
    const examenFinal = parseFloat(prompt("Examen Final"));
    if (isNaN(examenFinal)) {
        return;
    }
    const trabajoFinal = parseFloat(prompt("Trabajo Final"));
    if (isNaN(trabajoFinal)) {
        return;
    }
    const promedioParcial = (calificacionParcial1 + calificacionParcial2 + calificacionParcial3) / 3;
    const calificacionFinal = promedioParcial * 0.55 + examenFinal * 0.3 + trabajoFinal * 0.15;

    alert("Calificación del Parcial 1: " + calificacionParcial1 +
        "\nCalificación del Parcial 2: " + calificacionParcial2 +
        "\nCalificación del Parcial 3: " + calificacionParcial3 +
        "\nExamen Final: " + examenFinal +
        "\nTrabajo Final: " + trabajoFinal +
        "\nCalificación final: " + calificacionFinal.toFixed(2));
});

// Función para calcular el porcentaje de hombres y mujeres
document.getElementById("calcularPorcentaje").addEventListener("click", function () {
    let hombres = parseInt(prompt("Ingrese el número de hombres:"));
    if (isNaN(hombres)) {
        return;
    }
    let mujeres = parseInt(prompt("Ingrese el número de mujeres:"));
    if (isNaN(mujeres)) {
        return;
    }
    let total = hombres + mujeres;
    let porcentajeHombres = (hombres / total) * 100;
    let porcentajeMujeres = (mujeres / total) * 100;

    alert("Porcentaje de hombres: " + porcentajeHombres.toFixed(2) + "%\n" +
        "Porcentaje de mujeres: " + porcentajeMujeres.toFixed(2) + "%");

});

// Función para calcular la edad
document.getElementById("calcularEdad").addEventListener("click", function () {
    let anioActual = new Date().getFullYear();
    let anioNacimiento = parseFloat(prompt("Año de Nacimiento"));
    if (isNaN(anioNacimiento)) {
        return;
    }
    let edad = anioActual - anioNacimiento;

    alert("Edad: " + edad + " años");

});

// Función para Leer 2 números y hacer operaciones

document.getElementById("problema1").addEventListener("click", function() {
    var num1 = parseFloat(prompt("Ingrese el primer número: "));
    if (isNaN(num1)) {
        return;
    }
    var num2 = parseFloat(prompt("Ingrese el segundo número: "));
    if (isNaN(num2)) {
        return;
    }
    var resultado;

    if (num1 === num2) {
        resultado = num1 * num2;
    } else if (num1 > num2) {
        resultado = num1 - num2;
    } else {
        resultado = num1 + num2;
    }

    alert("El resultado es: " + resultado);
});

// Función para leer 3 numeros y determinar el mayor

document.getElementById("problema2").addEventListener("click", function() {
    var num3 = parseFloat(prompt("Ingrese el primer número: "));
    if (isNaN(num3)) {
        return;
    }
    var num4 = parseFloat(prompt("Ingrese el segundo número: "));
    if (isNaN(num4)) {
        return;
    }
    var num5 = parseFloat(prompt("Ingrese el tercer número:"));
    if (isNaN(num5)) {
        return;
    }
    var resultado = Math.max(num3, num4, num5);

    alert("El número mayor es: " + resultado);
});

// Función para calcular horas extras
document.getElementById("problema3").addEventListener("click", function() {
    var horas = parseFloat(prompt("Ingrese el número de horas trabajadas: "));
    if (isNaN(horas)) {
        return;
    }
    var salario = parseFloat(prompt("Ingrese el salario por hora: "));
    if (isNaN(salario)) {
        return;
    }
    var resultado;

    if (horas <= 40) {
        resultado = horas * salario;
    } else {
        var horasExtras = horas - 40;
        var salarioExtras;

        if (horasExtras <= 8) {
            salarioExtras = 2 * salario;
            resultado = 40 * salario + horasExtras * salarioExtras;
        } else {
            salarioExtras = 3 * salario;
            resultado = 40 * salario + 8 * 2 * salario + (horasExtras - 8) * salarioExtras;
        }
    }

    alert("El salario total es: " + resultado);
});

// Función para calcular utilidades
document.getElementById("problema4").addEventListener("click", function() {
    var salarioMensual = parseFloat(prompt("Ingrese su salario mensual: "));
    if (isNaN(salarioMensual)) {
        return;
    }
    var antiguedad = parseFloat(prompt("Ingrese su antigüedad en años:"));
    if (isNaN(antiguedad)) {
        return;
    }
    var resultado;

    if (antiguedad < 1) {
        resultado = salarioMensual * 0.05;
    } else if (antiguedad >= 1 && antiguedad < 2) {
        resultado = salarioMensual * 0.07;
    } else if (antiguedad >= 2 && antiguedad < 5) {
        resultado = salarioMensual * 0.1;
    } else if (antiguedad >= 5 && antiguedad < 10) {
        resultado = salarioMensual * 0.15;
    } else {
        resultado = salarioMensual * 0.2;
    }

    alert("La utilidad es: " + resultado.toFixed(2));
});