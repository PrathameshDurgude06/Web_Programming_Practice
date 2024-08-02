const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "2001",
  database: "bookstore"
});

app.use(cors());
app.use(express.json());

// Start server
app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});

// Route to get all books
app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM book";
  db.query(sqlGet, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(result);
  });
});

// Route to add a new book
app.post("/api/add", (req, res) => {
  const { title, author, publishedDate, noofpage, language } = req.body;
  const sqlAdd = "INSERT INTO book (title, author, publishedDate, noofpage, language) VALUES (?, ?, ?, ?, ?)";
  db.query(sqlAdd, [title, author, publishedDate, noofpage, language], (err, result) => {
    if (err) {
      console.log(err)
    }else{
      res.send(result);
    }
      
  });
});

// delete book
app.delete("/api/delete/:id",(req,res)=>{
  const {id}= req.params;
const sqldelete="DELETE FROM book WHERE id =?";
db.query(sqldelete,[id],(err,result)=>{
  if({id}!={id}){
    res.send({message:"id not found"});
  }
  if(err){
    res.status(500).send({message:"error deleting"});
  }
  res.send({message:"sucessful delete"});
});
});

//update book
app.put("/api/update/:id",(req,res)=>{
  const{id}=req.params;
  const{title,author,publishedDate,noofpage,language}=req.body;
  const sqlupdate="UPDATE book SET title=?,author=?, publishedDate=?, noofpage=?, language=?WHERE id=?";
  db.query(sqlupdate,[title,author, publishedDate, noofpage, language,id],(err,result)=>{
    if(err){
      res.send({message:"not updated"});
    }
    res.send({message:"sucessful update"});
  });
});

//getby id
app.get("/api/get/:id",(req,res)=>{
  const{id}=req.params;
  const sqlget="SELECT * FROM book WHERE id=?";
  db.query(sqlget,[id],(err,result)=>{
    if(err){
      res.status(500).send({message:"error fetching"});
    }
    res.send(result);
});
});

//sort by name
app.get("/api/sorted",(req,res)=>{
  const sqlsort="select * from book order by author DESC";
  db.query(sqlsort,(err,result)=>{
    if(err){
      res.status(500).send({message:"error fetching"});
      }
      res.send(result);
      });
});

