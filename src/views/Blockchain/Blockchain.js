import React from 'react'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Header2 from '../../component/Header2/Header2'
import Crumbs2 from '../../component/Crumbs2/Crumbs2'

import Crumbs from '../../component/Crumbs/Crumbs'

import vector9 from "../../assets/img/services/service-vector9.png"
import vector10 from "../../assets/img/services/service-vector10.png"

function Blockchain() {
    const field = {
        type : "Blockchain / Cryptocurrency Development & Support",
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
			  <h2> <br/><span class="primary-color f-size-48">Blockchain is the technology
</span></h2>
			  <p align="justify">GRIT DigiTech believes that Blockchain’s a very interesting technology that will have some very profound applications for society over the
years to come. Our GRIT Learning as a Service is in future to built on the capability merchant courses using bitcoins and other coins.</p>
			  <p></p>
			  <div class="d-flex justify-content-center justify-content-lg-start mt-3">
				<a href="" class="btn btn-default">Get Started</a>            
			  </div>			  
			</div>
			<div class="col-lg-6 order-1 order-lg-2 text-center">
			  <img src={vector9} class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100"/>
			</div>
		</div>
      </div>
    </section>
<section id="service" class="service pt-0">
      <div class="container" data-aos="fade-up">
		<div class="row gy-5 banner-wrap" data-aos="fade-in">
			<div class="col-lg-6 order-1 text-center">
			  <img src={vector10} class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100"/>
			</div>
			<div class="col-lg-6 order-2 d-flex flex-column justify-content-center relative text-center text-lg-start">
			  <h2> <br/><span class="primary-color f-size-48">Blockchain as a Service (BaaS)</span></h2>
			  <p  align="justify">Blockchain as a service, or BaaS, involves the third-party installation and maintenance of blockchain networks for a company's
technologies. With BaaS capabilities from GRIT DigiTech, any company
can build and use its own blockchain applications and services
customised to their strategic and managed Services and Solutions for
the inclusive of global citizens.</p>
			  <p></p>
			  <div class="d-flex justify-content-center justify-content-lg-start mt-3">
				<a href="#" class="btn btn-default">Get Started</a>            
			  </div>			  
			</div>			
		</div>
      </div>
    </section>
    <Footer/>
	
</>
    )
}

export default Blockchain