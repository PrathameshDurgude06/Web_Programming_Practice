const express=require('express');
const router=express.Router();
const connection = require('../db/dbconnect');

//login user
router.post('/login',(req,res)=>{
  const { username, password}= req.body;
  console.log({ username, password})

  connection.query('SELECT * FROM users WHERE email=? AND password=?',[username,password],(err,results)=>{
    if(err || results.length == 0 )
      return res.status(400).send("Invalid Credential");
    res.status(200).send('Login Successfully');
  });
});

module.exports=router;