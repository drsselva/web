import React from 'react'
import { popularCourses } from '../../constants/constants'
import reactangle1865 from  "../../assets/img/student-db/rectangle1865.png"

function Popularcourses() {
  return (
    <>
    {popularCourses && popularCourses.map((data)=>{
        return(
            <div key={data.course} className="col-md-4 mb-4">

            <div className="popular-feature-db position-relative">
              <div className="popular-icon-db d-flex align-items-center">
              <img src={reactangle1865} alt="student" className="img-fluid me-3"/>
              <div className="popular-content">
              <h5 className="mb-0">Mobile App Development using Kotlin</h5>
              </div>
              </div>
              <div className="popular-time d-flex align-items-center justify-content-between">
                <div className="star-rating"><span className="bi bi-star-fill"></span> <span className="bi bi-star-fill"></span> <span className="bi bi-star-fill"></span> <span className="bi bi-star-fill"></span> <span className="bi bi-star-fill"></span> <span className="rating-count ms-1">5.0</span></div>
                <div className="view-btn"><a href="#" className="btn btn-default st-btn rounded justify-content-end">View</a> </div>
              </div>
            </div>
            </div>
        )


    })}
    </>
            

  )
}

export default Popularcourses