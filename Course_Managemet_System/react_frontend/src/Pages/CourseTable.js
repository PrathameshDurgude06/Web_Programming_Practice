import React from "react";
import CourseService from "../Service/CourseService";
import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import '../components/Component.css'
export default function CourseTable(){
  const [carr,setcarr]=useState([]);
  //initialize the carr in useEffect

  useEffect(()=>{
    fetchdata();
  },[]);
  const navigate=useNavigate()

  const fetchdata=() =>{
    console.log("in fetchdata")
    CourseService.getAllCourses().then((result)=>{
      console.log(result.data);
      setcarr(result.data);
    })
    .catch((err)=>{
      console.log(err);
      navigate("/home")

  });
  }

  const deleteCourse=(cid)=>{
    console.log("in delete")
    CourseService.deleteCourse(parseInt(cid))
    .then((result)=>{
        console.log(result);
        fetchdata();
    })
    .catch((err)=>{
        console.log(err);
        navigate("/home")
    })    
  }

  return (
    <div>
    {/* change the url to form once click on the button */}
    
    <Link to="/form">
        <button tynm
        pe="button" name="btn" id="btn" className="btn btn-success">Add new Course</button>
    </Link>
        <br></br><br></br>
        <table border='2' className="fortable">
            <thead >
                <tr className="fortable">
                    <th>Course Id</th>
                    <th>Course Name</th>
                    <th>Fess</th>
                    <th>Duration</th>
                </tr>
            </thead>
            <tbody>
                {carr.map(cs=><tr className="fortable" key={cs.pid}>
                    <td>{cs.cid}</td>
                    <td>{cs.cname}</td>
                    <td>{cs.fees}</td>
                    <td>{cs.duration}</td>
                    <td>
                        <button type="button" name="del" id="del" className="btn btn-danger" onClick={()=>{deleteCourse(cs.cid)}} >Delete</button>

                    <Link to={`/edit/${cs.cid}`} state={{csdata:cs}}>
                        <button type="button" name="edit" id="edit"
                        className="btn btn-info">Edit</button>
                    </Link>
                    <Link to={`/view/${cs.cid}`}>
                        <button type="button" name="view" id="view" className="btn btn-warning">View</button>
                    </Link>
                    </td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}