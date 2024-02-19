// Part 1
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

console.log(document.getElementsByTagName("span")[0]);
console.dir(document.getElementsByTagName("span")[0]);

console.log(first.innerHTML, "\n");
console.log(first.outerHTML);



// Part 2
console.log(document.body.firstChild.data);
console.log(document.body.firstChild.nodeValue);
// console.log(document.body.textContent)



// part 3 - Attribute Methods
let a = first.getAttribute("class1");
console.log(a);
console.log(first.attributes);
console.log(first.dataset);
console.log(first.dataset.game);
console.log(first.dataset.player);



// HTML insertion methods
let b = document.getElementsByTagName("div")[0];
// b.innerHTML = b.innerHTML + '<h1>Hello Shreyash This is message is inserted into html page </h1>';
let div = document.createElement("div");
div.innerHTML = "<h1>Hello Shreyash This is message is inserted into html page </h1>";
b.appendChild(div)
b.append(div);
b.prepend(div)
b.before(div)
b.after(div)
// b.replaceWith(div)



// Insert Adjacent methods
// first.innerAdjacentHTML("beforebegin", '<div class = "firstCont"> beforebegin</div>');
// first.innerAdjacentHTML("beforeend", '<div class = "firstCont"> beforeend</div>');
// first.innerAdjacentHTML("afterbegin", '<div class = "firstCont"> afterbegin</div>');
// first.innerAdjacentHTML("afterend", '<div class = "firstCont"> afterend</div>');


