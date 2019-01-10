//车 父类
class Car{
    constructor(number, name){
        this.number = number
        this.name = name
    }
}

//专车
class ZhuanChe extends Car{
    constructor(number, name, price){
        super(number, name)
        //可以直接在这里固定价格
        // this.price = 2
        this.price = price
    }
}

//快车
class KuaiChe extends Car{
    constructor(number, name, price){
        super(number, name)
        this.price = price
    }
}

class Trip{
    constructor(car, distance){
        this.car = car
        this.distance = distance
    }
    start(){
        console.log(`Number: ${this.car.number}, Name: ${this.car.name}`)
    }
    end(){
        console.log(`Price: ${this.car.price*this.distance}`)
    }
}
let carA = new KuaiChe(1234,'飞度')
let tripA = new Trip(carA, 10)
tripA.start()
tripA.end()
