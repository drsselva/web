import React from 'react'
import { Link  } from 'react-router-dom';


function Crumbs(props) {

  return (

    <div className="breadcrumbs tp-page">
        <div className="page-header d-flex align-items-center">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>{props.data.type}</h2>
                <p style={{fontWeight : "500"}} className="lead">{props.data.content}</p>
              </div>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <ol>
                {props?.data?.route && props.data.route.map((dat)=>{
                    return(
<Link to={dat.route}>{dat.name}/</Link>   
                 )
                })}
              {/* <li><a href="#">Home</a> </li>
              <li>Student Dashboard</li> */}
            </ol>
          </div>
        </nav>
      </div>  )
}

export default Crumbs