const Rectangle = function(width,height) {
    this.width = width
    this.height = height
    this.draw = function(){
        console.log('I am rectangle.');
        this.printProperties();
    }
    this.printProperties = function(){
        console.log("My width is " + this.width);
        console.log("My height is " + this.height);
    }
}

function myNew(constructor) {
    const obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    const args = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, args.slice(1));
    return obj;
}

const rect4 = myNew(Rectangle, 45, 30);
rect4.draw();