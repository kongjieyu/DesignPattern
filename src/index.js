//父类
class People{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    eat(){
        alert(`${this.name} eat something`)
    }
    speak(){
        alert(`My name is ${this.name}, I am ${this.age}`)
    }
}

// let Kong = new People('May', 18)
// Kong.eat()
// Kong.speak()

// let Chen = new People('Chen', 25)
// Chen.eat()
// Chen.speak()
//------------------

//子类： 继承父类
class Student extends People {
    constructor(name,age,number){
        super(name,age)
        this.number = number
    }
    study() {
        alert(`${this.name} studys`)
    }
}

let xiaoming = new Student('xiaoming', 18, 'A1')
xiaoming.study()
alert(xiaoming.number)
xiaoming.eat()
let xiaochen = new Student('xiaochen', 28, 'A2')
xiaochen.speak()
xiaochen.study()
alert(xiaochen.number)