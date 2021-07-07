function reestablecerBorde($col) {
    var $largo, $i;
    $largo = $col.length;
    for ($i = 0; $i < $largo; $i++) {
        $col[$i].style.border = "";
    }
}

function limpiarContenido($col) {
    var $i, $largo;
    $largo = $col.length;
    for ($i = 0; $i < $largo; $i++) {
        $col[$i].value = "";
    }
}


function capturarElem($pelicula, $director, $anio, $calificacion, $opinion) {
    var $colElementos, $resultadoValidacion;
    $colElementos = [$pelicula, $director, $anio, $calificacion, $opinion];
    reestablecerBorde($colElementos);
    $resultadoValidacion = validar($colElementos);
    if ($resultadoValidacion) {
        generarSalida($colElementos);
        limpiarContenido($colElementos);
    }
}

function validar($colElementos) {
    var $i, $largo, $esValido, $numero, $anioActual;
    $esValido = true;
    $i = 0;
    $largo = $colElementos.length;
    while (($i < $largo)) {
        switch ($i) {
            case 0: // pelicula
                if ($colElementos[0].value == "") { // si su valor está vacío
                    $colElementos[0].style.border = "1px solid red";
                    $esValido = false;
                }
                break;
            case 1: // director
                if ($colElementos[1].value == "") { // si su valor está vacío
                    $colElementos[1].style.border = "1px solid red";
                    $esValido = false;
                }
                break;
            case 2: // anio
                if (($colElementos[2].value == "") || (isNaN($colElementos[2].value))) { // si su valor está vacío o no es número
                    $colElementos[2].style.border = "1px solid red";
                    $esValido = false;
                } else {
                    $numero = parseInt($colElementos[2].value);
                    $anioActual = new Date();
                    $anioActual = $anioActual.getFullYear();
                    if (($numero < 1900) || ($numero > $anioActual)) {  // si rango incorrecto
                        $colElementos[2].style.border = "1px solid red";
                        $esValido = false;
                    }
                }
                break;
            case 3: // calificacion
                if (($colElementos[3].value == "") || (isNaN($colElementos[3].value))) {
                    $colElementos[3].style.border = "1px solid red";
                    $esValido = false;
                } else {
                    $numero = parseInt($colElementos[3].value);
                    if (($numero < 1) || ($numero > 10)) {
                        $colElementos[3].style.border = "1px solid red";
                        $esValido = false;
                    }
                }
                break;
            case 4: // opinion
                if ($colElementos[4].value == "") {
                    $colElementos[4].style.border = "1px solid red";
                    $esValido = false;
                }
                break;
        }
        $i++;
    }
    return $esValido;
}


function generarSalida($colElementos) {
    var $lugarSalida, $valorCalificacion, $contenido;
    $valorCalificacion = $colElementos[3].value;
    $contenido = "Pelicula: " + $colElementos[0].value + "<br>Director: " + $colElementos[1].value + "<br>Calificación: " + $colElementos[2].value + "<br>Opinión: " + $colElementos[3].value + "<br><hr />";
    if (($valorCalificacion >= 1) && ($valorCalificacion <= 3)) {
        $lugarSalida = document.getElementById('PMalas');
    } else if (($valorCalificacion >= 4) && ($valorCalificacion <= 6)) {
        $lugarSalida = document.getElementById('PRegulares');
    } else if (($valorCalificacion >= 7) && ($valorCalificacion <= 10)) {
        $lugarSalida = document.getElementById('PBuenas');
    }
    $lugarSalida.innerHTML += $contenido;
}
