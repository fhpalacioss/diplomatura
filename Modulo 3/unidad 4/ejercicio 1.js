window.addEventListener('DOMContentLoaded', (e) => {
    document.querySelectorAll("#btnColor")[0].addEventListener("click", e => {
        boddyColor(e)
    })
    document.querySelectorAll("#btnColor")[1].addEventListener("click", e => {
        boddyColor(e)
    })
    document.querySelectorAll("#btnColor")[2].addEventListener("click", e => {
        boddyColor(e)
    })
});

function boddyColor(e) {

    if (e.target.classList.contains("red")) {
        document.querySelector("body").style.backgroundColor = "#ff00004d";
    }
    if (e.target.classList.contains("blue")) {
        document.querySelector("body").style.backgroundColor = "#2860b394";
    }
    if (e.target.classList.contains("green")) {
        document.querySelector("body").style.backgroundColor = "#00800080";
    }
}