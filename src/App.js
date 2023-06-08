import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Studentdashboard from './views/studentdashboard/Studentdashboard';
import Studentlogin from './views/studentlogin/Studentlogin';
import Educatorlogin from './views/educatorlogin/Educatorlogin';
import Studentsignup from './views/studentsignup/Studentsignup';
import Educatorsignup from './views/educatorsignup/Educatorsignup';
import Educatordashboard from './views/educatordashboard/Educatordashboard';
import GettingStarted from './views/gettingstarted/GettingStarted';
import Createcourse from './views/createcourse/Createcourse';
import Marketplace from './views/marketplace/Marketplace';
import Gritlasshome from './views/gritlasshome/Gritlasshome';
import Gritlaas from './views/gritlaas/Gritlaas';
import WebappDevelopment from './views/webappdevelopment/WebappDevelopment';
import Mobiledevelopment from './views/mobiledevelopment/Mobiledevelopment';
import Outsourcedevelopment from './views/outsourceddevelopment/Outsourcedevelopment';
import Mobilefirst from './views/mobilefirst/Mobilefirst';
import VideoPlayer from './views/VideoPlayer/VideoPlayer';
import Blockchain from './views/Blockchain/Blockchain';
import Nft from './views/nft/Nft';
import Contactus from './views/contactus/Contactus';
import Getstarted from './views/getstarted/Getstarted';
import { toast, ToastContainer } from "react-toastify";

import Home from './views/home/Home';


import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css';
// import "../../css/aos.css"
import "./css/main.css"
import ScrollToTop from './views/scrolltotop';
import Editprofile from './views/editprofile/Editprofile';
import EditProStudent from './views/EditProStudent/EditproStudent';


function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <React.Fragment>
      <ToastContainer />

      <Routes >
        <Route exact path='/gritlasshome' element={<Gritlasshome />} />

        <Route exact path='/' element={<Gritlaas />} />

        <Route exact path='/studentlogin' element={<Studentlogin />} />


        <Route exact path='/studentdashboard' element={<Studentdashboard />} />
        <Route exact path='/videoplayer' element={<VideoPlayer />} />
        <Route exact path='/Editprofile' element={<Editprofile />} />

        <Route exact path='/EditProStudent' element={<EditProStudent />} />

        <Route exact path='/educatorlogin' element={<Educatorlogin />} />

        <Route exact path='/educatorsignup' element={<Educatorsignup />} />

        <Route exact path='/educatordashboard' element={<Educatordashboard />} />

        <Route exact path='/marketplace' element={<Marketplace />} />


        <Route exact path='/studentsignup' element={<Studentsignup />} />

        <Route exact path='/home' element={<Home />} />

        <Route exact path='/createcourse' element={<Createcourse />} />



        {/* <Route exact path='/gritlasshome' element={<Gritlasshome />} /> */}

        <Route exact path='/gettingstart' element={<GettingStarted />} />




        <Route exact path='/webappdevelopement' element={<WebappDevelopment />} />
        <Route exact path='/mobiledevelopement' element={<Mobiledevelopment />} />
        <Route exact path='/outsourcedevelopemtnt' element={<Outsourcedevelopment />} />
        <Route exact path='/mobilefirstdevelopement' element={<Mobilefirst />} />
        <Route exact path='/blockchain' element={<Blockchain />} />
        <Route exact path='/nft' element={<Nft />} />

        <Route exact path='/contactus' element={<Contactus />} />
        <Route exact path='/getstarted' element={<Getstarted />} />







       

      </Routes>
    </React.Fragment>

  );
}

export default App;
