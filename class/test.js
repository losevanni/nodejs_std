console.log('hello world')
function getToken(){
    const num=String(Math.floor(Math.random()*100000)).padStart(6,"0")
    console.log(num)
}

getToken()//여기서 실행
