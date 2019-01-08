class Person{
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

let Kong = new Person('May', 18)
Kong.eat()
Kong.speak()

let Chen = new Person('Chen', 25)
Chen.eat()
Chen.speak()