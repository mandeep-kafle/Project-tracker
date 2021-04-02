const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyparser=require("body-parser");
const path=require("path");


const connectDB=require('./server/database/connection');


const app=express();

dotenv.config({path:'config.env'})


const PORT=process.env.PORT||8080;

//log req
app.use(morgan('tiny'));


//mongodb connections

connectDB();

//parsing req to bodyparser
app.use(bodyparser.urlencoded({extended:true}));

//setview engine
app.set("view engine","ejs")
// app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/images',express.static(path.resolve(__dirname,"assets/images")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));


//  css/style.css to access css files in css folders



app.use('/',require('./server/routes/router'));

app.listen(PORT,()=>{console.log(`server running on http://localhost:${PORT}`)});
