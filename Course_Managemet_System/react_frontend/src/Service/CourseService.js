import axios from 'axios';
var baseUrl="http://localhost:3002/api/courses"
var userurl="http://localhost:3002/api/auth/login"
class CourseService{
    constructor(){
    
    }
    getAllCourses(){
        return axios.get(baseUrl);
    }
    getById(cid){
        return axios.get(baseUrl+"/"+cid);
    }

    addCourse(course){
        //add product at the end of the array
        //var headers={"content-type":"application/json",Atherization:"barer+<token>"}
        var myheader={"content-type":"application/json"}
        return axios.post(baseUrl+"/"+course.cid,course,{headers:myheader})
         
    }
    updateCourse(course){
        var myheader={"content-type":"application/json"}
       return axios.put(baseUrl+"/"+course.pid,course,{headers:myheader})

    }
    deleteCourse(cid){
        return axios.delete(baseUrl+"/"+cid)
    }

    getUser(user){
        console.log({user})
      return axios.post(userurl,user)
    }
}

export default new CourseService();