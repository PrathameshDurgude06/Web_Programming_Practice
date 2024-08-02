const express=require('express')
const router=express.Router()
const connection=require('../db/dbconnect')

//get all courses
router.get('/courses',function(req,res){
  connection.query('SELECT * FROM courses',function(err,data){
    if(err){
      return res.status(500).send('Data not found')
    }
    else{
     res.json(data)
    }
  })
})

//get single course by id
router.get('/courses/:id',function(req,res){
  connection.query('SELECT * FROM courses WHERE cid =?', [req.params.id],function(err,data){
    if(err || data.lenght === 0 ){
      return res.status(500).send('Data not found')
    }
    else{
        res.json(data[0])
    }
  })
})

// add new course
router.post('/courses/:id',function(req,res){
  const {cid,cname,fees,duration} =req.body;
  connection.query('INSERT INTO courses VALUES(?,?,?,?)',[cid,cname,fees,duration],function(err,result){
    if(err){
      return res.status(500).send('Data not inserted ')
    }
    else{
      res.status(200).send('Data Inserted')
    }
  })
})

//update course
router.put('/courses/:id',function(req,res){
  const {cid,cname,fees,duration} =req.body;
  console.log({cname,fees,duration})
  connection.query('UPDATE courses SET cname=?, fees=?, duration=? WHERE cid=?',[cname,fees,duration,cid],function(err,result){
    if(err){
      return res.status(500).send('Data not found')
    }
    else{
      res.status(200).send('Data Updated successfully');
    }
  })
})

//delete course
router.delete('/courses/:id',function(req,res){
  connection.query('DELETE FROM courses WHERE cid=?',[req.params.id],function(err,result){
    if(err){
      res.status(500).send('Data not deleted');
    }
    else{
      res.status(200).send('Data deleted successfully');
    }
  })
})

module.exports=router;

