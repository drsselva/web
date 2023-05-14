import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../../css/aos.css"
import "../../css/main.css"
import Footer from '../../component/Footer/Footer'
import { Container, Col, Row, Button } from 'react-bootstrap';
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
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { educatorAllCourseSelector } from '../../Slices/getallcoursesedu'
import { BASE_URLAPI } from '../constant'
function Educatordashboard({ history }) {
  const { educatorAllCourse } = useSelector(educatorAllCourseSelector)
  console.log(educatorAllCourse, "educatorAllCourseeducatorAllCourse")
  const Navigate = useNavigate()
  // useEffect(() => {
  //   const unlisten = history.listen(() => {
  //     window.scrollTo(0, 0);
  //   });
  //   return () => {
  //     unlisten();
  //   }
  // }, []);


  const field = {
    type: "Educator Dashboard",
    content: "Gritians possess an indomitable spirit . Earning success in the trenches through hard work",
    route: [{ name: "Home", route: "/educatordashboard" },
    { name: "Logout", route: "/" }]
  }

  const [getprofiles, setgetprofiles] = useState('')
  const [getnames, setgetnames] = useState('')
  const [getimage, setgetimage] = useState('')
  const [emailid, setemailid] = useState('')
  const [setidd, setsetid] = useState('')

  useEffect(() => {
    var data = localStorage.getItem("getprofiledata")
    console.log(data, "datadatadata")
    const getprofiledata = JSON.parse(data);
    setgetprofiles(getprofiledata)
    var dataid = localStorage.getItem("useriddd")
    setsetid(dataid)
    getcourselistEducatorApi(dataid)
    var dataemailid = localStorage.getItem("emailIddd")
    setemailid(dataemailid)
    var dataname = localStorage.getItem("firstnameee")
    setgetnames(dataname)
    var dataimage = localStorage.getItem("profileImg")
    setgetimage(dataimage)
  }, [])


const [courselist,setcourselist] = useState([])


  const getcourselistEducatorApi = async (dataid) => {
    // console.log(payload,"payloadpayload")
    axios.get(`${BASE_URLAPI}` + "course/session/getCourseByEducator/" + dataid)
    .then((res) => {
      console.log(res,"\"fetch course session list Successfully\"")
      if (res.data.message == "\"fetch course session list Successfully\"") {
        setcourselist(res.data.data)
      }
   })
   .catch((err) => {
    
      console.log(err.response)
   })
  }

  //   // axios({
  //   //   method: "get",
  //   //   url: `${BASE_URLAPI}` + "course/session/getCourseByEducator/" + dataid,

  //   // }).then(function (response) {
  //   //   console.log(response, "response");
  //   //   setcourselist(response.data.data)

  //   // }

  //   // )
  //   //   .catch(function (error) {
  //   //     console.log(error, "error");
  //   //   });
  // }
  // }

  // try {

  //   const response = await axios({
  //     method: "get",
  //     url: `${BASE_URLAPI}` + "course/session/getCourseByEducator/" + dataid,
  //   })
  //   console.log(response.data, "getcourselistEducatorApi")
  //   // dispatch(geteducatorAllCourse(response.data))
  //   // dispatch(fetchcart(payload.token))
  // }
  // catch (err) {
  //   // console.log("errorgetbanners", err.data)
  // }


  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,



    responsive: [
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },

      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
                    <img src={getimage ? getimage : getprofiles ? getprofiles.imageUrl : ellipse}
                      alt="Educator" className="img-fluid m-auto mb-4 w-50 rounded-circle" />
                    <h5 className="mb-0 fs-5">{getnames ? getnames : getprofiles ? getprofiles.name : "Name"}</h5>
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
                          <h5>Course: </h5><span> Android Development Course, C++ Beginner Course</span></div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="feature-box-list d-flex align-items-start">
                      <div className="fb-list-inner">
                        <div className="d-flex mb-0">
                          <h5>Email: </h5><a href="mailto:alex56@gmail.com">{emailid ? emailid : getprofiles ? getprofiles.email : "alex56@gmail.com"}</a>                  </div>
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
                  <a onClick={()=>Navigate("/editprofile")} class="btn btn-default tt-btn rounded"><img src={editdocumenticon} alt="Edit Profile" class="img-fluid me-2" />Edit Profile</a>
                  {/* <a href="#" onClick={() => Navigate("/createcourse")} class="btn btn-default tt-btn rounded ml-3"><img src={editdocumenticon1} alt="Edit Profile" class="img-fluid me-2" />Create Your Course</a> */}
                </div>
              </div>

            </div>
          </div>
        </section>


        <section id="session-db" className="session-db py-60 pt-0">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="fs-4 mb-4"> Upload Content  </h2>
              </div>
            </div>
            <div className="row student-wrap px-5">

              <Sessions />
            </div>

          </div>
        </section>


        <Container className='conatinerstyle'>
          <div class="col-md-12">
            <h2 class="fs-4 mb-4">Uploaded Content</h2>
          </div>
          <div class="row student-wrap px-4 position-relative">
            <Row>
              {/* <Col className='col' md={1}>
                <div className='plsudiv1' >
                  <div onClick={() => Navigate("/createcourse")} className='plsudivover'>
                    <a class="course-link">
                      <i className="bi bi-plus-lg fs-4" style={{ textAlign: "center" }}></i>
                      <div class="add-txt">Add</div>
                    </a>
                  </div>
                </div>
              </Col> */}

              {/* <Col className='col1' md={12}> */}
                {/* <Slider {...settings}> */}
                {courselist.map((e) => (

                <Col className='col1' md={4}>
                    <div className='plsudiv mt-3' >
                      <a href="#" class="course-link">
                        <div class="popular-icon-db mb-0 d-flex align-items-center">
                          <img src={e.courseImageName} alt="student" class="img-fluid me-3" />
                          <div class="popular-content">
                            <h5 className='titlecolor'>{e.courseTitle}</h5>
                            {/* <span className='titlecolor'>Google</span> <span className='titlecolor'><span className='titlecolor'></span>48 Min</span> */}
                          </div>
                        </div></a>
                        
                    </div>

                    


                {/* </Slider> */}
              </Col>
                  ))}

              {/* <Col className='col1' md={3}>
               
             
             </Col>

             <Col className='col1' md={3}>
               
               <div className='plsudiv'>
                 
                 <a href="#" class="course-link">
                   <div class="popular-icon-db mb-0 d-flex align-items-center">
                     <img src={recatange858} alt="student" class="img-fluid me-3" />
                     <div class="popular-content">
                       <h5 className='titlecolor'>C++ Course Part - 1</h5>
                       <span className='titlecolor'>Google</span> <span className='titlecolor'><span className='titlecolor'></span>48 Min</span>
                     </div>
                   </div></a>
               </div>
             </Col> */}
            </Row>

          </div>
        </Container>
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