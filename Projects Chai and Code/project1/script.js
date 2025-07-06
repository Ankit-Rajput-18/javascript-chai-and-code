const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");
boxes.forEach(function(item) {
    item.addEventListener("click", function(e) {
        if (e.target.id === "1") {
            body.style.backgroundColor = "red";
        }
        if (e.target.id === "2") {
            body.style.backgroundColor = "green";
        }
        if (e.target.id === "3") {
            body.style.backgroundColor = "blue";
        }
        if (e.target.id === "4") {
            body.style.backgroundColor = "yellow";
        }
    });
});