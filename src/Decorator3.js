function testDec(isDec){
    return function(target){
        target.isDec = isDec
    }
}
//需要给testDec()传入参数值
@testDec(false)
class Demo{

}
alert(Demo.isDec)