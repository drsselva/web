import React from 'react'
import gritlogo from "../../assets/img/grit-logo.png"
import {siteURL, siteDetails} from "../../constants/constants"
import { Timeline } from 'react-twitter-widgets'


function Footer() {


  return (

      <footer id="footer" className="footer">
         <div className="container">
            <div className="row gy-4">
               <div className="col-lg-4 col-md-12 footer-info">
                  <a href="" className="logo d-flex align-items-center"/>			
                 		  
                       
                  <p>                                 
                                         
                     <strong>Email:</strong> <a href="mailto:aj@gritdigitech.com">{siteDetails.Mail}</a> <br></br>
                     <strong>Mobile:</strong> <a href="mailto:aj@gritdigitech.com">{siteDetails.Mobile}</a></p>
                  
               </div>
               {/*<div className="col-lg-2 col-md-12 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                     <li><a href="#">Home</a></li>
                     <li><a href="#">About us</a></li>
                     <li><a href="#">Services</a></li>
                     <li><a href="#">Terms of service</a></li>
                     <li><a href="#">Privacy policy</a></li>
                  </ul>
               </div>*/}
               <div className="col-lg-3 col-md-12 footer-links">
               {/*<Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'GritCareer'
  }}
  options={{
    height: '270'
  }}
/>
            
                  {/* <a className="twitter-timeline" data-width="680" data-height="290" data-dnt="true" data-theme="dark" href="https://twitter.com/GritCareer?ref_src=twsrc%5Etfw">Tweets by GritCareer</a> <script async src="../platform.twitter.com/widgets.js" charSet="utf-8"></script> */}
               </div>
               <div className="col-lg-3 col-md-12 mb-4 mb-lg-0 footer-contact">
                  <h4>Contact Us</h4>
                  <div className="social-links d-flex">
                     <a href={siteURL.twitter} rel="noreferrer" target="_blank" className="twitter"><i className="bi bi-twitter"></i></a>
                     <a href={siteURL.facebook} rel="noreferrer" target="_blank" className="facebook"><i className="bi bi-facebook"></i></a>
                     <a href={siteURL.instagram} rel="noreferrer" className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
                     <a href={siteURL.linkedin} rel="noreferrer" target="_blank" className="linkedin"><i className="bi bi-linkedin"></i></a>
                     <a href={siteURL.youtube} rel="noreferrer" target="_blank" className="linkedin"><i className="bi bi-youtube"></i></a>          
                  </div>
               </div>
            </div>
         </div>
         <div className="container mt-4">
            <div className="copyright">
               Copyright 2023 - All Right Reserved By GRIT Digitech - Pvt Ltd      
            </div>
         </div>
      </footer>  )
}

export default Footer