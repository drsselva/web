import React from 'react'
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer/Footer'

function GettingStarted() {
  return (
    <>
  <Header/>

 <div class="breadcrumbs">
  <div class="page-header d-flex align-items-center">
    <div class="container position-relative">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-6 text-center">
      <h2>Get Started</h2>
      <p class="lead">There are many variations of passages of Lorem Ipsum but the majority have suffered alteration in some form.</p>
      </div>
    </div>
    </div>
  </div>
  <nav>
    <div class="container">
    <ol>
      <li><a href="index.html">Home</a> </li>
      <li>Get Started</li>
    </ol>
    </div>
  </nav>
  </div>
  <main id="main">
   <section id="contact" class="contact">
    <div class="container">  
      <div class="row">
        <div class="col-lg-5 d-flex align-items-stretch">
          <div class="info">
          <div class="address">
            <i class="bi bi-geo-alt"></i>
            <h4>Location:</h4>
            <p class="me-xl-4">59, VOC Street, Sivaganga - 630 561, Tamilnadu, India.</p>
          </div>
    
          <div class="email">
            <i class="bi bi-envelope"></i>
            <h4>Email:</h4>
            <p><a href="mailto:aj@gritdigitech.com">aj@gritdigitech.com</a></p>
          </div>
    
          <div class="">
            <i class="bi bi-phone"></i>
            <h4>Call:</h4>
            <p><a href="tel:+918610342869"> +91 8610342869</a></p>
          </div>

          <div >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1330.8975295818916!2d78.48409265613614!3d9.849662737082872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00fbf57e9f8c0b%3A0xedb23473df5e32c7!2sGRIT%20DigiTech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1681182673878!5m2!1sen!2sin" width="400" height="300" style={{border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
    
          {/* <div class="embed-responsive">
            <div style="width: 100%"><iframe width="100%" height="290" frameborder="0" scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=450&amp;hl=en&amp;q=GRIT%20DigiTech%20Pvt%20Ltd,%2059,%20VOC%20Street,%20Sivaganga%20630%20561,%20Tamilnadu,%20India+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a></iframe></div>
          </div> */}
          </div>
    
        </div>
    
        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="forms/contact.php" method="post" role="form" class="php-email-form contact-form-2">
            
            <div class="section-header text-center pb-4">
            <div class="section-title mb-0 pb-0 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
              <h2 class="mb-0">Get In Touch</h2>				
            </div>			  			  
            </div>	
            <div class="row">

            <div class="form-group col-md-6">
            <input type="text" name="fname" class="form-control" id="fname" placeholder="First Name" required />
            </div>
            <div class="form-group col-md-6">
            <input type="text" name="lname" class="form-control" id="lname" placeholder="Last Name" required />
            </div>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
          <div class="form-group">
            <input type="tel" class="form-control" name="gphone" id="gphone" placeholder="Your Phone" required />
          </div>
        
          <div class="form-group">
            <textarea class="form-control" name="message" rows="10" required></textarea>
          </div>
          <div class="text-center"><button type="submit">Submit</button></div>
          </form>
        </div>
    
        </div>
    </div>
    </section>
  </main>
  <Footer/>

  
  </>  )
}

export default GettingStarted