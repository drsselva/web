import React from 'react';
import materialsymbolsvideocamerafront from "../../assets/img/student-db/materialsymbolsvideocamerafront.svg";
import logo from "../../assets/img/logo-icon.png"
import HoverVideoPlayer from "react-hover-video-player";
import Button from '@mui/material/Button';
import VideoPlayer from '../../views/VideoPlayer/VideoPlayer';
import { Navigate, useNavigate } from 'react-router-dom'
import { sessionDetails } from '../../constants/constants'
import addimg from "../../assets/img/add.png"


const cardStyle = {
  width: '23%',
  height: '330px',
  borderRadius: '10px',
  border: '1px solid #ccc',
  padding: '0',
  margin: '10px',
  boxSizing: 'border-box',
  transition: 'transform 0.3s',
};

const imageStyle = {
  width: '100%',
  height: '180px',
  borderRadius: '10px 10px 0 0'
};

const videoStyle = {
  width: '100%',
  height: '150px',
  borderRadius: '10px 10px 0 0'
};

const joinMeetStyle = {
  width: '100%', 
  backgroundColor: '#E75480'
}

const handleMouseEnter = (e) => {
  e.target.style.transform = 'translateY(-5px)';
};

const handleMouseLeave = (e) => {
  e.target.style.transform = 'translateY(0px)';
};

const Card = (props) => {
  const Navigate = useNavigate()
    return (
      <div style={cardStyle} className="card" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        {
        props.isEducator?
        <>
          {props.isCreateCourse?<></>:
          <><img style={imageStyle} src={props.img} alt="Card Image" /><div style={{ marginTop: '10px' }} class="d-flex justify-content-center align-items-center">
                  <h5 class="mb-2">

                    <a href="#" class="course-author" title="Educator" style={{ color: 'darkblue' }}>
                      <img src={logo} style={{ width: '30px', height: '30px', margin: '3px' }} />GRIT Digitech
                    </a>
                  </h5>
                </div><div className="card-content">
                    <h4 style={{ textAlign: 'center', }}>{props.title}</h4>
                    <p>{props.description}</p>
                  </div></>
              }               
              {
              props.isUploaded?<></>:
              <>
              {
              props.isCreateCourse?
              sessionDetails && sessionDetails.map((data) => {
                return (
                  <div key={data.hoster}>
                  <img style={imageStyle} src={data.domainBackground} alt="Card Image" /><div style={{ marginTop: '10px' }} class="d-flex justify-content-center align-items-center">
            </div><div className="card-content">
                <h4 style={{ textAlign: 'center', marginTop:'10px' }}>Create Your Course</h4>
                  <Button style={{ marginLeft: '50px', backgroundColor:'#E75480', color:'white', marginTop:'30px' }}
                          onClick={() => Navigate("/createcourse")}
                        >
                          <img src={addimg} alt="Student Join" className="addimg" />
                          CLICK HERE
                        </Button>
                </div>
                </div>
        
                )
              }):
              <div className="session-time d-flex">
                <a style={joinMeetStyle} href="#" className="btn btn-default st-btn rounded"
                  onClick={() => window.open("https://meet.google.com/ved-iutd-rdz?authuser=0")}>Join <img src={materialsymbolsvideocamerafront} alt="Student Join" className="img-fluid" /></a>
              </div>
              }
            </>
            }
        </>
          : 
          <>
          {props.isUpcomingSession? 
          <div>
            <img style={imageStyle} src={props.courseImageName} alt="Card Image" />
            <div style={{ marginTop: '10px' }} class="d-flex justify-content-center align-items-center">
            <h5 class="mb-2">
            <a href="#" class="course-author" title="Educator" style={{ color: 'darkblue' }}>
            <img src={logo} style={{ width: '30px', height: '30px', margin: '3px' }} />GRIT Digitech</a></h5>
            </div>
            <div className="card-content">
                <h4 style={{ textAlign: 'center', }}>{props.title}</h4>
            </div>
            <div className="popular-time d-flex justify-content-between pl-2 pr-2">
              <div className="star-rating"><span className="bi bi-star-fill"></span> <span className="bi bi-star-fill"></span> <span className="bi bi-star-fill"></span> <span className="bi bi-star-fill"></span> <span className="bi bi-star-fill"></span> <span className="rating-count ms-1">5.0</span></div>
              <div className="view-btn"><a href="#" className="btn btn-default st-btn rounded justify-content-end">View</a> </div>
            </div>
          </div>
         :
          <>
          <div style={videoStyle}>
          <HoverVideoPlayer
                            onClick={() => Navigate("/videoplayer", {
                              state: { 
                              video: props.bucketUrl+props.videoDoumentName,
                               title: props.title,
                                description: props.description,
                                educatorId: props.educatorId,
                                id: props.id,
                                pdfDocumentName: props.pdfDocumentName,
                               }  })}
                            videoSrc={props.bucketUrl+props.videoDoumentName}
                            pausedOverlay={
                            <img src={props.courseImageName}
                            alt="student"
                            style={{
                          // Make the image expand to cover the video's dimensions
                              width: '100%',
                              height: '150px',
                              objectFit: 'cover',
                              borderRadius: '10px 10px 0 0'
                            }}
                            /> 
                            }
                            loadingOverlay={
                            <div className="loading-overlay">
                              <div className="loading-spinner" />
                            </div>}
                          />
                          </div>
                <h6 class="mb-2" style={{ textAlign:'center' }}>
                <a class="course-author" title="Educator" style={{ color: 'darkblue' }}>
                  <img src={logo} style={{ width: '30px', height: '30px', margin: '3px' }} />GRIT Digitech</a>
                </h6>
          <h5 style={{ textAlign: 'center' }}>{props.title}</h5>

        <div className="session-time d-flex">
                <a style={joinMeetStyle} href="#" className="btn btn-default st-btn rounded"
                  onClick={() => window.open("https://meet.google.com/ved-iutd-rdz?authuser=0")}>Join <img src={materialsymbolsvideocamerafront} alt="Student Join" className="img-fluid" /></a>
        </div>
          <Button 
            onClick={() => {
              props.fileDownload(props.videoDoumentName)
            }}
          >
            <img src={props.download} alt="Student Join" className="addimg" />
            Download
          </Button>      
          </>
          }
          </>
          }
          </div>
    );
  };
  
  export default Card;