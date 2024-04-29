/* FOCUS */
const inputs = document.querySelectorAll(".formInput");

/* ADD FO0CUS */
function addFocus() {
    let parent = this.parentNode.parentNode
    parent.classList.add("focus")
}

/* REMOVE FOCUS */
function removeFocus () {
    let parent = this.parentNode.parentNode

    if(this.value === ""){
        parent.classList.remove("focus")
    }
}

/* ~~~~~~~~ TO CALL FUNCTION ~~~~~~~~ */
inputs.forEach(input => {
    input.addEventListener("focus", addFocus);
    input.addEventListener("blur", removeFocus)
})