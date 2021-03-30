const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');

const app=express();

dotenv.config({path:'config.env'})


const PORT=process.env.PORT||8080;

//log req
app.use(morgan('tiny'));

app.get('/',(req,res)=>{
    res.send("Crud app");
})

app.listen(PORT,()=>{console.log(`server running on http://localhost:${PORT}`)});
