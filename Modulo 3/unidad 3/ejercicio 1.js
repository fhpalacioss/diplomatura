function Calculo() {

    let distancia = parseInt(document.querySelector("#Distancia").value);
    let Result;
    if (distancia < 0) {
        Result = "Ingrese un valor valido"
    } else if (distancia > 0 && distancia <= 1000) {
        Result = "pie"
    } else if (distancia > 1000 && distancia <= 10000) {
        Result = "bicicleta"
    } else if (distancia > 10000 && distancia <= 30000) {
        Result = "colectivo"
    } else if (distancia > 30000 && distancia <= 100000) {
        Result = "auto"
    } else if (distancia > 10000) {
        Result = "avion"
    }
    document.querySelector("#Result").innerHTML = Result;
}