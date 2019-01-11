class Circle {
    draw(){
        console.log('draw a circle')
    }
}
class Decorator {
    constructor(circle){
        this.circle = circle
    }
    draw(circle){
        this.circle.draw()
        this.setRedBorder(circle)
    }
    setRedBorder(circle){
        console.log('set the red border')
    }
}
//测试
var circle1 = new Circle
circle1.draw()
console.log('-----')
var dec = new Decorator(circle1)
dec.draw(circle1)

// class Circle {
//     draw(){
//         console.log('draw a circle')
//     }
// }
// class Decorator {
//     constructor(circle){
//         this.circle = circle
//     }
//     draw(){
//         this.circle.draw()
//         this.setRedBorder(circle)
//     }
//     setRedBorder(circle){
//         console.log('set the red border')
//     }
// }
// //测试
// var circle = new Circle
// circle.draw()
// console.log('-----')
// var dec = new Decorator(circle)
// dec.draw()
