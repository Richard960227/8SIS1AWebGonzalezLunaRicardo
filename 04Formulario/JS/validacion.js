function validar(formulario) {
    var nombre = formulario.nombre.value.trim();
    var correo = formulario.correo.value.trim();
    var edad = formulario.edad.value.trim();
    
    if (nombre === "") {
      alert("Nombre es Requerido");
      formulario.nombre.focus();
      return false;
    }
  
    if (nombre.length < 3) {
      alert("Escriba por lo menos 3 caracteres en el campo nombre");
      formulario.nombre.focus();
      return false;
    }
  
    if (!/^[a-zA-Z\u00C0-\u00FF ]+$/.test(nombre)) {
      alert("Escriba unicamente letras en el campo nombre");
      formulario.nombre.focus();
      return false;
    }
  
    if (correo === "") {
      alert("Correo es Requerido");
      formulario.correo.focus();
      return false;
    }
  
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo)) {
      alert("Correo electrónico no válido");
      formulario.correo.focus();
      return false;
    }
  
    if (isNaN(edad)) {
      alert("El valor ingresado en la edad no es un número");
      formulario.edad.focus();
      return false;
    }
  
    alert("Validación Exitosa");
    return true;
  }

//Utiliza expresiones regulares para validar el nombre y el correo electrónico, y verifica si el valor de la edad es un número antes de continuar con la validación. El uso de trim() elimina espacios en blanco al principio y al final de los valores de los campos antes de validarlos.Test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada.Focus() hace que, cuando el usuario comience a escribir usando el teclado, el texto aparezca en el campo de texto, en pocas palabras que se enfoque el input o textarea.