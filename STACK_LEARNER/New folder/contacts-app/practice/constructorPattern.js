// constructor pattern
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

const rect3 = new Rectangle(10,80);
rect3.draw();