//una funcion para que cuando se aperture la pagina tome las dimensiones y se adecue al tamño

window.onload = () => {
    //que cargue un par de imagenes como carrucel
    //creamos nuestro conjunto de imagenes
    const imagenes = [
        //aqui van las url
        "https://scontent.fmex5-1.fna.fbcdn.net/v/t39.30808-6/296168318_386014526971683_4109443879099616054_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ivgoMZRy_fEAX_k6Y06&_nc_ht=scontent.fmex5-1.fna&oh=00_AfA8Vzrngu_DtLCRXltaj4tXkeP3kU0URu_6blZV6gK-Tw&oe=63FCFF07",
"https://mii90blog.files.wordpress.com/2014/09/cropped-aqua-eyes-aqua-hair-bisonbison-close-hatsune-miku-headphones-long-hair-twintails-vocaloid-white.png"
    ];

    /**
     * Vamos a crear una API que podamos controlar desde el DOM, para poder acceder a todos los elementos
     * del HTML o documento para esto vamos a necesitar primeramente obtener varios de los id que tenemos
     * en los componentes del documento. Para ello realizaremos diferentes tipos de busqueda
     */

    const display = document.getElementById("display");
    const botones = Array.from(document.getElementsByName("boton"));
    const campoMensaje = document.getElementById("mensaje");
    const mensajes = document.getElementById("mensajes");
    const colorValor = document.getElementById("colorValor");

    ///vamos a crear una funcion que se encargue de ir a la siguiente imagen
    let imagenActual = null;
    /*
    const imagenSiguiente = () => {
        //primero tenemos que acceder al arreglo de las imagenes que tenemos
        if(imagenActual < imagenes.length - 1){
            imagenActual++;
        }else{
            imagenActual = 0;
        }
        display.src = imagenes[imagenActual];
    };

    const imagenAnterior = () => {
        //primero tenemos que acceder al arreglo de las imagenes que tenemos
        if(imagenActual > 0){
            imagenActual--;
        }else{
            imagenActual = imagenes.length - 1;
        }
        display.src = imagenes[imagenActual];
    };*/

    const crearFuncionImagen = (delta) => () => {
        if (!Array.isArray(imagenes) || imagenes.length === 0) {
            return;
        }

        if (imagenActual === null) {
            imagenActual = imagenes[0];
        } else {
            const index = imagenes.indexOf(imagenActual);
            const nextIndex = (index + delta + imagenes.length) % imagenes.length;
            imagenActual = imagenes[nextIndex];
        }

        display.src = imagenActual;
    };

    const imagenSiguiente = crearFuncionImagen(1);
    const imagenAnterior = crearFuncionImagen(-1);

    const pantallaCompleta = () => {
        //esto es una promesa porque nosotros hacemos una solicitud con el request con la esperanza que nos devuelva una respuesta que en este caso es visualizar la pantalla completa
        display.requestFullscreen();
    };

    const mostrarMensajes = () => {
        //vamos a modificar el comportamiento interno un componente de HTML porque nosotros vamos agregar nuevos componentes desde JS, es por ello que ya se convierte en una pagina dinamica
        mensajes.innerHTML += `${campoMensaje.value}<br>`;
        campoMensaje.value = "";
        //si queremos manipular los elementos recien creados tenemos que utilizar createElement y con ellos podemos crear listas, botones, campos de texto, etc, por ejemplo
        //const lista = document.createElement("ul");
        //const lista = document.createElement("Li");
        //elementolista.onclick = pantallaCompleta;
        //elementolista.innerHTML = `${campoMensaje.value}<br>`;
        //lista append(elementolista);
        //mensajes.append(lista);
    }

    const cambiarColor = () => {
        colorValor.click();
    };

    const inicializar = () => {
        //necesito asignar desde la API los eventos
        botones.find(boton => boton.id === "siguiente").onclick = imagenSiguiente;
        botones.find(boton => boton.id === "anterior").onclick = imagenAnterior;
        botones.find(boton => boton.id === "pantallaCompleta").onclick = pantallaCompleta;
        botones.find(boton => boton.id === "mostrarMensajes").onclick = mostrarMensajes;
        botones.find(boton => boton.id === "cambiarColor").onclick = cambiarColor;

        colorValor.onchange = () => {
            mensajes.style.color = colorValor.value;
        }

        //el indice de la imagen
        display.src = imagenes[0];
    };

    inicializar();
};

//sitemap