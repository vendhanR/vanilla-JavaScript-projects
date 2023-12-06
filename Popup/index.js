const btnOpneEl = document.getElementById("btn-open");
const btnCloseEl = document.getElementById("btn-close");
const popupEl = document.getElementById("popup-container");

btnOpneEl.addEventListener("click", () => {
    popupEl.classList.toggle("active")
})

btnCloseEl.addEventListener("click", () => {
    popupEl.classList.remove("active")
})
