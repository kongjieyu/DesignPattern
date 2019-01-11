class LoginForm {
    constructor(){
        this.state = 'hide'
    }
    show() {
        if(this.state === 'show'){
            alert('已经显示')
            return null
        }
        this.state = 'show'
        console.log('登陆框显示成功')

    }
    hide(){
        if(this.state === 'hide'){
            alert('已经隐藏')
            return null
        }
        this.state = 'hide'
         console.log('登陆框已经隐藏')
    }
}
var a = function(){

}

//自定义函数+闭包
LoginForm.getInstance = (function(){
    let instance
    //闭包
    return function(){
        if(!instance){
            instance = new LoginForm()
        }
        return instance
    }
})()

//测试
let login1 = LoginForm.getInstance()
login1.hide()
login1.show()
let login2 = LoginForm.getInstance()
login2.show()
console.log('login1===login2', login1===login2)