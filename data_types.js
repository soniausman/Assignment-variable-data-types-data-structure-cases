"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string //
let personName = "sonia";
console.log(personName);
// number //
let age = 30;
console.log(age);
// boolean //
let smoke = true;
console.log(smoke);
// null //
let result = null;
console.log(result);
// undefined //
let paper = undefined;
console.log(paper);
// symbol //
let p_1 = Symbol(10);
console.log(p_1);
// unique value //
let p_2 = Symbol(10);
let p_3 = Symbol(10);
console.log(p_2 === p_3);
// another e.g //
let year = Symbol("year");
let user = {
    name: "sonia",
    class: "IT",
    [year]: 2024,
};
console.log(user);
// bigint //
let new_Number = 40000n;
console.log(new_Number);
let another_example = BigInt("50000");
console.log(another_example);
let add = new_Number + another_example;
console.log(add);
