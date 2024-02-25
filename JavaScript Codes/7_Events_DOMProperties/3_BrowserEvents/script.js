// browser events
let a = document.getElementsByClassName("container")[0];
console.log(a);

a.onclick = () => {
    let b = document.getElementsByClassName("container")[0];
    b.innerHTML = "Hello Shreyash";
};

// Handling browser events
let y = function (e) {
    console.log(e.target);
    console.log(e.type, e.clientX, e.clientY);
    // alert("Hello");
};
btn.addEventListener(
    "click",
    y
    // var btn = e.target;
    // var btn_id = btn.id;
    // var btn_name = btn.textContent;
    // var btn_class = btn.className;
);

let z = function (e) {
    console.log(e);
    // alert("Hello World 2");
};
btn.addEventListener("click", z);

let x = prompt("Enter your favourite number ");
if (x == "2") {
    btn.removeEventListener("click", y);
}
// on click the button shows the favourite number with hello world sentence
