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
    food: "Zebra",
    eat: function(){
        'strict use';
        return `${this.name} eats animals like the ${this.food}. ${this.name} is ${this.age} Years Old! I Hope ${Zebra.name} survives!`;
    }

}
console.log(Zebra.run());
console.log(Lion.eat());
// Principle 3

// code example for New Binding
function slayMonster(fire) {

    this.critHit = 'Critical Strike';
   this.fire = fire;
   this.announce = function() {

        console.log(this.critHit + this.fire);
       console.log(this);
   };

}

const Dragon = new slayMonster('Dragon');

Dragon.fire();





// Principle 4

// code example for Explicit Binding


const obj = {
    "name": "Techcon",
    
}
function explicit(name, speaker1, speaker2, speaker3){
    return `Hello, welcome to the Convention ${name} where we talk all things Tech. The Speakers are ${speaker1}, ${speaker2}, ${speaker3}`
}

const speakers = ["Techcon" ,"Amazon", "Microsoft", "Apple"]
console.log(explicit.call(obj, ...speakers ));