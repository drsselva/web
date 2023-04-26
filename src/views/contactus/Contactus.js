import React from 'react'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Crumbs from '../../component/Crumbs/Crumbs'

function Contactus() {
    const field = {
        type : "Mobile Application Development & Services",
        content : "There are many variations of passages of Lorem Ipsum but the majority have suffered alteration in some form first true generator on the Internet.",
        route : [{name : "Home",route : "/home"},{name: "Lass",route :"/home"},{name: "Login",route :"/home"}]
      }
  return (
<> 
<Header />
    <Crumbs data={field}/>
<section id="contact" class="contact">
		<div class="container">
  
			<div class="section-header text-center pb-4">
			<div class="section-title mb-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
				<h2 class="mb-0">Find Us Here. Make Real Results Happen.</h2>				
			</div>			  			  
			</div>
  
		  <div class="row gx-lg-0 gy-4">
  
			<div class="col-lg-4">
  
			  <div class="info-container d-flex flex-column align-items-center justify-content-center">
				<div class="info-item d-flex" data-aos="zoom-in" data-aos-delay="200">
				  <i class="bi bi-geo-alt flex-shrink-0"></i>
				  <div>
					<h4>Location:</h4>
					<p>59, VOC Street, Sivaganga - 630 561, Tamilnadu, India.</p>
				  </div>
				</div>
  
				<div class="info-item d-flex" data-aos="zoom-in" data-aos-delay="200">
				  <i class="bi bi-envelope flex-shrink-0"></i>
				  <div>
					<h4>Email Us:</h4>
					<p><a href="mailto:aj@gritdigitech.com">aj@gritdigitech.com</a></p>
				  </div>
				</div>
  
				<div class="info-item d-flex" data-aos="zoom-in" data-aos-delay="200">
				  <i class="bi bi-phone flex-shrink-0"></i>
				  <div>
					<h4>Call Us:</h4>
					<p><a href="tel:+918610342869"> +91 8610342869</a></p>
				  </div>
				</div>
  
				<div class="info-item d-flex" data-aos="zoom-in" data-aos-delay="200">
				  <i class="bi bi-clock flex-shrink-0"></i>
				  <div>
					<h4>Open Hours:</h4>
					<p>Mon-Sat: 9AM - 7PM</p>
				  </div>
				</div>
			  </div>
  
			</div>
  
			<div class="col-lg-8">
			  <form action="forms/contact.php" method="post" role="form" class="php-email-form" data-aos="fade-left" data-aos-delay="200">
				<div class="row">
				  <div class="col-md-6 form-group">
					<input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
				  </div>
				  <div class="col-md-6 form-group mt-3 mt-md-0">
					<input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
				  </div>
				</div>
				<div class="form-group mt-2">
					<input type="tel" class="form-control" name="phone" id="phone" placeholder="Phone" required/>
				</div>
				<div class="form-group mt-2">
				  <textarea class="form-control" name="message" rows="7" placeholder="Message" required></textarea>
				</div>
				<div class="text-center"><button type="submit">Send Message</button></div>
			  </form>
			</div>
  
		  </div>
  
		</div>
	  </section>
    
	
    <section id="recognize" class="recognize pt-2">
      <div class="container">
		<div class="section-header text-center pb-0">
		  <div class="section-title mb-0" data-aos="fade-up" data-aos-delay="200">
			<h2 class="mb-0">Recognized By</h2>				
		  </div>			  			  
		</div>	
		<div class="row justify-content-center align-items-center">
			<div class="col-lg-auto" data-aos="zoom-in" data-aos-delay="200">
				<div class="recognize-img mb-4 mb-lg-0 text-center">
					<img src="assets/img/partner/partner1.png" class="img-fluid" width="261" height="57" alt=""/>
				</div>					
			</div>
			<div class="col-lg-auto" data-aos="zoom-in" data-aos-delay="200">
				<div class="recognize-img mb-4 mb-lg-0 text-center">
					<img src="assets/img/partner/partner2.png" class="img-fluid" width="261" height="42" alt=""/>
				</div>					
			</div>
			<div class="col-lg-auto" data-aos="zoom-in" data-aos-delay="200">
				<div class="recognize-img mb-4 mb-lg-0 text-center">
					<img src="assets/img/partner/partner3.png" class="img-fluid" width="166" height="41" alt=""/>
				</div>					
			</div>
			<div class="col-lg-auto" data-aos="zoom-in" data-aos-delay="200">
				<div class="recognize-img mb-4 mb-lg-0 text-center">
					<img src="assets/img/partner/partner4.png" class="img-fluid" width="71" height="69" alt=""/>
				</div>					
			</div>
			<div class="col-lg-auto" data-aos="zoom-in" data-aos-delay="200">
				<div class="recognize-img text-center">
					<img src="assets/img/partner/partner5.png" class="img-fluid" width="166" height="50" alt=""/>
				</div>					
			</div>				
		</div>     
      </div>
    </section>

	<section id="map-section" class="map-section py-0">
		<div class="container-fluid">
			<div class="row ">
				<div class="col-md-12">
					<div class="embed-responsive">
						<div ><iframe width="100%" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=GRIT%20DigiTech%20Pvt%20Ltd,%2059,%20VOC%20Street,%20Sivaganga%20630%20561,%20Tamilnadu,%20India+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe></div>
					</div>
				</div>
			</div>
		</div>
	</section>
    <Footer/>
</>
  )
}

export default Contactus