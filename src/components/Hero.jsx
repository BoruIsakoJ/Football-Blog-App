import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div>
<div className="container-fluid bg-light d-flex align-items-center" style={{ height: '100vh' }}>
  <div className="container">
    <div className="row">
      <div className="col-md-6 d-flex flex-column justify-content-start" style={{ paddingLeft: '3%' }}>
        <h1 className="display-4 fw-bold" style={{ marginTop: '-150px'}}>
          What is more beautiful in the world than having a sense of community?
        </h1>
      </div>

      <div className="col-md-6 d-flex flex-column justify-content-center" style={{ paddingRight: '3%', marginTop:"100px" }}>
        <p className="lead">
          Being entitled to your own opinion, the freedom to express yourself openly, and the joy of connecting with like-minded individuals.
          <br /><br />
          <strong>Welcome to <span className="text-primary">Fanfolio</span></strong> — a space for creativity, bold expression, and belonging.
        </p>
        <a href="#blogs" className="btn btn-outline-primary btn-lg mt-3">
          View Blogs
        </a>
      </div>
    </div>
  </div>
</div>




        </div>
    )
}

export default Hero