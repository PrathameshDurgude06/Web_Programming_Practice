import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import CourseService from '../Service/CourseService';
export default function CourseForm() {
    const [formdetails,setformdetails] =useState({cid:"",cname:"",fees:"",duration:""})
    var navigate=useNavigate();
    const handlechange=(event)=>{
        //name of the text box on which change event has occured
       var name=event.target.name;
       
       setformdetails({...formdetails,[name]:event.target.value})
    }
   /* instead of writing 4 different change function we use single function handle change
   const changecid=(event)=>{
        setformdetails({...formdetails,cid:event.target.value})
    }*/
    //add Course in the array
    const addCourse=()=>{
        if(formdetails.cid==="" || formdetails.cname==="" || formdetails.fees==="" || formdetails.duration===""){
            alert("pls fill all the details");
            return;
        }
        CourseService.addCourse(formdetails)
        .then((result)=>{
            console.log(result);
            setformdetails({cid:"",cname:"",fees:"",duration:""})
            navigate("/table")
        })
        .catch();
       
    }
  return (
    <div>
        <form>
            Course id : <input type="text" name="cid" id="cid"
            value={formdetails.cid}
            onChange={handlechange}></input><br></br>

            Course Name : <input type="text" name="cname" id="cname"
            value={formdetails.cname}
            onChange={handlechange}></input><br></br>

            Fees : <input type="text" name="fees" id="fees"
            value={formdetails.fees}
            onChange={handlechange}></input><br></br>

            Course duration : <input type="text" name="duration" id="duration"
            value={formdetails.duration}
            onChange={handlechange}></input><br></br>

            <button type="button" name="btn" id="btn" onClick={addCourse}>Add new Course</button>
        </form>
    </div>
  )
}
