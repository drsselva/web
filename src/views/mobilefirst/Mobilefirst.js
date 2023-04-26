import React from 'react'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Header2 from '../../component/Header2/Header2'
import Crumbs2 from '../../component/Crumbs2/Crumbs2'

import Crumbs from '../../component/Crumbs/Crumbs'

import vector7 from "../../assets/img/services/service-vector7.png"
import vector8 from "../../assets/img/services/service-vector8.png"

function Mobilefirst() {
    const field = {
        type : "Mobile First Web Development",
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
        <h2> <br/><span class="primary-color f-size-48">Mobile is not the future, it is the NOW</span></h2>
        <p align="justify">GRIT DigiTech implements a website layout that follows the principle
of mobile first. Mobile First Web Application is a process to help
clients have a great website which has mobile application first
features. Meeting the customers in the environment of their choice,
not where it is convenient for them.</p>
        <p></p>
        <div class="d-flex justify-content-center justify-content-lg-start mt-3">
          <a href="" class="btn btn-default">Get Started</a>            
        </div>			  
      </div>
      <div class="col-lg-6 order-1 order-lg-2 text-center">
        <img src={vector7} class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100"/>
      </div>
  </div>
</div>
</section>

<section id="service" class="service pt-0">
<div class="container" data-aos="fade-up">
  <div class="row gy-5 banner-wrap" data-aos="fade-in">
      <div class="col-lg-6 order-1 text-center">
        <img src={vector8} class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100"/>
      </div>
      <div class="col-lg-6 order-2 d-flex flex-column justify-content-center relative text-center text-lg-start">
        <h2> <br/><span class="primary-color f-size-48">To switch the workflow from tackling desktop designs</span> </h2>
        <p align="justify">Mobile-first design is the process of planning and developing a
website keeping in mind the mobile-users first. Essentially, the aim
of mobile first is to switch the workflow from tackling desktop
designs first and addressing the mobile design head on. It is a great
process to build a website which is mobile friendly with a perfect
responsive view of actually building mobile applications.
</p>
        <p></p>
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

export default Mobilefirst