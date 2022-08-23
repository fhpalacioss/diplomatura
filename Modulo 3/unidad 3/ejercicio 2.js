function Calculo() {
    let finalArray = new Array();
    document.querySelectorAll("#valor").forEach(e => {

        if (e.value != "")
            finalArray.push(parseInt(e.value));

    })

    let max = Math.max.apply(null, finalArray);
    document.querySelector("#Result").innerHTML = max;

}