module.exports= middle = (req,res,next)=>{
    if(!req.query.age){
        res.send('Please enter age')
    }
    else{
        next()
    }
}