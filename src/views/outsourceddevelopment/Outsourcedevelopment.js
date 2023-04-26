import React from 'react'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Crumbs from '../../component/Crumbs/Crumbs'
import Header2 from '../../component/Header2/Header2'
import Crumbs2 from '../../component/Crumbs2/Crumbs2'

import vector5 from "../../assets/img/services/service-vector5.png"
import vector6 from "../../assets/img/services/service-vector6.png"

function Outsourcedevelopment() {
    const field = {
        type : "Outsourced Development Services",
        content : "There are many variations of passages of Lorem Ipsum but the majority have suffered alteration in some form first true generator on the Internet.",
        route : [{name : "Home",route : "/home"},{name: "Lass",route :"/home"},{name: "Login",route :"/home"}]
      }
  return (
    <>
      <Header2 />
    <Crumbs2 data={field}/>
    <section id="service" class="service pad-top-md-none">
        <div class="container" data-aos="fade-up">
            <div class="row gy-5 banner-wrap" data-aos="fade-in">
                <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center relative text-center text-lg-start">
                    <h2><br /><span class="primary-color f-size-48">Do what you do best and outsource the rest</span></h2>
                    <p align="justify">Outsourcing services is a great solution for SMEs and Startups,
                        especially with the increasing customer demand in every aspect of the
                        business. Even in 2023, the industry continues to grow as the demand
                        for offshored teams increases.</p>
                    <ul>
                        Types of outsourcing:<br />
                        <br />
                        <li> Onshoring. Relocating work or services to lower-cost locations in the
                            company's own country.<br /></li>
                        <br />
                        <li> Offshoring. Relocating work or services to third-party providers overseas.<br /></li>
                        <br />
                        <li> Nearshoring. Relocating work or services to people in nearby, often
                            bordering regions and countries</li>
                    </ul>
                    <div class="d-flex justify-content-center justify-content-lg-start mt-3">
                        <a href="get-started.html" class="btn btn-default">Get Started</a>
                    </div>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                    <img src={vector5} class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100"/>
          </div>
                </div>
            </div>
  </section>

        <section id="service" class="service pt-0">
            <div class="container" data-aos="fade-up">
                <div class="row gy-5 banner-wrap" data-aos="fade-in">
                    <div class="col-lg-6 order-1 text-center">
                        <img src={vector6} class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100"/>
          </div>
                        <div class="col-lg-6 order-2 d-flex flex-column justify-content-center relative text-center text-lg-start">
                            <h2>  <br/><span class="primary-color f-size-48">OutSourcing is inevitable</span></h2>
                                <p align="justify">GRIT DigiTech Team provides your
                                    customers with the best user experience through building and
                                    maintaining your company website and getting access to the latest
                                    tools and professional services together with your unique graphics,
                                    images, layouts, and more.</p>
                                <ul>

                                    <br/>

                                        Businesses continue to take advantage of outsourcing services due to
                                        the following reasons:<br/><br/>
                                            <li> Expert interaction for greater customer interaction.<br/><br/></li>
                                                <li>  More hands-on approach.<br/><br/></li>
                                                    <li>Cheaper than full automation.<br/><br/></li>
                                                        <li>Outsourcing creative and complex tasks at cheaper cost and resource</li>
            </ul>
                                                        <div class="d-flex justify-content-center justify-content-lg-start mt-3">
                                                            <a href="get-started.html" class="btn btn-default">Get Started</a>
                                                        </div>			  
          </div>			
      </div>
    </div>
  </section>
  <Footer/>
  </>  )
}

export default Outsourcedevelopment