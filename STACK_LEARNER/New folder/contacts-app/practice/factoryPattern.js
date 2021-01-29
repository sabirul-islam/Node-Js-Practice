const createRect = function(width, height){
    return {
        width: width,
        height: height,
        draw: function(){
            console.log('I am rectangle.');
            this.printProperties();
        },
        printProperties: function(){
            console.log("My width is " + this.width);
            console.log("My height is " + this.height);
        }
    }
}

const rectangle1 = createRect(10,8);
rectangle1.draw();

const rectangle2 = createRect(40,30);
rectangle2.draw();