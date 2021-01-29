function Square(width) {
    this.width = width;
    this.getWidth = function() {
        console.log('Width is ' + this.width);
        // this.draw();
    }
    
}

Square.prototype = {
    draw: function () {
        this.getWidth();
        console.log('Draw');
    },
    toString: function () {
        return "My width is = " + this.width;
    }
}

const square1 = new Square(10);
const square2 = new Square(5);

console.log(Object.keys(square1));

for(const i in square1){
    console.log(i);
}