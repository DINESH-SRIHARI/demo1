const express=require('express')
const app=express()
app.use(express.static('public'))

app.get('/',async(req,res)=>{
    console.log("triggered this api");
    
    res.render({message:"hello"})
})

app.listen(5001,()=>{
    console.log('hello')
})