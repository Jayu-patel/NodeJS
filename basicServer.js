const http = require('http')

http.createServer((req,res)=>{
    res.write("<h1>Hello world, Im JAY PATEL</h1>")
    res.end()
}).listen(4000)

console.log("Hello world")