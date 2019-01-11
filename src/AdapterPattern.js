class Adaptee{
    specificRequest(){
        return '德国标准插头'
    }
}

class Target{
    constructor(){
        //旧接口的封装
        this.adaptee = new Adaptee()
    }
    request(){
        let info = this.adaptee.specificRequest()
        return `${info} - 转换器 - 中国标准插头`
    }
}

//测试
let target = new Target()
let res = target.request()
console.log(res)