let t = document.body.firstElementChild.firstElementChild;
console.log(t);

console.log(t.rows); // collection of tr elements
console.log(t.caption); // reference to <caption>
console.log(t.tHead); // reference to <thead>
console.log(t.tHead.firstElementChild);
console.log(t.tFoot);    // reference to <tfoot>
console.log(t.tBodies);     // Collection of <tbody> elements
console.log(t.tBodies.rows);
console.log(t.rows[0]);
console.log(t.rows[0].rowIndex);    // Row number starting from 0

typeof window; // object
typeof document; // object


let id1 = document.getElementById("id1")
console.log(id1)
console.log(id1.matches(".class"))
console.log(id1.matches(".box"));   // returns true or false
console.log(id1.closest(".box"));   // looks for the nearest ancestor that matches the given css-selector
console.log(id1.contains(sp1))
