import React,{useState,useEffect} from "react";
import { useParams,useNavigate,Link } from "react-router-dom";
import CourseService from "../Service/CourseService";
export default function CourseDetails() {
  const params=useParams()
  const navigate=useNavigate()
  const [course,setcourse]=useState({})

  useEffect(()=>{
    var cid=params.id;
    CourseService.getById(cid)
    .then((result)=>{
      console.log(result)
      setcourse({...result.data})
    })
    .catch((err)=>{
      console.log(err)
      navigate("/table")
    })
  },[]);

  return(
    <div>
      Course Id: {course.cid} <br></br>
      Course Name: {course.cname} <br></br>
      Fees: {course.fees} <br></br>
      Duration: {course.duration} <br></br>
      <Link to="/table">
        <button type="button" name="btn" id="btn" className="btn btn-info">Back</button>
      </Link>
    </div>
  )
}