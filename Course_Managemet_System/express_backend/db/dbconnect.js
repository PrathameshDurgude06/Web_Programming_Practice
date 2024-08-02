const mysql=require("mysql");

var mysqlconnection=mysql.createConnection({
  host:'127.0.0.1',
  user:'root',
  password:'root123',
  database:'course_management',
  port:3306
})

mysqlconnection.connect((err)=>{
  if(! err){
    console.log("Connection Done")
  }
  else{
    console.log(err)
  }
})

module.exports=mysqlconnection;