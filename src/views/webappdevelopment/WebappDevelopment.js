import React from 'react'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Crumbs2 from '../../component/Crumbs2/Crumbs2'
import Header2 from '../../component/Header2/Header2'

import service from "../../assets/img/services/service-vector3.png"
import service2 from "../../assets/img/services/service-vector2.png"



function WebappDevelopment() {
     
    const field = {
        type : "Web Application Developmentr",
        content : "There are many variations of passages of Lorem Ipsum but the majority have suffered alteration in some form first true generator on the Internet.",
        route : [{name : "Home",route : "/home"},{name: "Lass",route :"/home"},{name: "Login",route :"/home"}]
      }
      
  return (
    <>
    <Header2/>
    <Crumbs2 data={field}/>

    <section id="service" class="service pad-top-md-none">
        <div class="container" data-aos="fade-up">
            <div class="row gy-5 banner-wrap" data-aos="fade-in">
                <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column  relative  text-lg-start">
                    <h2> <br></br><span class="primary-color f-size-48">Zero to web in No time</span></h2>
                    <p align="justify">Our skilled web designers and developers create and execute excellent website projects from simple brochure sites to multi-functional complex web portals. GRIT DigiTech has the ability to combine a wide
                        range of technology expertise with deep, industry-specific insights that transform your business.</p>
                    <ul>
                        <li>Website Development<br></br></li>
                        <li>Ecommerce Solutions<br></br></li>
                        <li> Web Portals<br></br></li>
                        <li>CRM Development<br></br></li>
                        <li> Open Source Development<br></br></li>
                        <li> PSD to XHTML</li>
                    </ul>
                    <div class="d-flex justify-content-center justify-content-lg-start mt-3">
                        <a href="#" class="btn btn-default">Get Started</a>
                    </div>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                    <img src={service} class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
                </div>
            </div>
        </div>
    </section>

    <section id="service" class="service pt-0">
        <div class="container" data-aos="fade-up">
            <div class="row gy-5 banner-wrap" >
                <div class="col-lg-6 order-1 text-center">
                    <img src={service2} class="img-fluid" alt="" />
                </div>
                <div class="col-lg-6 order-2 d-flex flex-column justify-content-center relative text-center text-lg-start">
                    <h2>  <br></br><span class="primary-color f-size-48"> We help Web Application  Development</span></h2>
                    <p align="justify">Extensive Resources to handle all your needs efficiently under one umbrella
                        Top Notch Business and technical expertise to develop websites of any
                        complexity.</p>
                    <p>Rich internet applications with solid cross-vertical experience
                        We constantly keep pace with evolving technology and market trends
                        Inbuilt strategic framework based development methodology
                        Quality and Timely Delivery on Schedule.</p>
                    <div class="d-flex justify-content-center justify-content-lg-start mt-3">
                        <a href="#" class="btn btn-default">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</>  )
}

export default WebappDevelopment