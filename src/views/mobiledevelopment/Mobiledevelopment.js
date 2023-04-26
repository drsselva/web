import React from 'react'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Header2 from '../../component/Header2/Header2'

import Crumbs from '../../component/Crumbs/Crumbs'
import Crumbs2 from '../../component/Crumbs2/Crumbs2'

import vector1 from "../../assets/img/services/service-vector1.png"
import vector2 from "../../assets/img/services/service-vector2.png"

function Mobiledevelopment() {
  const field = {
    type: "Mobile Application Development & Services",
    content: "There are many variations of passages of Lorem Ipsum but the majority have suffered alteration in some form first true generator on the Internet.",
    route: [{ name: "Home", route: "/home" }, { name: "Lass", route: "/home" }, { name: "Login", route: "/home" }]
  }
  return (
    <>
      <Header2 />
      <Crumbs2 data={field} />
      <section id="service" class="service pad-top-md-none">
        <div class="container" data-aos="fade-up">
          <div class="row gy-5 banner-wrap" data-aos="fade-in">
            <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center relative text-center text-lg-start">
              <h2>  <br></br><span class="primary-color f-size-48">Mobile app development has never been easier</span></h2>
              <p align="justify">GRIT DigiTech has depth expertise in Mobile Application Development,
                iPhone, Android Game Development,Custom Mobile Apps Development.<br /><br />Are you looking for a great futuristic mobile application which would
                stand relevance even in 2030?<br /><br /> GRIT DigiTech develops customer-centric mobile applications for various platforms. Our Mobile development team delivers flexible end product solutions and business
                oriented customized solutions to all industries. We also have enhancement capability to provide value-added mobile features such as GPS Tracking, Aggregator, Pollutions tracking, Headwaves Tracking,
                E-learning platforms, Social Networking, API Integration and Payment Gateway Integration.</p><br />

              <div class="d-flex justify-content-center justify-content-lg-start mt-3">
                <a href="get-started.html" class="btn btn-default">Get Started</a>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 text-center">
              <img src={vector1} class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
            </div>
          </div>
        </div>
      </section>

      <section id="service" class="service pt-0">
        <div class="container" data-aos="fade-up">
          <div class="row gy-5 banner-wrap" data-aos="fade-in">
            <div class="col-lg-6 order-1 text-center">
              <img src={vector2} class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
            </div>
            <div class="col-lg-6 order-2 d-flex flex-column justify-content-center relative text-center text-lg-start">
              <h2> <br /><span class="primary-color f-size-48">You’ve arrived at your Destination </span></h2>
              <p align="justify">At GRIT DigiTech we masterfully design, develop & deploy successful  mobile applications for multiple mobile platforms such as Android, iOS(iPad & iPhone) using the latest mobile technology such as Nodejs, Vuejs, Reactjs. Spring Boot, React Native and more. Our mobile application evangelists are adept at converting your creative ideas into a viable sparkling application.<br /><br />We help define and customize the features and navigation to best suit your business, your unique target audience for the application as well as the target device.</p>
              <p>We believe that the new workforce demands consumer-grade experiences; that users want better workflows, not just more features; and that adoption and user satisfaction should be the primary success metric for all applications. GRIT DIGITECH mobile application development services reflect this core belief that true integration of business, technology, and design can truly take businesses there.</p>
              <div class="d-flex justify-content-center justify-content-lg-start mt-3">
                <a href="#" class="btn btn-default">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />


    </>)
}

export default Mobiledevelopment