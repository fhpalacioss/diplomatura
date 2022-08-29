document.addEventListener("DOMContentLoaded", e => {
    document.querySelector("#FormControlTextarea").addEventListener("keyup", e => {
        document.querySelector("#Result").innerHTML = `Contador: ${e.target.value.length}`;
    })

})