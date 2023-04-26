import React, { useEffect } from 'react'
import logoicon from "../../assets/img/logo-icon.png"
import startBuisness from "../../assets/img/about/starting-a-business-projectpana-1.svg"
import vector8 from "../../assets/img/about/vector-89.svg"
import yellowpaper from "../../assets/img/about/bouncyyellowpaperplane.png"

import elearningicon from "../../assets/img/icons/elearningicon-1.svg"
import richicon from "../../assets/img/icons/richicon-1.svg"
import fileuploadexporticon from "../../assets/img/icons/fileuploadexporticon-2.svg"
import dataanalysisicon from "../../assets/img/icons/dataanalysisicon-1.svg"
import marketresearchicon from "../../assets/img/icons/marketresearchicon-1.svg"
import worldwidewebicon from "../../assets/img/icons/worldwidewebicon-1.svg"
import governmenticon from "../../assets/img/icons/governmenticon-1.svg"
import kidstudying from "../../assets/img/about/kids-studying-from-homerafiki-1.svg"
import accepticon from "../../assets/img/about/accepticon-11.svg"
import blockchaindevelopmenticon from "../../assets/img/services/blockchaindevelopmenticon-1.png"
import webdevelopmenticon from "../../assets/img/services/webdevelopmenticon-1.png"
import mobileappdevicon from "../../assets/img/services/mobileappdevicon-1.png"
import partner1 from "../../assets/img/partner/partner1.png"
import partner2 from "../../assets/img/partner/partner2.png"
import partner3 from "../../assets/img/partner/partner3.png"
import partner4 from "../../assets/img/partner/partner4.png"
import partner5 from "../../assets/img/partner/partner5.png"

import client1 from "../../assets/img/clients/client-1.png"
import client2 from "../../assets/img/clients/client-2.png"
import client3 from "../../assets/img/clients/client-3.png"
import client4 from "../../assets/img/clients/client-4.png"
import client5 from "../../assets/img/clients/client-5.png"
import client6 from "../../assets/img/clients/client-6.png"
import client7 from "../../assets/img/clients/client-7.png"
import client8 from "../../assets/img/clients/client-8.png"

import vector4 from "../../assets/img/testimonials/vector4.svg"
import vector5 from "../../assets/img/testimonials/vector5.svg"

import sofia from "../../assets/img/testimonials/sofia.png"
import gordon from "../../assets/img/testimonials/gordon.svg"
import michael from "../../assets/img/testimonials/micheal.png"
import robert from "../../assets/img/testimonials/robert.png"

import Header2 from '../../component/Header2/Header2'


import AOS from 'aos';
import 'aos/dist/aos.css';

import Footer from '../../component/Footer/Footer'
import { useNavigate } from 'react-router-dom'



