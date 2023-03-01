/**
 * Vamos a crear una API rest que nos permite obtener información
 * sobre los diferentes pokemones a partir de la url:
 * https://pokeapi.co
 */

const pokeApiUrl = "https://pokeapi.co/api/v2/";

//vamos a crear una funcion para obtener los elementos de la pokedex

const pokedex = () => {

    /** necesitamos un objeto que nos permita acceder a todos los campos para mostrar todas las estadisticas del pokemon, 
     * su busqueda e interaccion para visualizar cada elemento de todos los pokemones
     */

    const pokemonStatElements = {
        hp: document.getElementById("pokemonStathp"),
        attack: document.getElementById("pokemonStatAttack"),
        defense: document.getElementById("pokemonStatDefense"),
        special: document.getElementById("pokemonStatSpecial"),
        specialDefense: document.getElementById("pokemonStatSpecialDefense"),
        speed: document.getElementById("pokemonStatSpeed")
    };

    //necesito un auxiliar que nos permita utilizat las clases del archivo de la css para los cambios del tipo de mokemon y su imagen

    let currentClassType = null;

    //esta es la imagen que vamos a utilizar para crear la cargar

    const imageTemplate = "<img class='pokedisplay' src='{imgSrc}' alt='pokedisplay'>";

    //este objeto sirve para guardar las otras rutas de las imagenes cuando no encuentra al pokemon y la de carga

    const images = {
        imgPokemonNotFound: "../img/404.png",
        imgLoading: "../img/loading.gif",
    };

    //necesito otro objeto que contenga las referencias de los elementos que se van a desplegar

    const container = {
        imgContainer: document.getElementById("pokedisplay-container"),
        pokemonTypesContainer: document.getElementById("pokemonTypes"),
        pokemonNameElement: document.getElementById("pokemonNameResult"),
        pokemonAbilitiesElement: document.getElementById("pokemonAbilities"),
        pokemonMovesElement: document.getElementById("pokemonMoves"),
        pokemonIdElement: document.getElementById("pokemonId")
    };

    //necesito un objeto para las referencias de los botones

    const buttons = {
        all: Array.from(document.getElementById("btn")),
        search: document.getElementById("btnSearch"),
        next: document.getElementById("btnUp"),
        previous: document.getElementById("btnDown")
    };

    //nuesta primera funcion que se encarga de mostrar el tipo de pokemon acorde a la busqueda deacuerdo al consumo de la API

    const processPokemonTypes = (pokemonData) => {
        let pokemonTpe = "";
        //utilizo la primera clase para dar color a los contenedores de acuerdo al tipo de pokemon
        const firstClass = pokemonData.types[0].type.name;

        pokemonData.types.forEach((pokemonTypeData) => {
            pokemonType += `<span class="pokemon-type ${pokemonTypeData.type.name}" > ${pokemonTypeData.type.name}</span>`;
        });
        //se quitan la clase previa del contenedor del tipo de pokemon de acuerdo a sus habilidades y movimientos del nuevo
        if (currentClassType) {
            container.pokemonMovesElement.classList.remove(currentClassType);
            container.pokemonAbilitiesElement.classList.remove(currentClassType);
        }
        //se agregan los nuevos
        container.pokemonMovesElement.classList.add(firstClass);
        container.pokemonAbilitiesElement.classList.add(firstClass);
        currentClassType = firstClass;
        //agrego las etiqueta creadas de acuerdo a nusestro forEach
        container.pokemonTypesContainer.innerHTML = pokemonType;
    }

    //para las estadisticas del pokemon

    const processPokemonStats = (pokemonData) => {
        //ocuparemos el operador ? para un encadenamiento opcional
        pokemonData.stats?.forEach((pokemonStatsData) => {
            //tengo que evaluar las estadisticas acorde al contenedor del tipo de pokemon si es que existe
            switch (pokemonStatsData.stat.name) {
                case "hp":
                    pokemonStatElements.hp.innerHTML = pokemonStatsData.base_stat;
                    pokemonStatElements.hp.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%)`;
                    break;
                case "attack":
                    pokemonStatElements.attack.innerHTML = pokemonStatsData.base_stat;
                    pokemonStatElements.attack.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%)`;
                    break;
                case "defense":
                    pokemonStatElements.defense.innerHTML = pokemonStatsData.base_stat;
                    pokemonStatElements.defense.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%)`;
                    break;
                case "special":
                    pokemonStatElements.special.innerHTML = pokemonStatsData.base_stat;
                    pokemonStatElements.special.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%)`;
                    break;
                case "specialDefense":
                    pokemonStatElements.specialDefense.innerHTML = pokemonStatsData.base_stat;
                    pokemonStatElements.specialDefense.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%)`;
                    break;
                    case "speed":
                        pokemonStatElements.speed.innerHTML = pokemonStatsData.base_stat;
                        pokemonStatElements.speed.style = `background: linear-gradient(0deg, rgba(0,118,255,1) ${pokemonStatData.base_stat}%, rgba(0,0,0,1) ${pokemonStatData.base_stat}%)`;
                        break;
            }
        });
    };

    //procesar los movimientos del pokemon en su respectivo contenedor

    const processPokemonMoves = (pokemonData) => {
        let pokemonMovesContent = "";

        pokemonData.moves?.forEach((pokemonMove) => {
            //voy a ir agregando los movimiento en formato de lista en su contenedor
            pokemonMovesContent += `<li>${pokemonMove.name}</li>`;
        });
        //lo imprimo en el html la lista
        container.pokemonMovesElement.innerHTML = pokemonMovesContent;
    }

    const processPokemonAbilities = (pokemonData) => {
        let pokemonAbilitiesContent = "";

        pokemonData.abilities?.forEach((pokemonAbility) => {
            //voy a ir agregando los movimiento en formato de lista en su contenedor
            pokemonAbilitiesContent += `<li>${pokemonAbility.ability.name}</li>`;
        });
        //lo imprimo en el html la lista
        container.pokemonAbilitiesElement.innerHTML = pokemonAbilitiesContent;
    }

    //vamos a poner a la imagen cargando y deshabilitar los botones porque esta buscando al pokeon y no queremos que se envie otra solicitud mientras exista la busqueda

    const setLoading = () => {
        container.imgContainer.innerHTML = imageTemplate.replace("{imgSrc}", images.imgLoading);
        //deshabilito los botones
        buttons.all.forEach(button => button.disable = true);
    }

    //volver habilitarlos

    const setLoadingComplete = () => {
        buttons.all.forEach(button => button.checkDisabled(button));
    }

    //async, await

    /**
     * vamos a utilizar una funcion fetch la cual realizara la consulta correspondiente en la API solicitando los elementos
     * de los contenedores acorde al tipo de peticion (nombre, stat, movimientos, habilidades, etc, obteniendo los recursos por medio de la url, o de forma local,
     * cuyo bojeto ayuda a establecer los parametros de la promesa.
     * Una promesa nos devuelve un then y un catch de acuerdo a un objeto json para su interpretacion)
     */

    const getPokemonData = async (pokemonName) => fetch(`${pokeApiUrl}pokemon/$pokemonName`, {
        //debemos de hacerlo por medio de un metodo
        method : 'GET',
        //del tipo de cabecera que debe de ejecutar dicha peticion
        headers : {
            //formato json o xml
            'Content-Type': 'application/json'
        },
        /**
         * Cuando la peticion se devuelve al body se utiliza:
         * body : JSON.stringify(miObjetoJson)
         * 
         * Esto sirve cuando la peticion es de tipo post o put y se debe
         * de convertir a una cadena
         */
    }).then((res) => res.json()).catch((error) => ({requestFailed: true}));

    //una funcion para deshabilitar los botones

    const checkDisabled = (button) => {
        button.disable = button.id === "btnDown" && container.pokemonIdElement.value <= 1;
    }

    //una funcion para validar que se reciba el nombre o id y se realice la busqueda del pokemon y proces una respuesta al mismo tiempo

    const setPokemonData = async (pokemonName) => {
        //primero ya que obtenemos el nombre del pokemon debemos validar y obtener todos los elementos
        if(pokemonName) {
            //obtener la imagen
            setLoading();
            //realizar la consulta pero para ello debo primero esperar hasta obtener una respuesta para ello utilizaremos await
            const pokemonData = await getPokemonData(typeof pokemonName === typeof "" ? pokemonName.toLowerCase() : pokemonName);
            if(pokemonData.requestFailed){
                //no hay pokemon
                container.imgContainer.innerHTML = imageTemplate.replace("{imgSrc}", images, imgPokemonNotFound);
            }else{
                //si encuentra al pokemon y debo de obtener la imagen, datos, estadisticas, movimientos y habilidades
                container.imgContainer.innerHTML = `${imageTemplate.replace("imgSrc", pokemonData.sprites.front_default)} ${imageTemplate.replace("imgSrc", pokemonData.sprites.front_shiny)}`;

                //nombre
                container.pokemonNameElement.innerHTML = pokemonDataname;

                //el resto de los datos
                processPokemonTypes(pokemonData);

                processPokemonStats(pokemonData);

                processPokemonAbilities(pokemonData);

                processPokemonMoves(pokemonData);
                
            }
        }else{
            //la alerta
            Swal.fire({
                title: "Errror nwn",
                text: "Ingresa el nombre de un pokemon primero",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        }
    };

    const triggers = () => {
        //se le vincula la funcion de busqueda al boton
        buttons.search.onclick = () => setPokemonData(pokemonInput.value);
        //se vincula la funcion de busqueda al campo de texto
        pokemonInput.onkeyup = (event)=>{
            event.preventDefault();
            if(event.key == "Enter"){
                setPokemonData(pokemonInput.value);
            }
        }
        //se vincula la funcion de arriba y abajo
        buttons.next.onclick = () => setPokemonData(+container.pokemonIdElement.value+1);
        buttons.previous.onclick = () => setPokemonData(+container.pokemonIdElement.value-1);
    };
    setLoadingComplete();
    triggers();
};

windows.onload = pokedex;