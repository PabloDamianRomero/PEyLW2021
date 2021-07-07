

function ResetearColoresFormulario()
{
    document.getElementById("txtPelicula").style.backgroundColor = "white";
    document.getElementById("txtDirector").style.backgroundColor = "white";
    document.getElementById("txtAnio").style.backgroundColor = "white";
    document.getElementById("txtCalificacion").style.backgroundColor = "white";
    document.getElementById("txtOpinion").style.backgroundColor = "white";    

}

function Validar()
{
    // Vampos controlando de a uno
    var ControlAValidar, Numero;
    var ValidacionOK;

    ValidacionOK= true; // Arranco en true pero si luego algun validacion falla vuelve a false

    ControlAValidar=  document.getElementById("txtPelicula");
    if (ControlAValidar.value == "")
    {
        ControlAValidar.style.backgroundColor = "red";
        ValidacionOK= false;
    }

    ControlAValidar=  document.getElementById("txtDirector");
    if (ControlAValidar.value == "")
    {
        ControlAValidar.style.backgroundColor = "red";
        ValidacionOK= false;
    }

    // Aqui tambien controlamos que sea un numero   
    ControlAValidar=  document.getElementById("txtAnio");
    if (ControlAValidar.value == "" || isNaN(ControlAValidar.value))
    {
        ControlAValidar.style.backgroundColor = "red";
        ValidacionOK= false;
    }
    else
    {    // Ya sabemos que es número, ahora veamos el rango
        Numero= parseInt(ControlAValidar.value);
        if (Numero < 1900 || Numero > 2020)
        {
            ControlAValidar.style.backgroundColor = "red";
            ValidacionOK= false;
        }
    }

    // Igual para la calificacion
    ControlAValidar=  document.getElementById("txtCalificacion");
    if (ControlAValidar.value == "" || isNaN(ControlAValidar.value))
    {
        ControlAValidar.style.backgroundColor = "red";
        ValidacionOK= false;
    }
    else
    {
         // Ya sabemos que es número, ahora veamos el rango
         Numero= parseInt(ControlAValidar.value);;
         if (Numero < 1 || Numero > 10)
         {
             ControlAValidar.style.backgroundColor = "red";
             ValidacionOK= false;
         }
    }
    
    ControlAValidar=  document.getElementById("txtOpinion");
    if (ControlAValidar.value == "")
    {
        ControlAValidar.style.backgroundColor = "red";
        ValidacionOK= false;
    }
    
    // La variable "ValidacionOK" tienen true si todas las validaciones dieron ok
    return ValidacionOK;

}

function IngresarPelicula()
{
    // Primero pongo el formulario en blanco para empezar el barrido de cero
    // Esto es por las dudas ya haya algunos campos pintados que el usuario haya ido
    // rellenando por lo tanto no tienen que estar más pintados.
    ResetearColoresFormulario();

    var ResultadoValidacion;

    ResultadoValidacion= Validar();
    if (!ResultadoValidacion)
        return;     // Si la validación devolvió false, salimos

    // Aqui ingresamos la pelicula.
    // Ya sabemos que todos los campos son válidos
    var ResumenPeli, Calificacion;

    Calificacion= parseInt(document.getElementById("txtCalificacion").value);

    ResumenPeli=   
        "Nombre: " + document.getElementById("txtPelicula").value + " (" + document.getElementById("txtAnio").value + ")" + "<br />" + 
        "Director: " + document.getElementById("txtDirector").value + "<br />" + 
        "Calificacion:" + Calificacion + "<br />" + 
        "Opinion: " + document.getElementById("txtOpinion").value;
    
    // Segun la calificacion donde va ahora
    var DivAGuardar;

    switch (Calificacion)
    {
        case 1:
        case 2:
        case 3:
            DivAGuardar= document.getElementById("PMalas");
            break;

        case 4:
        case 5:
        case 6:
            DivAGuardar= document.getElementById("PRegulares");
            break;
            
        case 7:
        case 8:
        case 9:
        case 10:
            DivAGuardar= document.getElementById("PBuenas");
            break;

    }

    /* Otra forma de hacerlo
    if (Calificacion <= 3)
        DivAGuardar= document.getElementById("PMalas");
    else
      if (Calificacion > 3 && Calificacion <= 6)
        DivAGuardar= document.getElementById("PRegulares");
      else
        DivAGuardar= document.getElementById("PBuenas");
    */

    DivAGuardar.innerHTML+= ResumenPeli + "<hr />";


    // LIMPIAMOS
    document.getElementById("txtPelicula").value= "";
    document.getElementById("txtDirector").value= "";
    document.getElementById("txtAnio").value= "";
    document.getElementById("txtCalificacion").value= "";
    document.getElementById("txtOpinion").value= "";   

}