import React from "react"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CourseService from "../Service/CourseService";

export default function Login(){
  const [arr,setarr] =useState({username:"",password:""})
  const navigate=useNavigate();

    const handlechange=(event)=>{
      var name= event.target.name;
      // console.log({...arr,[name]:event.target.value})
        setarr({...arr,[name]:event.target.value})
    }
    const validateadmin=()=>{
      console.log({arr})
      CourseService.getUser(arr).then((result)=>{
        console.log({result})
        navigate("/table")
      })
      .catch((err)=>{
        console.log(err);
        navigate("/login")

      });
        // console.log("in validateadmin")
        // if(arr.username==="test" && arr.password==="test@123"){
        //     navigate("/table");
        // }else{
        //     navigate("/login")
        // }
    }
  return(
    <div>
            <form>
                Username:<input type="text" name="username" id="username" value={arr.username} 
                onChange={handlechange}></input><br></br>

                Password:<input type="text" name="password" id="password" value={arr.password} 
                onChange={handlechange}></input><br></br>

                <button type="button" name="btn" id="btn" onClick={validateadmin}>Login</button>
            </form>
        </div>
  )
}
