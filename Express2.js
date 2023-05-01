const express = require('express')
const middle = require('./middleware')
const app = express()
const route = express.Router()

// app.use(middle)
route.use(middle)
app.get('',(req,res)=>{
    res.send(`<h1>Jay</h1>`)
})

route.get('/setting',(req,res)=>{
    res.send(`
    <p>This is settings page ooooooooooooo</p>
    <p>This is settings page ooooooooooooo</p>
    <p>This is settings page ooooooooooooo</p>
    `)
})

app.use('/',route)
app.listen(4444)