import React from 'react'

import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Crumbs from '../../component/Crumbs/Crumbs'
import student from "../../assets/img/study/stundent.svg"
import teacher from "../../assets/img/study/teacher.svg"
import { useNavigate } from 'react-router-dom'
import logoicon from "../../assets/img/logo-icon.png"



function Gritlasshome() {

  const Navigate = useNavigate()

  const styleObj = {
    fontSize: 46,

  }
  const styleObj2 = {
    fontSize: 21,
    // font-weight : 200,

  }

  const field = {
    type: "GRIT Studies / LaaS",
    content: "Passionate In Connecting Underserved Market To Succeed By Providing Equal Opportunity To WIN Life.",

  }
  return (
    <>
      <header id="header" class="header d-flex align-items-center">

        <div class="container container-xl d-flex align-items-center justify-content-between">
          <a href="#" class="logo d-flex align-items-center">
            <img src={logoicon} class="me-2" alt="logo" title="" width="64" height="64" />
            <h1 class="logo-title mt-1"><span class="default-color">GR</span><span class="secondary-color">IT</span> <span class="link-color">DIGITECH</span></h1>
          </a>
          <nav id="navbar" class="navbar">
            <ul>
              <li><a onClick={() => Navigate("/studentlogin")}>Learner</a></li>
              <li><a onClick={() => Navigate("/educatorlogin")}>Educator</a></li>
              {/* <li><a onClick={() => Navigate("/marketplace")}>Marketplace</a></li>

              <li><a onClick={() => Navigate("/studentlogin")}>My GRIT</a></li> */}

            </ul>
          </nav>

          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

        </div>
      </header>
      {/* <Crumbs data={field}/> */}
      <div class="breadcrumbs tp-page lass-page-title">
        <div class="page-header d-flex align-items-center">
          <div class="container position-relative">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-6 text-center">
                <h2 class="fs-1" style={styleObj} >GRIT Studies / LaaS</h2>
                <p class="lead" style={styleObj2}>Passionate In Connecting Underserved Market To Succeed By Providing Equal Opportunity To WIN Life.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="lass-home" class="lass-home pb-5 ">
        <div class="container" >
          <div class="row gy-5 banner-wrap" >
            <div class="col-lg-6 text-center"
            // data-aos="zoom-in-left" data-aos-easing="ease-out-cubic" data-aos-duration="1000"
            >
              <div class="login-wrap" onClick={() => Navigate("/studentlogin")}>
                <a href="#" alt="Student Login"><img src={student} class="img-fluid w-50 m-auto" alt="" />
                </a>
                <div class="form-title">
                  <h2 class="mb-2"><a href="#" style={{ color: "#309700" }} alt="Learner">Learner</a></h2>
                </div>
              </div>
            </div>
            <div class="col-lg-6 text-center"
            // data-aos="zoom-in-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000"
            >
              <div class="login-wrap" onClick={() => Navigate("/educatorlogin")}>
                <a href="#" alt="Educator Login"><img src={teacher} class="img-fluid w-50 m-auto" alt="" />
                </a>
                <div class="form-title">
                  <h2 class="mb-2" className='lashomecolor'><a style={{ color: "#309700" }} href="" alt="Learner" >Educator</a></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Gritlasshome