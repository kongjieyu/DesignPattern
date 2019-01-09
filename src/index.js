//UML
class People{
    //house 是People的一个属性，类型是House这个类
    constructor(name, house){
        this.name = name
        this.house = house
    }
    saySomething(){

    }
}

class A extends People {
    constructor(name, house){
        super(name, house)
    }
    saySomething(){
        alert('I am A')
    }
}

class B extends People {
    constructor(name, house){
        super(name, house)
    }
    saySomething(){
        alert('I am B')
    }
}

class House {
    constructor(city){
        this.city = city
    }
    showCity(){
        alert(`house in ${this.city}`)
    }
}

let aHouse = new House('beijing')
let a = new A('a', aHouse)
a.saySomething()
aHouse.showCity()
let bHouse = new House('Shanghai')
let b = new B('b', bHouse)
b.saySomething()
bHouse.showCity()