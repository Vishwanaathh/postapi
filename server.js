const express=require('express')
const app=express()
const mongoose=require('mongoose')
const product=require('./models/productModel')
app.use(express.json())



app.post('/product',async(req,res)=>{
    try {
        const user=await product.create(req.body)
        res.status(200).json()
        

        
    } catch (error) {
        console.log(error.message);
        res.status(500);
        
    }
})
mongoose.
connect("mongodb+srv://admin:root@cluster0.kwlzyeo.mongodb.net/REY?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected");
    app.listen(3002,()=>{
        console.log("app is running")
    
    })
}).catch(()=>{
    console.log("fail")
})