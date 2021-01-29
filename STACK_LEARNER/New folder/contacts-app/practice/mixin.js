function mixin(target, ...sources){
    Object.assign(target.prototype,...sources);
}

const canWalk = {
    walk: function(){
        console.log('Walking');
    }
}

const canEat = {
    eat: function(){
        console.log('Eating...');
    }
}

const canSwim = {
    swim: function(){
        console.log('Swimming...');
    }
}

// const person = Object.assign({},canWalk,canEat);
// person.name = 'shimul';

function Person(name) {
    this.name = name;
}
// Object.assign(Person.prototype,canWalk,canEat);
mixin(Person,canWalk,canEat)
const person = new Person('shimul');
console.log(person);

function GoldFish(name) {
    this.name = name;
}
mixin(GoldFish,canSwim,canEat);

const fish = new GoldFish('kal baush');
console.log(fish);