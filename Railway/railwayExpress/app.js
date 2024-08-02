const express=require("express");
const app=express();
const routes=require('./routes/router');
const bodyParser=require("body-parser");
const cors=require("cors")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(cors());
// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin", "*");
// res.setHeader("Access-Control-Allow-Credentials", true);
// res.setHeader("Access-Control-Allow-Headers", "content-type");
// res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET, DELETE" ); 
//     next();
// })
app.use("/",routes);

app.listen(3002,()=>{
    console.log("server is running at 3002 port");
})