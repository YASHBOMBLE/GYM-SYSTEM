import React, { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert';
import { currentUser } from '../../util/currentUser';
import "./Signup.css"
import signup from './../../images/sign-up-form.svg'


import { Link, useFetcher } from 'react-router-dom';

import Marquee from "react-fast-marquee";
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

function Signup() {


  const [name, setName] = useState('')
  const [weight, setWeight] = useState('')
  const [age, setAge] = useState('')


  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('user')

  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }

  /*async function sendMail() {
    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('weight', JSON.stringify(weight));
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('phone', JSON.stringify(phone));
    localStorage.setItem('password', JSON.stringify(password));
    localStorage.setItem('age', JSON.stringify(age));
    localStorage.setItem('role', JSON.stringify(role));
    const response = await axios.post('/signup', {
      name: name,
      email: email,
      phone: phone,
      weight : weight,
      age : age,
      password: password,
      role: role
    })



    /*localStorage.setItem('otp', JSON.stringify(myOTP));
    const result = window.Email.send({
      SecureToken: process.env.REACT_APP_MAIL_KEY,
      To: email,
      From: "yashbomble1718@gmail.com",
      Subject: "Email Varification",
      Body: myOTP + " " + "Is your otp for email varification"
    });
*/

    



  async function signupUser() {
   
    
    const response = await axios.post('/signup', {
      name: name,
      email: email,
      phone: phone,
      weight : weight,
      age : age,
      password: password,
      role: role
    })

 
    
    console.log(response.data)
    if (response.data.success) {


      await swal({
        title: "Success",
        text: response.data.message,
        icon: "success",
        button: "Aww yiss!",
      });
const result = await axios.post('/sendmail',{
      mailId : email
    })
      window.location.href = '/login'
    }
    else {
      swal({
        title: "Error",
        text: response.data.message,
        icon: "error",
        button: "Try Again!",
      });
      setName('')
      setWeight('')
      setEmail('')
      setPhone('')
      setPassword('')
      setAge('')

    }
    
  }




  return (
    <div>
<Navbar />
      <br></br>

    
      <div className='row'>
        <div className='col-md-6'>
        <img src={signup} className='img-fluid img-container'/>
        </div>
        <div className='col-md-6 main-info-container'>


          <div className='form-container'>

            <div className='form-title'>
              Signup
            </div>
            <hr />
            <form>
              <div>
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' placeholder='Name' className='user-input'
                  value={name} onChange={(e) => setName(e.target.value)} />
              </div>



              <div>
                <label htmlFor='phone'>Phone: </label>
                <input type='text' id='phone' placeholder='Phone' className='user-input'
                  value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <label htmlFor='email'>Email: </label>
                <input type='email' id='email' placeholder=' Email' className='user-input'
                  value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>

              <label for="password">Password:</label>
              <div class="input-container">
                <input type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className='user-input' placeholder=' Password' id="password" name="password" />
                <i class="btn text-pass" onClick={handleShow}>{show ? "Hide" : "Show"}</i>
              </div>

              <div>
                <label htmlFor='weight'>Weight: </label>
                <input type='text' id='weight' placeholder=' Weight' className='user-input'
                  value={weight} onChange={(e) => setWeight(e.target.value)} />
              </div>

              <div>
                <label htmlFor='age'>Age: </label>
                <input type='text' id='age' placeholder=' Age' className='user-input'
                  value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
              <div>






              </div>



              <div>
                <button type='button' className='signup-button' onClick={signupUser}>Signup &nbsp;<i class="fa-solid fa-user-plus"></i></button>

              </div>
              <hr />
              <span className=' login-link'>
                <Link to='/login' className='' >Already have an account Login</Link>
              </span>
            </form>

          </div>
        </div>

        <div className='col-md-4'>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Signup
