const {readFileSync,writeFileSync} = require('fs')


const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
console.log(first,second)

writeFileSync('./content/result-sync.txt',`here is the result : ${first},${second}`,{flag:'a'}
)

console.log("done with this task")
console.log("starting the next one")


const http = require('http')

const server = http.createServer((req,res) =>{

    if(req.url === '/'){
       return res.end('this is the home page')
    }

    if(req.url === '/about'){
       return res.end('about page')
    }
    return  res.end('page not found')



})


server.listen(5000,() =>{
     console.log('server is listening to port : 5000')
})