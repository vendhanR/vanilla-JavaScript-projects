const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

btnEl.addEventListener("click", () => {
    const notifyEl = document.createElement("div");
    notifyEl.classList.add("toast")
    containerEl.appendChild(notifyEl);
    notifyEl.innerText = "successfully added to card"

    setTimeout(() => {
        notifyEl.remove()
    },3000)
})
