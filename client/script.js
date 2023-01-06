
let depts = document.getElementsByClassName("img");
let container = document.getElementById("container");

Array.from(depts).forEach(element => {
    element.addEventListener("click", () => {
        container.style.visibility = "hidden";
    });
});