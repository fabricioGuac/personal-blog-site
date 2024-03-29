// Sets the switch checkbox into the variable mode and the document body in the variable body
const mode = document.getElementById("switch");
const body = document.body;
// makes it so that when the checkbox changes it calls a function that either adds or removes the Dark-mode class based on the checkbox state
mode.addEventListener("change", () => {
    mode.checked ? body.classList.add("Dark-mode") : body.classList.remove("Dark-mode");
})
