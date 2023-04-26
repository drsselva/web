import React from 'react'
import materialsymbolsvideocamerafront from "../../assets/img/student-db/materialsymbolsvideocamerafront.svg"

import { sessionDetails } from '../../constants/constants'

function Sessions() {
  return (
                    
<>
    {sessionDetails && sessionDetails.map((data)=>{
        return(
          <div key={data.hoster} className="col-md-4">

          {/* <div className="row student-wrap px-5"> */}

            <div className="feature-db position-relative">
              <div className="feature-icon-db">
              <img src={data.domainBackground} alt="student" className="img-fluid"/>
              <div className="overlay-content">
              <h5 className="fs-5 mb-0">{data.domain}</h5>
              <p>by {data.hoster}</p>
              </div>
              </div>
              <div className="session-time d-flex align-items-center justify-content-between">
                <span className="className-time">{data.timing}</span>
                <a href="#" className="btn btn-default st-btn rounded justify-content-end" onClick={()=>window.open("https://meet.google.com/kpa-ofau-ihw?authuser=0")}>Join <img src={materialsymbolsvideocamerafront} alt="Student Join" className="img-fluid"/></a> 
              </div>
            </div>

            
            {/* </div> */}
            </div>

        )
    })}
    </>

     )
}

export default Sessions