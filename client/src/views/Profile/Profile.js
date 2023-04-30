import React, { useEffect } from 'react'
import { currentUser } from '../../util/currentUser'
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import { loginRequired } from '../../util/LoginRequired';


function Profile() {
  useEffect(()=>{
    loginRequired();
  },[])
  //<img src={user} className='user-img' />
  function logOut() {
    localStorage.removeItem('currentUser');
    window.location.href = '/login'
  }
  
  function addexercise()
  {
    
  
  }
  
  
  
  function adminView() {
  
    if (currentUser?.role == "Admin") {
        return (
            <div className='admin-view-conatiner profile-container'>
                <h3 className='admin-view'>
                    Admin Services
                </h3>
                <hr />
                <div class="d-grid gap-2 logout-btn">
                    <button className='btn btn-primary' onClick={addexercise}>Add Exercise</button>
                    <button className='btn btn-primary' onClick={addexercise}>Add Trainer</button>
                    <button className='btn btn-primary' onClick={addexercise}>View Exercise</button>
                    <button className='btn btn-primary' onClick={addexercise}>View Trainetr</button>
  
                </div>
  
  
            </div>
  
        )
    }
  }
  return (
    <div>
      <Navbar />
     <div className='row'>
                <div className='col-md-12 main-container'>
                    <div className='sub-container'>
                        <div className='profile-container'>
                            <div className='profile-img-conatiner'>
                                
                            </div>
                            <hr />
                            <span className='user-info size'>Welcome  {currentUser?.name} </span>
                            <br />
                            <span className='user-info'>Email : {currentUser?.email} </span>
                            <br />
                            <span className='user-info'>Phone No : {currentUser?.phone}</span> <br />
                            <span className='user-info'>Role : {currentUser?.role}</span>
                            <hr />

                            <span>
                                {
                                    adminView()
                                }

                            </span>
                            <div class="d-grid gap-2 logout-btn mt-3">
                    
                                <button type="button" className='btn btn-primary' onClick={logOut}><p className='logOut-text'>Logout</p><i class="fa-solid fa-right-from-bracket"></i></button>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
    </div>
  )
}

export default Profile
