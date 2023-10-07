const barEl = document.getElementById("bar");
const navEl = document.getElementById("navbar");
const closeEl = document.getElementById("close");

if(barEl){
    barEl.addEventListener("click", () => {
        navEl.classList.add("active");
    })
}

if(closeEl){
    closeEl.addEventListener("click", () => {
        navEl.classList.remove("active");
    })
}