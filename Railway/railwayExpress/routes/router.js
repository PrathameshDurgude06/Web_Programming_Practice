const express=require("express");
const myrouter=express.Router();
const connection=require("../dbConnection/dbconnect");

myrouter.get("/railway",(req,res)=>{
    connection.query("select * from railway",(err,data)=>{
        if(err){
            res.status(500).send("data not found");
        }
        else{
            console.log(data);
            res.status(200).send(data);
        }
    })
})

myrouter.post("/railway",(req,resp)=>{
    var reqBody=req.body;
    var name=reqBody.name;
    var category=reqBody.category;
    var destination=reqBody.destination;
    var distance=reqBody.distance;
    var end_time=reqBody.end_time;
    var frequency=reqBody.frequency;
    var source=reqBody.source;
    var start_time=reqBody.start_time;
    connection.query("insert into railway(category,destination,distance,end_time,frequency,name,source,start_time) values(?,?,?,?,?,?,?,?)",[category,destination,distance,end_time,frequency,name,source,start_time],(err,data)=>{
        if(err){
            console.log("err..................");
            resp.status(500).send("data not inserted");
        }
        else {
            console.log("200..................");
            resp.status(200).send("data Successfully inserted");
        }
    })
})


myrouter.put("/railway/:id",(req,res)=>{
    connection.query("update railway set category=?,destination=?,distance=?,end_time=?,frequency=?,name=?,source=?,start_time=? where id=? ",[req.body.category,req.body.destination,req.body.distance,req.body.end_time,req.body.frequency,req.body.name,req.body.source,req.body.start_time,req.body.id],(err,data)=>{
        if(err){
            res.status(500).send("data not updatetd")
        }
        else{
            res.status(200).status("data updated sucessfully");
        }
    })
})

myrouter.delete("/railway/:id",(req,res)=>{
    connection.query("delete from railway where id=?",[req.params.id],(err,result)=>{
        if(err){
            res.status(500).send("Data not found")
        }
        else{
            res.status(200).send("Data sucessfully deleted");
        }
    })
})
module.exports=myrouter;