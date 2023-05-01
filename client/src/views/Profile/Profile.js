import React, { useEffect } from 'react'
import { currentUser } from '../../util/currentUser'
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';
import { loginRequired } from '../../util/LoginRequired';
import './Profile.css'
import user from './../../images/user.png'
import Select from 'react-select';

import { Link } from 'react-router-dom';

function Profile() {

   
  useEffect(()=>{
    loginRequired();
  },[])

  function logOut() {
    localStorage.removeItem('currentUser');
    window.location.href = '/login'
  }
  
 

  function viewexercise(){
    window.location.href='/viewexercise'
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
                <Link to ='/addexercise'>  <button className='btn btn-primary witd-btn' >Add Exercise</button></Link>
                    <Link to ='/addtrainer'>    <button className='btn btn-primary witd-btn' >Add Trainer</button></Link>
                    <Link to ='/viewexercise'> <button className='btn btn-primary witd-btn' >View Exercise</button></Link>
                    <Link to ='/vewTrainer'> <button className='btn btn-primary witd-btn' >View Trainer</button></Link>
                    <Link to ='/vewUsers'> <button className='btn btn-primary witd-btn' >View User</button> </Link>
                    <Link to ='/messageview'> <button className='btn btn-primary witd-btn' >View Messages</button> </Link>
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
                            <img src={user} className='user-img' />
                            </div>
                            <hr />
                            <span className='user-info size'>Welcome  {currentUser?.name} </span>
                            <br />
                            <span className='user-info'>Email : {currentUser?.email} </span>
                            <br />
                            <span className='user-info'>Phone No : {currentUser?.phone}</span> <br />
                            <span className='user-info'>Weight : {currentUser?.weight} Kg</span> <br />
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
