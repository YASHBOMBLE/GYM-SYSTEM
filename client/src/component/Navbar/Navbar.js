import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
    //<img src={ProjectLogoImg} className="img-fluid logoImg   me-2" />
  return (
    <div>
         <div>
      <nav class="navbar navbar-expand-lg navbar-dark background mb-4 sticky-md-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"> <span className='nav-title'>Gym System</span></a>
         
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/profile" className='nav-link' >Profile</Link>
              </li>
              <li class="nav-item">
                <Link to="/contactus" className='nav-link' > Contact Us </Link>
              </li>
             
              
            </ul>
            <form class="d-flex align-items-center">
              <h4 className='me-2 text-light'>Hello </h4>
              <Link to="/bookTable" className='text-decoration-none'>
                <h4 className=' my-list'></h4>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
    </div>
  )
}

export default Navbar