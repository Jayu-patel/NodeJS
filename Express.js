//Create pages with expressJS
const express = require("express")
const app = express()

const path = require("path")
const publicPath = path.join(__dirname,'public')

// app.get("",(req,res)=>{
//     res.send("Hello world")
// })

app.get("/contact",(req,res)=>{
    res.send("This is contact page")
})

//Routing params
// htpps://websitename/home?name=Jay

app.get("",(req,res)=>{
    res.send(`Hello world., Im ${req.query.name}`)
})

//Render HTML and JSON data

app.get("",(req,res)=>{
    res.send(`
    <h1>Hello world</h1>
    <button style="margin-right: 10px">click me</button>
    <a style="margin-right: 10px" href="/jsonData" >Go to json data page</a>
    <a href="/contact" >Go to contact page</a>
    `)
})

app.get('/contact',(req,res)=>{
    res.send(`
    <h1>This is Contact page</h1>
    <p>Hello everyone this is contact page</p>
    <a href="/" >Go to HOME page</a>
    `)
})

app.get("/jsonData",(req,res)=>{
    res.send([
        {
            name : "jay",
            age : 20
        }
    ])
})

//HTML pages with html file
app.use(express.static(publicPath))

//HTML pages without .html on site

app.set('view engine', 'ejs')

app.get('/index',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/second',(req,res)=>{
    res.sendFile(`${publicPath}/second.html`)
})

app.get('/profile',(req,res)=>{
    const user = {
        name: "Jayu",
        age: 20
    }
    res.render('profile',{user})
})

app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/404page.html`)
})

app.listen(5550)