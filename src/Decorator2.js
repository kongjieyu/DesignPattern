//装饰器用来装饰类
@testDec
class Demo{

}
//装饰器函数
function testDec(target){
    target.isDec = true
}

alert(Demo.isDec)


// --------------装饰器原理-----------------------

// @decorator
// class A {}

// //classA 等同于: 把decorator函数执行一遍的返回值

// class A {}
// A = decorator(A) || A;