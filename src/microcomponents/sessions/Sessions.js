import React from 'react'
import materialsymbolsvideocamerafront from "../../assets/img/student-db/materialsymbolsvideocamerafront.svg"
import download from "../../assets/img/downloading.png"
import upload from "../../assets/img/upload.png"
import addimg from "../../assets/img/add.png"
import Button from '@mui/material/Button';
import { sessionDetails } from '../../constants/constants'
import './styles.css'
import { useNavigate } from 'react-router-dom'

function Sessions() {
  const Navigate = useNavigate()

  return (

    <>
      {sessionDetails && sessionDetails.map((data) => {
        return (
          <div key={data.hoster} className="col-md-4">

            {/* <div className="row student-wrap px-5"> */}

            <div className="feature-db position-relative">
              <div className="feature-icon-db">
                <img src={data.domainBackground} alt="student" className="img-fluid" />
                <div className="overlay-content">
                  <h5 className="fs-5 mb-0">Create Your Course</h5>
                </div>
              </div>
              <div className="session-time d-flex align-items-center justify-content-between">
                <Button className='buttonsdownload'
                  onClick={() => Navigate("/createcourse")}
                >
                  <img src={addimg} alt="Student Join" className="addimg" />
                  CLICK HERE

                </Button>
               
              </div>
            </div>
          </div>

        )
      })}
    </>

  )
}

export default Sessions