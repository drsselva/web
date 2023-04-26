import React, { useEffect } from 'react'
import "../../css/aos.css"
import "../../css/main.css"
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Crumbs from '../../component/Crumbs/Crumbs'
import ellipse from "../../assets/img/student-db/ellipse.png"
import { useState } from 'react'
import Sessions from '../../microcomponents/sessions/Sessions'
import Popularcourses from '../../microcomponents/popularcourse/Popularcourses'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { logindetailSelector } from '../../Slices/login'
import Aos from 'aos'


function Studentdashboard() {
  const {logindetails} = useSelector(logindetailSelector)
// console.log(logindetails,"logindetailslogindetails")
  const [uploadData,setUploadData] = useState()

  const field = {
    type : "Student Dashboard",
    content : "Gritians possess an indomitable spirit . Earning success in the trenches through hard work",
    route : [{name : "Home",route : "/home"},{name: "Lass",route :"/home"},{name: "Learner",route :"/home"}]
  }

  const [getprofiles,setgetprofiles]=useState('')
  useEffect(() => {
    var data = localStorage.getItem("getprofiledata")
    const getprofiledata = JSON.parse(data);
    setgetprofiles(getprofiledata)
}, [])
    console.log(getprofiles,"getprofilesgetprofiles")

    const uploadFile = () =>{
      const headers = {
        'content-type': 'multipart/form-ability',
    }
    console.log(uploadData)
    let formData = new FormData();
    formData.append("file", uploadData)

    axios.post("http://44.202.89.70:8989/api/uploadFile",formData,{headers})
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
    }
  return (
    <>
<Header/>


<Crumbs data={field}/>

  {/* <input type="file" onChange={(e)=>setUploadData(e.target.files[0])}/>
  <button onClick={uploadFile}>Upload</button> */}
  <main id="main" className="student-db-main">

<section id="student-db" className="student-db py-60">
  <div className="container">
    <div className="row student-wrap">
      <div className="col-md-3 mt-0">
        <div className="stu-feature-box">
          <div className="student-img-wrap text-center">
          
          {getprofiles.imageUrl?
            <img src={getprofiles.imageUrl}/>
            :
            <img src={ellipse}/>

          }
            {/* <video width="320" height="240" controls >
            <source src="http://44.202.89.70:8989/api/download028%20Passing%20Callback%20Functions%20Around.mp4" type="video/mp4"/>
            </video> */}
            <h5 className="mb-0 fs-5">{getprofiles.name ?getprofiles.name :"Name"}</h5>
          </div>
        </div>
      </div>
      <div className="col-md-9 ps-lg-5 mt-0">
        <ul className="student-course-details">
          <li>
            <div className="feature-box-list d-flex align-items-start">
              <div className="fb-list-inner">
                <div className="d-flex mb-0">
                  <h5>Course: </h5><span> Android Development Course, C++ Beginner Course</span>                    </div>
              </div>
            </div>
        </li>
        <li>
          <div className="feature-box-list d-flex align-items-start">
            <div className="fb-list-inner">
              <div className="d-flex mb-0">
                <h5>Email: </h5><a href="mailto:alex56@gmail.com">{getprofiles.email?getprofiles.email:"alex56@gmail.com"}</a></div>
            </div>
          </div>
        </li>
        {/* <li>
          <div className="feature-box-list d-flex align-items-start">
            <div className="fb-list-inner">
              <div className="d-flex mb-0">
                <h5>Contact Number: </h5><a href="tel:9876543456">9876543456</a>                  </div>
            </div>
          </div>
        </li> */}
        </ul>
        <div className="mt-2 student-progress">
          <h5 className="mb-0">Attendance: </h5>
          <span className="progress-count">85%</span>
          <div className="progress">
            <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="session-db" className="session-db py-60 pt-0">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2 className="fs-4 mb-4">Sessions</h2>
      </div>
    </div>
    <div className="row student-wrap px-5">

    <Sessions/>
    </div>
   
  </div>
</section>


<section id="popular-db" className="popular-db pt-0">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2 className="fs-4 mb-4">Popular Courses</h2>
      </div>
    </div>
    <div className="row student-wrap px-4">
        <Popularcourses/>
        </div>
  </div>
</section>

</main>

<Footer/>


</>
)
}




export default Studentdashboard