// premitive data
const n = 10;

function change(n) {
    n = n + 10;
    console.log(n);
}

// change(n);
// console.log(n);

// Objective data
const obj = {
    a: 10,
    b: 20
}

function changeMe(obj) {
    obj.a = obj.a + 100;
    obj.b = obj.b + 100;
    console.log(obj);
}

changeMe(obj);
console.log(obj);