const express=require('express');
const app=express();
require('./src/config/db');
require('dotenv').config();
const user=require('./src/models/usermodel');
const PORT=process.env.PORT | 5000;
app.use(express.json());
app.use('/ecomapp',user);

app.get('/',async(req,res)=>{
    return res.status(200).json({
        message:"Welcome To Ecommerce App"
    })
})

app.listen(PORT,()=>{
    console.log(`Server is Running on PORT=${PORT}`);
});
