//la clase papa que no se wiiii

class FiguraGeometrica {
    //constructor
    constructor() {
        //puede o no tener alguna implementacion
    }

    //methods
    area() {
        //metodo que se encarga de calcular el area
    }
    perimetro() {
        //metodo para calculo del perimetro
        console.log("Este metodo calcula el perimetro");
    }
}

class Rectangulo extends FiguraGeometrica {
    constructor(base, altura) {
        super();
        this._base = base;
        this._altura = altura;
        this._area = null;
        this._perimetro = null;
        this._acturalizarArea = false;
        this._actualizarPerimetro = false;
    }

    calcularArea() {
        return this._base * this._altura;
    }

    clacularPerimetro() {
        return ((this._base + this._altura) * 2);
    }

    set altura(altura) {
        this._altura = altura;
        //si cambia el valor del area y el perimetro hay que actualizarlos
        this._acturalizarArea = true;
        this._actualizarPerimetro = true;
    }

    set base(base) {
        this._base = base;
        //si cambia el valor del area y el perimetro hay que actualizarlos
        this._acturalizarArea = true;
        this._actualizarPerimetro = true;
    }

    get area() {
        if (this._acturalizarArea || this._area) {
            this._area = this.calcularArea();
        }
        return this._area;
    }

    get perimetro() {
        if (this._actualizarPerimetro || this._perimetro) {
            this._perimetro = this.clacularPerimetro();
        }
        return this._perimetro;
    }
}

const objetoRectangulo = new Rectangulo(2, 5);

console.log(objetoRectangulo.calcularArea());

console.log(objetoRectangulo.clacularPerimetro());


//Spread

/**
 * Es una sintaxis que nos permite a un elemento iterable (arreglo, matriz, vector, cadena), ser extendido
 * 
 * vamos a tener dentro de ese elemento desde cero a mas argumentos que van a pasar por una funcion que se 
 * va a encargar de obtener cada dato sin necesidad de hacer una llamada a cada indice
 */

//tenemos el siguiente arreglo

const arregloOrdenadoMayorMenor = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

console.log(`arregloOrdenadoMayorMenor:${arregloOrdenadoMayorMenor}`);

//vamos a suponer que podemos obtener tantas variables del arreglo como deseeamos a partir del patron

const [valorMasGrande] = arregloOrdenadoMayorMenor;

console.log(`valorMasGrande:${valorMasGrande}`);

//vamos a obtener los elementos a partir del patron

const [valorMasGrande1, valorMasGrande2, valorMasGrande3, ...restoValores] = arregloOrdenadoMayorMenor;

console.log(`valorMasGrande, valorMasGrande2, valorMasGrande3, ...restoValores: ${valorMasGrande1}, ${valorMasGrande2}, ${valorMasGrande3}, ${restoValores}`);

//destructuracion

/**
 * La destructuración es una característica de JavaScript que permite a los desarrolladores desempaquetar valores de arreglos y objetos en variables individuales. 
 * Esto se logra utilizando la sintaxis de asignación en el lado izquierdo de la declaración de la variable. 
 * La destructuración de arreglos es un proceso de asignación de valores a variables. Por ejemplo:
 * */

const numbers = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = numbers;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//La destructuración de objetos es un proceso similar, pero en lugar de utilizar índices de arreglo, se utilizan las claves del objeto. Por ejemplo:

const persona = { nombre: 'Juan', edad: 30, locacion: 'Madrid' };
const { nombre, edad, locacion } = persona;

console.log(nombre);
console.log(edad);
console.log(locacion);

//También es posible utilizar la destructuración para asignar valores predeterminados a las variables si los valores originales no están presentes:

const { name, age, location = 'Madrid' } = persona;

console.log(location);

//Además, la destructuración se puede utilizar en combinación con argumentos de función para simplificar la llamada a una función:

function printPerson({ name, age, location }) {
    console.log(`Nombre: ${name}, Edad: ${age}, Ubicación: ${location}`);
}

const person = { name: 'Juan', age: 30, location: 'Madrid' };
printPerson(person);

//La destructuración es una herramienta muy útil para simplificar el código y hacerlo más legible, especialmente en situaciones en las que se trabaja con estructuras de datos complejas.

//Vamos a realizar una busqueda y queremos simplificarla
const resultadoBusqueda = {
    resultados:
        [
            "resultado 2",
            "resultado 1",
            "resultado 3",
            "resultado 4",
            "resultado 5",
            "resultado 6",
            "resultado 7"
        ],
    total: 7,
    mejorCoincidencia: "resultado 3"
};

console.log(`Resultados de la Busqueda:${resultadoBusqueda}`);

// vamos a suponer que solo nos interesa imprimir la mejor coincidencia
const { mejorCoincidencia } = resultadoBusqueda;

console.log(`mejor Coincidencia :${mejorCoincidencia}`);


//supongamos que queremos cambiar el nombre, derivado a que necesitamos mantener la consistencia del codigo acorde a las nomenclaturas

const { mejorCoincidencia: nuevoNombre } = resultadoBusqueda;

console.log(`Este es mi nuevo nombre: ${nuevoNombre}`);

// vamos a agregar informacion

const copiaResultadoBusqueda = { ...resultadoBusqueda };

console.log(`Copia del Resultado de Busqueda: ${copiaResultadoBusqueda}`);

//modificamos

const copiaResultadoBusquedaModificar = { ...resultadoBusqueda, cadenaBuscada: "resultado 3" };

console.log(`Copia del Resultado de Busqueda Modificada: ${copiaResultadoBusquedaModificar}`);
