/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function test(name){
    return `Hello ${this.name}`;
}

console.log(test("Cody"))

// Principle 2

// code example for Implicit Binding
const Zebra = {
    name: "Zebran",
    age: 34,
    food: "hay",
    run: function(){
        'strict use';
        return `${this.name} Loves to run`;
    }

}
const Lion = {
    name: "Mufasa",
    age: 40,
    food: "Zebras",
    eat: function(){
        'strict use';
        return `${this.name} eats animals like ${Zebra.name}`;
    }

}
console.log(Zebra.run());
console.log(Lion.eat());
// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding