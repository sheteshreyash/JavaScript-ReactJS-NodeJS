
// accessing the children and child-nodes of the dom
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes); // child nodes are not arrays but they are collection (node-list)

let arr = Array.from(document.body.childNodes);
console.log(arr); // now the child nodes are arrays

// accessing the parent and sibling nodes of the dom
// dom collections are read only and they are live
let a = document.body.firstChild;
console.log(a.parentNode);
console.log(a.parentElement)
console.log(a.nextSibling)



// Accessing elements of the dom
console.log("Accessing elements of the dom elements ");

const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red";
};

let b = document.body;
console.log("first child of b is : ", b.firstChild);
console.log("first Element child of b is : ", b.firstElementChild);





// Searching the dom   // comment the below js for correct display of above elements
// const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement("div");
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     "</div>",
//   ].join("");

//   alertPlaceholder.append(wrapper);
// };

// const alertTrigger = document.getElementById("liveAlertBtn");
// if (alertTrigger) {
//   alertTrigger.addEventListener("click", () => {
//     appendAlert("Nice, you triggered this alert message!", "success");
//   });
// }



// Change the card title to red and then green
let ctitle = document.getElementsByClassName("card-title")[0]
ctitle.style.color = "red"

let span = document.getElementById("firstcard")
span.style.color = "Green"

let ct = document.querySelectorAll(".card-title")
ct[0].style.color = "Black";
ct[1].style.color = "grey";
ct[2].style.color = "purple";
console.log(ct)


document.querySelectorAll(".this").style.color = "violet"