function Home() {

	const Navigate = useNavigate()

	useEffect(() => {
		AOS.init();
	}, [])

	return (
		<>
			{/* <header id="header" class="header d-flex align-items-center">

    <div class="container container-xl d-flex align-items-center justify-content-between">
      <a href="index.html" class="logo d-flex align-items-center">
        <img src={logoicon} class="me-2" alt="logo" title="" width="64" height="64"/>
		<h1 class="logo-title mt-1"><span class="default-color">GR</span><span class="secondary-color">IT</span> <span class="link-color">DIGITECH</span></h1>
      </a>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a  class="btn-menu two-type" onClick={()=>{Navigate("/gritlasshome")}}>GRIT Studies<span class="hover-txt">GRIT LaaS</span></a></li>
          <li><a href="https://www.grittalents.com/">GRIT Talents</a></li>          
          <li class="dropdown"><a href="#"><span>Others</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>              
              <li class="dropdown"><a href="#"><span>IT Services</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#" onClick={()=>Navigate("/webappdevelopement")}>Web Application Development</a></li>
                  <li><a href="#" onClick={()=>Navigate("/mobiledevelopement")}>Mobile Application Development & Services</a></li>
                  <li><a href="# "onClick={()=>Navigate("/outsourcedevelopemtnt")}>Outsourced Development Services</a></li>
                  <li><a href="#" onClick={()=>Navigate("/mobilefirstdevelopement")}>Mobile First Web Development</a></li>
                  <li><a href="#"onClick={()=>Navigate("/blockchain")}>Blockchain / Cryptocurrency Development & Support</a></li>
                  <li><a href="#" onClick={()=>Navigate("/nft")}>NFT / Marketplace DevOps</a></li>
				</ul>
              </li>   
			  <li><a href="salesrep.html">Sales</a>
              </li>              
            </ul>
          </li>
          <li><a href="#" onClick={()=>Navigate("/contactus")}>Contact Us</a></li>
		  <li><a href="https://www.gritfoundation.in/" class="btn-menu">CSR</a></li>
		  
        </ul>
      </nav>

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header> */}

			<Header2 />


			<section id="hero" class="hero">
				<div class="container position-relative">
					<div class="row gy-5 banner-wrap"  >
						<div data-aos="zoom-in-right" data-aos-easing="ease-out-cubic"
							data-aos-duration="1000" class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center relative text-lg-start" >
							<h2>Your Business Partner in<br /> <span class="primary-color f-size-48">Smart Solution</span></h2>
							<p align="justify">Helping our customers digitally transform their businesses to create a positive impact for greater good of the community. Building truly easy to use learning as a service platform through strategic and managed services.</p>
							<div class="row stats-counter pt-3 pb-5 justify-content-center justify-content-lg-start">
								<div class="col col-md-auto">
									<div class="stats-item">
										<div class="count primary-color">
											<span class="purecounter"> 21</span>
											Plus
										</div>
										<p>Corporate Clients Signed</p>
									</div>
								</div>
								<div class="col col-md-auto">
									<div class="stats-item">
										<div class="count primary-color">
											<span class="purecounter">3350 </span>
											Plus
										</div>
										<p>Students Beneficiaries</p>
									</div>
								</div>
								<div class="col col-md-auto">
									<div class="stats-item">
										<div class="count primary-color">
											<span class="purecounter">15 </span>
											Plus Schools
										</div>
										<p>& Colleges Approached</p>
									</div>
								</div>
							</div>
							<div class="d-flex justify-content-center justify-content-lg-start">
								<a href="#" onClick={() => Navigate("/gettingstart")} class="btn-get-started">Get Started</a>
							</div>
							<div class="yellow-paper">
								<img src={vector8} class="img-fluid vector-line" alt="" />
								<img src={yellowpaper} class="img-fluid paper-plane" width="64" height="58" alt="" />
							</div>
						</div>
						<div class="col-lg-6 order-1 order-lg-2 banner-img text-center" data-aos="zoom-in-left"
							data-aos-easing="ease-out-cubic"
							data-aos-duration="1000">
							<img src={startBuisness} class="img-fluid" alt="" />
						</div>
					</div>
				</div>
			</section>

			<main id="main">


				<section id="why-us" class="why-us pad-top-md-none">
					<div class="container">

						<div class="section-header pb-0" >
							<div class="section-title pb-0">
								<h2>Why Choose Us</h2>
							</div>
						</div>

						<div class="row" data-aos="flip-right"
							data-aos-easing="ease-out-cubic"
							data-aos-duration="2000">
							<div class="col-xl-3 col-lg-6"  >
								<div class="feature-box-default mb-4">
									<div class="fbox-img mb-4 bf-bg1">
										<img src={elearningicon} class="img-fluid" alt="" />
									</div>
									<div class="fbox-title mb-2">
										<h6>Vernacular Digital Education</h6>
									</div>
									<div class="fbox-description">
										<p class="mb-0">Localized, simple and ridiculously easy to use Learning as a Service like GRIT Tamil (தமிழ்), GRIT Telugu (తెలుగు), GRIT Kanada (ಕನ್ನಡ) etc.</p>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-6" >
								<div class="feature-box-default mb-4">
									<div class="fbox-img mb-4 bf-bg2" >
										<img src={elearningicon} class="img-fluid" alt="" />
									</div>
									<div class="fbox-title mb-2">
										<h6>Utility Services</h6>
									</div>
									<div class="fbox-description">
										<p class="mb-0">Pay per use. Making e-learning affordable to millions. Subscription to premium or advertisements with one rupee per minute usage.</p>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-6"  >
								<div class="feature-box-default mb-4">
									<div class="fbox-img mb-4 bf-bg1">
										<img src={richicon} class="img-fluid" alt="" />
									</div>
									<div class="fbox-title mb-2">
										<h6>Affordabilty</h6>
									</div>
									<div class="fbox-description">
										<p class="mb-0">Making online education safe, equal and secure for all.Spend what you can afford to pay. Stay now and pay later</p>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-6"  >
								<div class="feature-box-default mb-4">
									<div class="fbox-img mb-4 bf-bg2">
										<img src={fileuploadexporticon} class="img-fluid" alt="" />
									</div>
									<div class="fbox-title mb-2">
										<h6>Content Upload</h6>
									</div>
									<div class="fbox-description">
										<p class="mb-0">Upload and access to content (B2C & B2B) in Learning as a Service platform. It enables us to gain and share what is best in the market.</p>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-6" >
								<div class="feature-box-default mb-4 mb-xl-0">
									<div class="fbox-img mb-4 bf-bg2">
										<img src={dataanalysisicon} class="img-fluid" alt="" />
									</div>
									<div class="fbox-title mb-2">
										<h6>Undercover Market</h6>
									</div>
									<div class="fbox-description">
										<p class="mb-0">Serving the most vulnerable, underprivileged meritorious and ambitious service providers and learners.</p>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-6"  >
								<div class="feature-box-default mb-4 mb-xl-0">
									<div class="fbox-img mb-4 bf-bg1">
										<img src={marketresearchicon} class="img-fluid" alt="" />
									</div>
									<div class="fbox-title mb-2">
										<h6>Silent Marketing</h6>
									</div>
									<div class="fbox-description">
										<p class="mb-0">Making a positive impact through Corporate Social Responsibility and doing our little in bringing positivity in our communities.</p>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-6"  >
								<div class="feature-box-default mb-4 mb-xl-0">
									<div class="fbox-img mb-4 bf-bg2">
										<img src={worldwidewebicon} class="img-fluid" alt="" />
									</div>
									<div class="fbox-title mb-2">
										<h6>Domain Expertise</h6>
									</div>
									<div class="fbox-description">
										<p class="mb-0">Own content creation. Strategic and personalized learning methodologies. Technology is a learnable skills helps to make wealth through technology.</p>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-6"  >
								<div class="feature-box-default mb-4 mb-xl-0">
									<div class="fbox-img mb-4 bf-bg1">
										<img src={governmenticon} class="img-fluid" alt="" />
									</div>
									<div class="fbox-title mb-2">
										<h6>Working with Government</h6>
									</div>
									<div class="fbox-description">
										<p class="mb-0">Partnership with Department of Social Defence,Government of  TamilNadu. Student Exchange program partnership with UK Government.</p>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>

				<section id="about-us" class="about-us pt-2">
					<div class="container">

						<div class="row gy-4 align-items-center">

							<div class="col-xl-6 mb-4 mb-xl-0 service-img text-center" data-aos="zoom-in-left" data-aos-easing="ease-out-cubic"
								data-aos-duration="1000" >
								<img src={kidstudying} alt="" class="img-fluid" />
							</div>

							<div class="col-xl-6" data-aos="zoom-in-right" data-aos-easing="ease-out-cubic"
								data-aos-duration="1000" >
								<div class="section-header text-left">
									<div class="section-title">
										<h2>Learning as a Service Platform</h2>
										<div class="bottom-border">
											<span class="bottom-br br-lg"></span>
											<span class="bottom-br br-sm"></span>
											<span class="bottom-br"></span>
										</div>
									</div>
									<p class="mb-4">Socially Purpose Driven Business Providing A Next Generation Learning as a Service Platform (GRIT LaaS). <br /> Passionate In Connecting Underserved Market To Succeed By Providing Equal Opportunity To WIN Life.</p>
									<span class="contact"><strong>Contact : <a href="tel:+91 86103 42869" class="secondary-color">+91 86103 42869</a></strong></span>
								</div>
								<div class="row button-group">
									<div class="col-md-auto mb-3 mb-md-0">
										<a href="" onClick={() => Navigate("/gettingstart")} class="btn btn-default">Get Demo</a>
									</div>
									<div class="col-md-auto">
										<a href="" onClick={() => Navigate("/gettingstart")} class="btn btn-outline">Read More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="services" class="services pt-2">
					<div class="container">

						<div class="row gy-4 align-items-center">
							<div class="col-xl-6" data-aos="zoom-in-right" data-aos-easing="ease-out-cubic"
								data-aos-duration="1000" >
								<div class="section-header text-left pb-0">
									<div class="section-title mb-0">
										<h2 class="mb-0">Areas of service and expertise</h2>
									</div>
								</div>
								<div class="description">
									<p class="mb-4" align="justify">Making every deserving learner and trainer an equal opportunity to win
										life. We connect Training providers to learners. Help learners to get
										industry ready through our service offerings.<br /><br /> Gritians possess an indomitable spirit. Having a drive for achievement
										regardless of upbringing or situation. Earning success in the trenches
										through hard work.</p>
								</div>
								<div class="list-item">
									<ul>
										<li><img src={accepticon} class="img-fluid" alt="" /> We provide quality services that is beyond your expectation</li>
										<li><img src={accepticon} class="img-fluid" alt="" /> Get custom made services beyond your expectation</li>
										<li><img src={accepticon} class="img-fluid" alt="" /> Ontime completion of services</li>
										<li><img src={accepticon} class="img-fluid" alt="" /> Best suggestion and services by our expert team</li>
									</ul>
								</div>
							</div>
							<div class="col-xl-6">
								<div class="row">
									<div class="col-lg-6 pt-lg-5 mt-lg-5">
										<div class="feature-box-classic text-center mb-4" data-aos="fade-up"
											data-aos-duration="1000">
											<a class="feature-link" href="" onClick={() => Navigate("/mobilefirstdevelopement")}></a>
											<div class="fbox-img mb-3"><img src={elearningicon} class="img-fluid" alt="" /></div>
											<div class="fbox-title mb-2">
												<h6>Mobile First Web Development</h6>
											</div>
											<div class="fbox-description">
												<p class="mb-0">Website layout that follows the principle of mobile first(GRIT LaaS)</p>
											</div>
										</div>
										<div class="feature-box-classic text-center mb-4" data-aos="fade-up"
											data-aos-duration="1000" >
											<a class="feature-link" href="#" onClick={() => { Navigate("/blockchain") }}></a>
											<div class="fbox-img mb-3">
												<img src={blockchaindevelopmenticon} class="img-fluid" alt="" />
											</div>
											<div class="fbox-title mb-2">
												<h6>Blockchain Development</h6>
											</div>
											<div class="fbox-description">
												<p class="mb-0">This is simply a program or platform that uses the features and benefits of a blockchain, transparency, and reliability.</p>
											</div>
										</div>
									</div>
									<div class="col-lg-6" data-aos="fade-up"
										data-aos-duration="1000">
										<div class="feature-box-classic text-center mb-4" >
											<a class="feature-link" href="#" onClick={() => Navigate("/webappdevelopement")}></a>
											<div class="fbox-img mb-3">
												<img src={webdevelopmenticon} class="img-fluid" alt="" />
											</div>
											<div class="fbox-title mb-2">
												<h6>Web Application Development</h6>
											</div>
											<div class="fbox-description">
												<p class="mb-0">This is the creation of application programs that reside on remote servers and are delivered to the user's device over the Internet.</p>
											</div>
										</div>
										<div class="feature-box-classic text-center mb-4" data-aos="fade-up"
											data-aos-duration="1000">
											<a class="feature-link" href="#" onClick={() => Navigate("/mobiledevelopement")}></a>
											<div class="fbox-img mb-3">
												<img src={mobileappdevicon} class="img-fluid" alt="" />
											</div>
											<div class="fbox-title mb-2">
												<h6>Mobile Application Development</h6>
											</div>
											<div class="fbox-description">
												<p class="mb-0">Mobile application development is the process of making software for tablets, most commonly for the Android and iOS.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="clients" class="clients pt-2">
					<div class="container">

						<div class="row gy-4 align-items-center">
							<div class="col-xl-4 mb-5 mb-xl-0" data-aos="fade-right" data-aos-delay="100">
								<div class="section-header text-center pb-0">
									<div class="section-title mb-0">
										<h2 class="mb-0">Our Proud Partners</h2>
									</div>
								</div>
								<div class="description text-center">
									<p class="mb-5" align="justify">Our valued partners range from various capabilities, from Startups, SMEs, Enterprise, MNCs, Consulting business, Government and Private partnerships with the service provided in Recruitment, GRIT Learning as a Service Platform, E-Learning and Digital & Transformation</p>
								</div>
								<div class="button-wrap text-center">
									<a href="#" class="btn btn-default">Know More</a>
								</div>
							</div>
							<div class="col-xl-8 ps-xl-5">
								<div class="row">
									<div class="col-lg-3" data-aos="zoom-in" data-aos-delay="200">
										<div class="client-img text-center mb-4">
											<img src={client1} class="img-fluid" alt="" />
										</div>
									</div>
									<div class="col-lg-3" data-aos="zoom-in" data-aos-delay="200">
										<div class="client-img text-center mb-4">
											<img src={client2} class="img-fluid" alt="" />
										</div>
									</div>
									<div class="col-lg-3" data-aos="zoom-in" data-aos-delay="200">
										<div class="client-img text-center mb-4">
											<img src={client3} class="img-fluid" alt="" />
										</div>
									</div>
									<div class="col-lg-3" data-aos="zoom-in" data-aos-delay="200">
										<div class="client-img text-center mb-4">
											<img src={client4} class="img-fluid" alt="" />
										</div>
									</div>
									<div class="col-lg-3" data-aos="zoom-in" data-aos-delay="200">
										<div class="client-img text-center mb-4 mb-lg-0">
											<img src={client5} class="img-fluid" alt="" />
										</div>
									</div>
									<div class="col-lg-3" data-aos="zoom-in" data-aos-delay="200">
										<div class="client-img text-center mb-4 mb-lg-0">
											<img src={client6} class="img-fluid" alt="" />
										</div>
									</div>
									<div class="col-lg-3" data-aos="zoom-in" data-aos-delay="200">
										<div class="client-img text-center mb-4 mb-lg-0">
											<img src={client7} class="img-fluid" alt="" />
										</div>
									</div>
									<div class="col-lg-3" data-aos="zoom-in" data-aos-delay="200">
										<div class="client-img text-center">
											<img src={client8} class="img-fluid" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="recognize" class="recognize pt-2">
					<div class="container">
						<div class="section-header text-center pb-0">
							<div class="section-title mb-0" >
								<h2 class="mb-0">Recognized By</h2>
							</div>
						</div>
						<div class="row justify-content-center align-items-center">
							<div class="col-lg-auto" >
								<div class="recognize-img mb-4 mb-lg-0 text-center">
									<img src={partner1} class="img-fluid" width="261" height="57" alt="" />
								</div>
							</div>
							<div class="col-lg-auto" >
								<div class="recognize-img mb-4 mb-lg-0 text-center">
									<img src={partner2} class="img-fluid" width="261" height="42" alt="" />
								</div>
							</div>
							<div class="col-lg-auto" >
								<div class="recognize-img mb-4 mb-lg-0 text-center">
									<img src={partner3} class="img-fluid" width="166" height="41" alt="" />
								</div>
							</div>
							<div class="col-lg-auto" >
								<div class="recognize-img mb-4 mb-lg-0 text-center">
									<img src={partner4} class="img-fluid" width="71" height="69" alt="" />
								</div>
							</div>
							<div class="col-lg-auto" >
								<div class="recognize-img text-center">
									<img src={partner5} class="img-fluid" width="166" height="50" alt="" />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="testimonials" class="testimonials pt-0">
					<div class="container">

						<div class="row mb-3" >
							<div class="col-lg-6 justify-content-lg-start d-flex">
								<div class="section-header text-left pb-0">
									<div class="section-title pb-0 mb-0">
										<h2>See What Our Client Says</h2>
									</div>
								</div>
							</div>
							<div class="col-lg-6 align-self-center justify-content-lg-end d-flex">
								<div class="link">
									<a href="#">View All<span class="bi bi-chevron-right ms-2"></span></a>
								</div>
							</div>
						</div>

						<div class="slides-3 swiper" >
							<div class="swiper-wrapper">

								<div class="swiper-slide">
									<div class="testimonial-wrap">
										<div class="testimonial-item" data-aos="fade-up">
											<div class="quote-icon">
												<img src={vector4} class="shape-img flex-shrink-0" alt="" />
												<img src={vector5} class="quote-img flex-shrink-0" alt="" />				  </div>
											<h3>Clean Service</h3>
											<p>
												It is excellent collaborating and sure shall bring us both assistance to scale our Companies and interesting initiatives.                  </p>
											<div class="d-flex align-items-center">
												<img src={gordon} class="testimonial-img flex-shrink-0" alt="" />
												<div>
													<h3>Gordan Rates</h3>
													<div class="stars mb-0">
														<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>                      </div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide">
									<div class="testimonial-wrap">
										<div class="testimonial-item" data-aos="fade-up">
											<div class="quote-icon">
												<img src={vector4} class="shape-img flex-shrink-0" alt="" />
												<img src={vector5} class="quote-img flex-shrink-0" alt="" />				  </div>
											<h3>Good Experience</h3>
											<p>
												I got industrial working experience from GRIT Digitech pvt ltd.I gather real time professional experience in short period of time                  </p>
											<div class="d-flex align-items-center">
												<img src={michael} class="testimonial-img flex-shrink-0" alt="" />
												<div>
													<h3>MichealBrain</h3>
													<div class="stars mb-0">
														<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>                      </div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide">
									<div class="testimonial-wrap">
										<div class="testimonial-item" data-aos="fade-up">
											<div class="quote-icon">
												<img src={vector4} class="shape-img flex-shrink-0" alt="" />
												<img src={vector5} class="quote-img flex-shrink-0" alt="" />				  </div>
											<h3>Great Work</h3>
											<p>
												Grit Digitech Pvt LTD specialist in helping various clients across the SEA to build their web and mobile.                  </p>
											<div class="d-flex align-items-center">
												<img src={sofia} class="testimonial-img flex-shrink-0" alt="" />
												<div>
													<h3>Sofia roger</h3>
													<div class="stars mb-0">
														<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>                      </div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="swiper-slide">
									<div class="testimonial-wrap">
										<div class="testimonial-item" data-aos="fade-up">
											<div class="quote-icon">
												<img src={vector4} class="shape-img flex-shrink-0" alt="" />
												<img src={vector5} class="quote-img flex-shrink-0" alt="" />				  </div>
											<h3>Friendly Staffs</h3>
											<p>
												I believe GRIT Team work attitude is positive and commitment in work deliverance is excellent                  </p>
											<div class="d-flex align-items-center">
												<img src={robert} class="testimonial-img flex-shrink-0" alt="" />
												<div>
													<h3>Robert</h3>
													<div class="stars mb-0">
														<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>                      </div>
												</div>
											</div>
										</div>
									</div>
								</div>

							</div>
							<div class="swiper-pagination"></div>
						</div>

					</div>
				</section>

				<div class="stickyicon-list">

					<a href="tel:+918610342869" class="phone">
						<i class="fa-solid fa-phone"></i>
					</a>
					<a href="https://api.whatsapp.com/send/?phone=919344446762&text&type=phone_number&app_absent=0" class="whatsapp">
						<i class="fa-brands fa-whatsapp"></i>
					</a>
					<a href="https://www.linkedin.com/company/grit-digitech/mycompany/" class="linkedin">
						<i class="fa-brands fa-linkedin"></i>
					</a>
					<a href="https://twitter.com/GritCareer" class="twitter">
						<i class="fa-brands fa-twitter"></i>
					</a>
					<a href="https://www.facebook.com/grit.found" class="facebook">
						<i class="fa-brands fa-facebook"></i>
					</a>



				</div>

			</main>

			<Footer />

		</>

	)
}

export default Home