const path = require("path")
const fs = require('fs')
const dirPath = path.join(__dirname,'files')
const file = `${dirPath}/first.txt`
console.log(dirPath)

fs.writeFileSync(dirPath+'/first.txt','Create file with fs')

fs.readFile(file,'utf8',(err,item)=>{
    console.log(item)
})

fs.appendFile(file,' updated data',(err)=>{
    if(!err) console.log('file updated')
})

fs.readdir(dirPath,(err,file)=>{
    file.forEach((item)=>{
        console.log(item)
    })
})

fs.rename(file,`${dirPath}/fistFile.txt`,(err)=>{
    if(!err) console.log('file name updated')
})