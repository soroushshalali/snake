document.body.style.display = "flex";
document.body.style.flexWrap = "wrap";
for (let i = 0; i < 299; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = "rgb(13, 167, 228)";
    div.style.height = "6vh";
    div.style.width = "4%";
    div.style.margin = "1px";
    div.style.transition = "0.3s";
    div.style.border = "1px solid blue"
    document.body.appendChild(div);
}
let div = document.getElementsByTagName("div");
console.log(div);
for (let el of div) {
    el.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "rgb(15, 230, 122)";
        setTimeout(() => {
            e.target.style.backgroundColor = "rgb(13, 167, 228)";
        }, 500)
    })
}