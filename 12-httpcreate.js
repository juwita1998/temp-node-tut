const http = require('http')

const server = http.createServer((req,res)=>{
   if(req.url === '/'){
      return res.end('welcome to our home page')
   
   }

   if(req.url === '/about'){
      return res.end('here is our short history')
  
   }
  return res.end(`
   <h1>oops!</h1>
   <p>we cant seem to find the page that you are looking for</p>
   <a href="/">back home</a>
   `)
 
})

server.listen(8080)
