import React from 'react'
import Header from '../../component/Header/Header'
import Footer from "../../component/Footer/Footer"

import "../../css/aos.css"
import "../../css/main.css"
// import { Grid, TextField, MenuItem } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

import { useState } from 'react'
import axios from 'axios'
import personstudyingatadesk from "../../assets/img/study/personstudyingatadesk2.jpg"


function Createcourse() {

   const [uploadData,setUploadData] = useState()


   //  const useStyles = makeStyles((theme) => ({
   //      image: {
   //        width: '100%', // Set the width of the image
   //        height: 'auto', // Set the height of the image
   //        marginBottom: theme.spacing(2), // Set the margin bottom of the image
   //      },
   //    }));
      const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ];
      // const classes = useStyles();

      const uploadFile = () =>{
         const headers = {
           'content-type': 'multipart/form-ability',
       }
       console.log(uploadData)
       let formData = new FormData();
       formData.append("file", uploadData)
   
       axios.post("http://44.202.89.70:8989/api/uploadFile",formData,{headers})
       .then((res)=>{
         console.log(res)
       })
       .catch((err)=>{
         console.log(err)
       })
       }
  return (
    <>
    <Header/>
    <main id="main" class="create-course-wrapper data-img tp-page sticked-header-offset">
         <section id="create-course" class="create-course pt-large">
            <div class="container aos_init aos-animate" >
               <div class="row gy-5 align-items-center create-course-banner-wrap" >
                  <div class="col-lg-6 d-flex flex-column res-mt justify-content-center relative text-center text-lg-start">
                     <div class="create-course-inner bg-white position-relative">
                        <form action="#" class="create-course-form">
                           <div class="form-group">
                              <input type="text" class="form-control" placeholder="Name" required />
                           </div>
                           <div class="form-group">
                              <input type="text" class="form-control" placeholder="Course Title" required/>
                           </div>
                           <div class="form-group mt-3">
                              <select class="form-select" required>
                                 <option selected>Duration</option>
                                 <option value="1">30 Hours</option>
                                 <option value="2">50 Hours</option>
                                 <option value="3">70 Hours</option>
                              </select>
                           </div>
                           <div class="form-group">
                              <input type="text" class="form-control" placeholder="Course Fee" required/>
                           </div>
                           <div class="form-group mt-3">
                              <select class="form-select" required>
                                 <option selected>Mode ( Online / Offline )</option>
                                 <option value="1">Online</option>
                                 <option value="2">Offline</option>
                              </select>
                           </div>
						    <div class="form-group">
                            <label class="label-sml fw-txt-bold mb-2">Upload Content</label>
							<input type="file"  onChange={(e)=>setUploadData(e.target.files[0])} name="fileupload" id="fileupload" class="form-control mb-3" placeholder="Upload Your content"/>
                           </div>
                           <div class="form-group mb-0">
                              <button onClick={uploadFile} class="form-control btn btn-primary rounded submit px-3">Give Request</button>
                           </div>
                           <div class="form-group d-md-flex mb-0">
                              <div class="w-50 text-left">
                                 <label class="checkbox-wrap checkbox-primary mb-0">
                                 <span class="checkmark"></span>							  </label>
                              </div>
                              <div class="w-50 d-flex justify-content-end">
                                 <a href="#"></a>										
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div class="col-lg-6 text-center ps-lg-5">
                     <div class="create-course-img">
                        <img src={personstudyingatadesk} class="img-fluid" alt="" />
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

export default Createcourse