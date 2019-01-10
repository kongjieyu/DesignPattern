// Promise
function loadImg(src){
    let promise = new Promise(function(resolve, reject){
        let img = document.createElement('img')
        img.onload = function(){
            resolve(img)
        }
        img.onerror = function(){
            reject('图片加载失败')
        }
        img.src = src
    })
    return promise
}

let src = 'http://img5.imgtn.bdimg.com/it/u=1526880979,1139364922&fm=26&gp=0.jpg'
//loadImg()返回一个promise
//所以result接口的值是个promise
let result = loadImg(src)

result.then(function(img){
    //part1
    
    alert(`width: ${img.width}`)
    //这里需要return img, 因为在第二个then的时候需要用到
    return img
}).then(function(img){
    //part2
    alert(`height: ${img.height}`)
    //最后用catch捕获异常
}).catch(function(ex){
    //console.log('here')
    alert(ex)
})