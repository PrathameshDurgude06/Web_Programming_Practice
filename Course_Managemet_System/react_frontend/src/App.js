import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import {Routes,Route} from 'react-router-dom'
import Header from "./components/Header";
import Footer from './components/Footer';
import MainNavBar from './components/MainNavBar';
import CourseTable from './Pages/CourseTable';
import HomeComponent from './Pages/HomeComponent';
import Login from './Pages/Login';
import CourseForm from './Pages/CourseForm';
import CourseEdit from './Pages/CourseEdit';
import CourseDetails from './Pages/CourseDetails';

function App() {
  return(
    <div>
      <Header></Header>
      <MainNavBar></MainNavBar>
      <Routes>
          <Route path="/home" element={<HomeComponent/>}></Route>
          <Route path="/table" element={<CourseTable/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path='/form' element={<CourseForm/>}></Route>
          <Route path="/edit/:id" element={<CourseEdit/>}></Route>
          <Route path="/view/:id" element={<CourseDetails/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
