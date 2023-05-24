import React, { useEffect } from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "../../css/aos.css"
import "../../css/main.css"
import Studentlogin1 from "../../assets/img/study/student-login1.svg"
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import Crumbs from '../../component/Crumbs/Crumbs'
import axios from 'axios'
import Toast, { toast } from 'react-toastify'
import { connect, useDispatch, useSelector } from "react-redux";
import GoogleLogin from 'react-google-login';
import { gapi, loadGapiInsideDOM } from 'gapi-script';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { getprofile, logindetailSelector } from '../../Slices/login'
import Aos from 'aos'
import { BASE_URL1 } from '../constant'

function Studentlogin({ loginUsers, logUsers, logUsersResponse, loading }) {

   const { logindetails } = useSelector(logindetailSelector)
   console.log(logindetails,"loginpage")
   const dispatch = useDispatch()
   const initialValues = { email: "", password: "" };
   const [formValues, setFormValues] = useState(initialValues);
   const [formErrors, setFormErrors] = useState({});

   const field = {
      type: "Learner  Login",
      content: "Your journey to SUCCESS starts with GRIT Studies",
      route: [{ name: "Home", route: "/" }, 
      // { name: "Lass", route: "/home" }, { name: "Learner", route: "/home" }
   ]
   }
   // console.log(loginUsers, logUsers, logUsersResponse, loading)

   const Navigate = useNavigate()

   useEffect(() => {
      gapi.load('client:auth2', initClient);
   }, [])
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
   };

   console.log(formValues, "formValues")

   //  useEffect(() => {
   //    axios.get("http://44.203.0.129:8989/api/getAllCourse")
   //    .then((res)=>{
   //       console.log(res)
   //    })
   //  }, [])


   const handleSubmit = (e) => {
      e.preventDefault();
      let error = validate(formValues)

      if (Object.keys(error).length === 0) {
         console.log(formValues.email, formValues.password, "formValues.password")
         //   loginUsers(data)
         var data = {
            "emailId": formValues.email,
            "password": formValues.password
         }
   
         axios.post(`${BASE_URL1}` + "user/login",data)
            .then((res) => {
               console.log(res.data, "sssssssssssssss")
               if (res.data.message == "User logged in successfully.") {
                  toast.success(res.data.message)
                  localStorage.removeItem('getprofiledata')
                  localStorage.setItem("useriddd", res.data.data.id)
                  localStorage.setItem("emailIddd", res.data.data.emailId)
                  localStorage.setItem("profileImg", res.data.data.profileImg)
                  localStorage.setItem("firstnameee", res.data.data.firstName)
                  setFormValues(initialValues);
                  setFormErrors({})
                  Navigate("/studentdashboard")
               }
            })
            .catch((err) => {
               if(err.response.data.error.reason){
                  toast.error(err.response.data.error.reason)
               }
               else{
                  toast.error("Somethign went wrong")
               }
               console.log(err.response.data.error.reason)
            })
      }
      else {
         setFormErrors(validate(formValues));

      }
      // Navigate("/studentdashboard")
      // setIsSubmit(true);
   };


   const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      if (!values.email) {
         errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
         errors.email = "This is not a valid email format!";
      }
      if (!values.password) {
         errors.password = "Password is required";
      } else if (values.password.length < 4) {
         errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
         errors.password = "Password cannot exceed more than 10 characters";
      }
      return errors;
   };


   const handleFailure = (result) => {
      console.log(result, "handleFailurehandleFailure");
   };

   const handleLogin = async (googleData) => {
      console.log(googleData.profileObj, "googleDatagoogleDatagoogleData")
      dispatch(getprofile(googleData.profileObj))
      // Navigate("/studentdashboard")
      var data = JSON.stringify(googleData.profileObj)
      localStorage.setItem("getprofiledata", data)
      Navigate("/studentdashboard")
      // window.location = "/studentdashboard";
      // const reqData = {
      //    email: googleData.profileObj.email,
      //    password: googleData.profileObj.name,
      // }

   };

   const initClient = async () => {
      gapi.client.init({
         clientId: "256200674836-mpsru41t08o89e3ra7sof08s38qf8e5s.apps.googleusercontent.com",
         scope: ''
      });
      await loadGapiInsideDOM()
   };

   const clientidd = "256200674836-mpsru41t08o89e3ra7sof08s38qf8e5s.apps.googleusercontent.com"

   const [eyeon, eyeoff] = useState("password")

   const passwordshower = (value) => {
      if (eyeon == "password") {
         eyeoff("")
      }
      else {
         eyeoff("password")

      }
   }

   return (
      <>
         <Header />

         <Crumbs data={field} />


         <main id="main">
            <section id="login" className="login">
               <div className="container" >
                  <div className="row gy-5 banner-wrap" >
                     <div className="col-lg-6 text-center" data-aos="fade-up" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <img src={Studentlogin1} className="img-fluid" alt="" />
                     </div>
                     <div className="col-lg-6 ps-0 ps-lg-5 d-flex flex-column justify-content-center relative  text-lg-start"
                        data-aos="fade-down" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000">
                        <div className="login-wrap p-4 p-md-5">
                           <div className="form-title">
                              <h3 className="mb-2 primary-color">Welcome Back !!</h3>
                              <p className="mb-4">Please enter your email and password</p>
                           </div>
                           <form id="studentform" name="signform" className="signin-form" onSubmit="return validate()">
                              <div className="form-group mt-3">
                                 <input type="text" autoComplete className="form-control" onChange={handleChange} name="email" value={formValues.email} placeholder="Email" required />
                                 <p className="text-danger">{formErrors.email}</p>
                              </div>
                              <div className="form-group">
                                 <input id="password-field" autoComplete name="password" type={eyeon} onChange={handleChange} className="form-control" value={formValues.password} placeholder="Password" required />
                                 <p className="text-danger">{formErrors.password}</p>

                                 {/* {eyeon == "password" ? */}
                                 <span toggle="#password-field" onClick={() => passwordshower()} className="bi bi-eye field-icon toggle-password" ></span>
                                 {/* <span toggle="#password-field" onClick={() => passwordshower("password")} className="bi bi-eye field-icon toggle-password" ></span>
                                 } */}
                              </div>

                              <div className="form-group">
                                 <button type="submit" onClick={(e) => handleSubmit(e)} className="form-control btn btn-primary rounded submit px-3">Login</button>
                              </div>
                              <div className="form-group d-md-flex">
                                 <div className="w-50 text-left">
                                    <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                                       <input type="checkbox" />
                                       <span className="checkmark"></span>
                                    </label>
                                 </div>
                                 <div className="w-50 d-flex justify-content-end">
                                    <a href="#">Forgot Password</a>
                                 </div>
                              </div>
                              {/* <div className="order order"> */}
                              <p className="text-center mb-0">or</p>
                              <br></br>
                              {/* </div> */}
                              {/* <div className="form-group">
                                 <button type="submit" onClick={(e) => handleSubmit(e)} className="form-control btn btn-primary rounded submit px-3">Continue with Google</button>
                              </div> */}
                              <div className="text-center">
                                 {/* <Popup> */}


                                 <GoogleLogin

                                    clientId={clientidd}
                                    buttonText="Log in with Google"
                                    className='dtttt'
                                    onSuccess={handleLogin}
                                    onFailure={handleFailure}
                                    scope="profile"
                                    cookiePolicy={'single_host_origin'}
                                 ></GoogleLogin>


                              </div>
                              <br></br>

                              <p className="text-center mb-0" onClick={() => Navigate("/studentsignup")}>Don't Have an Account <span style={{ color: "blue", cursor: "pointer" }} >Create One</span></p>

                           </form>


                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </main>


         <Footer />


      </>
   )
}

// const mapStateToProps = (state) => ({
//    logUsers: state?.logUsers,
//    loading: state?.loading,
//    error: state?.error,
//    logUsersResponse: state?.logUsers
// })
// const mapDispatchToProps = (dispatch) => ({
//    loginUsers: (data) => dispatch({ type: LOGIN_REQUEST, payload: data })
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Studentlogin)

export default Studentlogin