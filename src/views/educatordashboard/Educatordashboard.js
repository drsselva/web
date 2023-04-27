import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../../css/aos.css"
import "../../css/main.css"
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import { useNavigate } from 'react-router-dom'
import ellipse from "../../assets/img/student-db/ellipse.png"
import recatange866 from "../../assets/img/tutor-db/rectangle866.png"
import recatange858 from "../../assets/img/tutor-db/rectangle858.png"
import Crumbs from '../../component/Crumbs/Crumbs'
import Sessions from '../../microcomponents/sessions/Sessions'
import editdocumenticon from "../../assets/img/tutor-db/editdocumenticon-1.svg"
import editdocumenticon1 from "../../assets/img/tutor-db/editdocumenticon-1.svg"
import Aos from 'aos'
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Educatordashboard() {
  const Navigate = useNavigate()


  const field = {
    type: "Tutor Dashboard",
    content: "Gritians possess an indomitable spirit . Earning success in the trenches through hard work",
    route: [{ name: "Home", route: "/home" }, { name: "student dashboard", route: "/home" }]
  }

  const [getprofiles, setgetprofiles] = useState('')
  useEffect(() => {
    var data = localStorage.getItem("getprofiledata")
    console.log(data, "datadatadata")
    const getprofiledata = JSON.parse(data);
    setgetprofiles(getprofiledata)
  }, [])


  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <Header />


      <Crumbs data={field} />


      <main id="main" className="student-db-main">

        <section id="student-db" className="student-db py-60">
          <div className="container">
            <div className="row student-wrap">
              <div className="col-md-3 mt-0">
                <div className="stu-feature-box">
                  <div className="student-img-wrap text-center">
                    <img src={getprofiles ? getprofiles.imageUrl : ellipse}
                      alt="student" className="img-fluid m-auto mb-4 w-50 rounded-circle" />
                    <h5 className="mb-0 fs-5">{getprofiles ? getprofiles.name : "Name"}</h5>
                    {/* <div className="mb-0 fs-star">
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                    </div> */}
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
                          <h5>Email: </h5><a href="mailto:alex56@gmail.com">{getprofiles ? getprofiles.email : "alex56@gmail.com"}</a>                  </div>
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
                {/* <div className="mt-2 student-progress">
              <h5 className="mb-0">Attendance: </h5>
              <span className="progress-count">85%</span>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-label="Example with label" style={{width: "85%"}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

            </div> */}
                <div class="mt-4 tutor-btn text-right">
                  <a href="#" class="btn btn-default tt-btn rounded"><img src={editdocumenticon} alt="Edit Profile" class="img-fluid me-2" />Edit Profile</a>
                  <a href="#" onClick={() => Navigate("/createcourse")} class="btn btn-default tt-btn rounded ml-3"><img src={editdocumenticon1} alt="Edit Profile" class="img-fluid me-2" />Create Your Course</a>
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

              <Sessions />
            </div>

          </div>
        </section>

        <section id="upload-db" class="upload-db pt-0">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="fs-4 mb-4">Upload Content</h2>
              </div>
            </div>

            <h2 class="fs-5 mb-3">C++ Beginner Course</h2>

            <div class="row student-wrap px-4 position-relative">



              <div class="col-md-4 cus-mx-mar d-flex align-items-center">

                <div class="add-btn">
                  <a href="#" class="course-link">
                    <i class="bi bi-plus-lg fs-4"></i>
                    <div class="add-txt">Add</div>
       
                  </a>
                </div>
                <div class="popular-feature-db position-relative">
                  <a href="#" class="course-link">
                    <div class="popular-icon-db mb-0 d-flex align-items-center">
                      <img src={recatange858} alt="student" class="img-fluid me-3" />
                      <div class="popular-content">
                        <h5 class="mb-1">C++ Course Part - 1</h5>
                        <span class="google-txt">Google</span> <span class="min-txt"><span class="bi bi-clock me-2"></span>48 Min</span>
                      </div>
                    </div></a>
                </div>
              </div>

              <div class="col-md-4 cus-mx-mar">
                <div class="popular-feature-db position-relative">
                  <a href="#" class="course-link">
                    <div class="popular-icon-db mb-0 d-flex align-items-center">
                      <img src={recatange858} alt="student" class="img-fluid me-3" />
                      <div class="popular-content">
                        <h5 class="mb-1">C++ Course Part - 1</h5>
                        <span class="google-txt">Google</span> <span class="min-txt"><span class="bi bi-clock me-2"></span>48 Min</span>
                      </div>
                    </div></a>
                </div>
              </div>

              <div class="col-md-4 cus-mx-mar">
                <div class="popular-feature-db position-relative">
                  <a href="#" class="course-link">
                    <div class="popular-icon-db mb-0 d-flex align-items-center">
                      <img src={recatange858} alt="student" class="img-fluid me-3" />
                      <div class="popular-content">
                        <h5 class="mb-1">C++ Course Part - 1</h5>
                        <span class="google-txt">Google</span> <span class="min-txt"><span class="bi bi-clock me-2"></span>48 Min</span>
                      </div>
                    </div></a>
                </div>
              </div>

            </div>
            {/* <div class="row student-wrap px-4 position-relative">
          
          <h2 class="fs-5 mb-3">C++ Beginner Course</h2>
          <div class="col-md-4 cus-mx-mar d-flex align-items-center">
                  <div class="add-btn position-relative">
                    <a href="#" class="course-link">
                      <i class="bi bi-plus-lg fs-4"></i>
                      <div class="add-txt">Add</div>
                    </a>
                  </div>
                <div class="popular-feature-db position-relative">
                  <a href="#" class="course-link">
                  <div class="popular-icon-db mb-0 d-flex align-items-center">
                  <img src={recatange858} alt="student" class="img-fluid me-3"/>
                  <div class="popular-content">
                    <h5 class="mb-1">C++ Course Part - 2</h5>
                    <span class="google-txt">Google</span> <span class="min-txt"><span class="bi bi-clock me-2"></span>48 Min</span>
                  </div>
                  </div></a>
                </div>
              </div>
              <div class="col-md-4 cus-mx-mar">
                <div class="popular-feature-db position-relative">
                  <a href="#" class="course-link">
                  <div class="popular-icon-db mb-0 d-flex align-items-center">
                  <img src={recatange858} alt="student" class="img-fluid me-3"/>
                  <div class="popular-content">
                    <h5 class="mb-1">C++ Course Part - 1</h5>
                    <span class="google-txt">Google</span> <span class="min-txt"><span class="bi bi-clock me-2"></span>48 Min</span>
                  </div>
                  </div></a>
                </div>
              </div>
              <div class="col-md-4 cus-mx-mar">
                <div class="popular-feature-db position-relative">
                  <a href="#" class="course-link">
                  <div class="popular-icon-db mb-0 d-flex align-items-center">
                  <img src={recatange858} alt="student" class="img-fluid me-3"/>
                  <div class="popular-content">
                    <h5 class="mb-1">React JS Development Part - 1</h5>
                    <span class="google-txt">Google</span> <span class="min-txt"><span class="bi bi-clock me-2"></span>48 Min</span>
                  </div>
                  </div></a>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* 
    <section id="upload-db" class="upload-db pt-0">
      <div class="container">
        <div class="row student-wrap px-4 position-relative">
          
          <h2 class="fs-4 mb-3">Advance Android Course</h2>
            <div class="col-md-5 cus-mx-mar d-flex align-items-center">
                <div class="add-btn position-relative ">
                  <a href="#" class="course-link">
                  <i class="bi bi-plus-lg fs-4"></i>
                  <div class="add-txt">Add</div>
                </a>
                </div>
              <div class="popular-feature-db position-relative">
                <a href="#" class="course-link">
                <div class="popular-icon-db mb-0 d-flex align-items-center">
                <img src={recatange858} alt="student" class="img-fluid me-3"/>
                <div class="popular-content">
                  <h5 class="mb-1">Advance Android Course Part - 2</h5>
                  <span class="google-txt">Google</span> <span class="min-txt"><span class="bi bi-clock me-2"></span>48 Min</span>
                </div>
                </div>
              </a>
              </div>
            </div>
              <div class="col-md-5 cus-mx-mar">
                <div class="popular-feature-db position-relative">
                  <a href="#" class="course-link">
                  <div class="popular-icon-db mb-0 d-flex align-items-center">
                  <img src={recatange858} alt="student" class="img-fluid me-3"/>
                  <div class="popular-content">
                    <h5 class="mb-1">Advance Android Course Part - 1</h5>
                    <span class="google-txt">Google</span> <span class="min-txt"><span class="bi bi-clock me-2"></span>48 Min</span>
                  </div>
                  </div>
                </a>
                </div>
              </div>
            </div>
      </div>
    </section> */}

      </main>

      <Footer />


    </>
  )
}

export default Educatordashboard