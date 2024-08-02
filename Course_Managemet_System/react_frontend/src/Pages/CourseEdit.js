import React,{useState,useEffect} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import CourseService from '../Service/CourseService';

export default function CourseEdit() {
    const location=useLocation();
    const navigate=useNavigate();
    const [formdetails,setformdetails] =useState({cid:"",cname:"",fees:"",duration:""})
    useEffect(()=>{
      console.log({location}) 
       setformdetails({...location.state.csdata}) 
    },[]);

    const handlechange=(event)=>{
        var name=event.target.name;
        setformdetails({...formdetails,[name]:event.target.value})
    }
    
    const updateCourse=()=>{
        if(formdetails.cid==="" || formdetails.cname==="" || formdetails.fees==="" || formdetails.duration===""){
            alert("pls fill all details ")
        }
        CourseService.updateCourse(formdetails)
        .then((result)=>{
            console.log(result)
            setformdetails({cid:"",cname:"",fees:"",duration:""})
            navigate("/table");
        })
        .catch((err)=>{
            console.log(err);
            navigate("/home");
        })
        
    }
  return (
    <div>
        <form>
            Course Id : <input type="text" name="cid" id="cid"
            value={formdetails.cid}
             readOnly></input><br></br>

            Course Name : <input type="text" name="cname" id="cname"
            value={formdetails.cname}
            onChange={handlechange}></input><br></br>

            Course Quantity : <input type="text" name="fees" id="fees"
            value={formdetails.fees}
            onChange={handlechange}></input><br></br>

            Course duration : <input type="text" name="duration" id="duration"
            value={formdetails.duration}
            onChange={handlechange}></input><br></br>

            <button type="button" name="btn" id="btn" onClick={updateCourse}>Update Course</button>
        </form>
    </div>
  )
}
