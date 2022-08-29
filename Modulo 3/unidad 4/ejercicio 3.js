//forma 1
// document.addEventListener("DOMContentLoaded", e => {

//     let AlumonosAprobados = alumnos.filter(e => e.nota >= 7);

//     AlumonosAprobados.forEach(e => {
//         document.querySelector("#FormControlInput").value += `${e.nombre}, `;
//     })
// })


//forma 2
document.addEventListener("DOMContentLoaded", e => {

    alumnos.filter(e => {
        const { nombre, nota } = e;
        if (nota >= 7) {
            document.querySelector("#FormControlInput").value += `${e.nombre}, `;
        }
    });


})