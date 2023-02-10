function validarn(e){
    var teclado = (document.all)?e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9/d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function interes(){
    var valor=document.formulario.cantidad.value;

    var result=parseInt(valor);

    var interes = result*0.02;

    var total = interes*result;

    document.formulario.sueldo1.value="$" + total;
}

function borrardatos(){
    document.formulario.cantidad.value="";
    document.formulario.sueldo1.value="";
}

function meses(){
    var items = 0; 
    items++;
    document.getElementById("quantity").write(items);
}
