const mysql=require("mysql");

const myConnection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"rohan0607",
    database:"railway",
    port:3306
})

myConnection.connect((err)=>{
    if(!err){
        console.log("connection done")
    }
    else
    console.log("faild to connect",err);
})

module.exports=myConnection;