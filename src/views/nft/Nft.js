import React from 'react'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Crumbs from '../../component/Crumbs/Crumbs'
import Header2 from '../../component/Header2/Header2'
import Crumbs2 from '../../component/Crumbs2/Crumbs2'


import vector11 from "../../assets/img/services/service-vector11.png"
import vector12 from "../../assets/img/services/service-vector12.png"


function Nft() {
    const field = {
        type : "NFT Marketplace DevOps",
        content : "There are many variations of passages of Lorem Ipsum but the majority have suffered alteration in some form first true generator on the Internet.",
        route : [{name : "Home",route : "/home"},{name: "Lass",route :"/home"},{name: "Login",route :"/home"}]
      }
  return (
    <>
    <Header2 />
    <Crumbs2 data={field}/>
    <main>
    <section id="service" class="service pad-top-md-none">
      <div class="container" data-aos="fade-up">
		<div class="row gy-5 banner-wrap" data-aos="fade-in">
			<div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center relative text-center text-lg-start">
			  <h2><br/><span class="primary-color f-size-48">We help clients to design and build an NFT marketplaces</span></h2>
			  <p>The NFT Marketplace provides the opportunity to create, sell,
purchase, bid on, collect, trade, showcase and otherwise in any block.
GRIT learning as a Service is a NFT Marketplace powered product. 
</p>
			  <p>The
sole purpose is to create a digitised content in support of global
customers who could benefit from the introduction to the NFT
Marketplace through blockchain technologies for social impact.</p>
			  <div class="d-flex justify-content-center justify-content-lg-start mt-3">
				<a href="get-started.html" class="btn btn-default">Get Started</a>            
			  </div>			  
			</div>
			<div class="col-lg-6 order-1 order-lg-2 text-center">
			  <img src={vector11} class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100"/>
			</div>
		</div>
      </div>
    </section>  
	
    <section id="service" class="service pt-0">
      <div class="container" data-aos="fade-up">
		<div class="row gy-5 banner-wrap" data-aos="fade-in">
			<div class="col-lg-6 order-1 text-center">
			  <img src={vector12} class="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100"/>
			</div>
			<div class="col-lg-6 order-2 d-flex flex-column justify-content-center relative text-center text-lg-start">
			  <h2> <br/><span class="primary-color f-size-48">NFT marketplace with an eWallet</span></h2>
			  <p>Everyday we are working on building a top NFT marketplace for all who
want to become a part of the incredible NFT world. Discover how
digital assets like cryptocurrencies & CBDCs can transform the way we
pay.
</p>
			  <p></p>
			  <div class="d-flex justify-content-center justify-content-lg-start mt-3">
				<a href="get-started.html" class="btn btn-default">Get Started</a>            
			  </div>			  
			</div>			
		</div>
      </div>
    </section>
	
  </main>
  <Footer/>
      </>
  )
}

export default Nft