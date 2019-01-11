class Product {
    constructor(name){
        this.name = name
    }
    init() {
        alert('init')
    }
    fn1() {
        alert('fn1')
    }
    fn2() {
        alert('fn2')
    }
}

//Creator是一个工厂
//工厂里面有create函数
class Creator {
    create(name){
        return new Product(name)
    }
}

//测试
//生成一个工厂
let creator = new Creator()
//再通过工厂生成一个Product的实例
let p = creator.create('p1')
p.init()
p.fn1()