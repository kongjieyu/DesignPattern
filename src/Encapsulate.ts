这个是ts文件
可以将ts转化为js的网站
http://www.typescriptlang.org/play/

class People{
    name
    age
    protected weight //受保护的属性，只有自己或者子类可以访问
    constructor(name,age){
        this.name = name
        this.age = age
        this.weight = 120
    }
    eat(){
        alert(`${this.name} eats something`)
    }
    speak(){
        alert(`My name is ${this.name}, I am ${this.age}`)
    }
}

class Student extends People {
    number
    private girlfriend
    constructor(name,age,number){
        super(name,age)
        this.number = number
        this.girlfriend = 'xiaoli'
    }
    study() {
        alert(`${this.name} studys`)
    }
    getWeight() {
        alert(`weight ${this.weight}`)
    }
    getGirl() { 
        alert(`girlfriend ${this.girlfriend}`)
    }
}

let xiaoming = new Student('xiaoming', 10, 'A1')
xiaoming.eat()
xiaoming.study()
xiaoming.getWeight()
alert(xiaoming.getGirl())