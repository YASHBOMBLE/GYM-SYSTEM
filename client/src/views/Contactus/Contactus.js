import React,{useEffect, useState} from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import './Contactus.css'
import axios from 'axios';
import swal from 'sweetalert';
import { loginRequired } from '../../util/LoginRequired';
function Contactus() {

  useEffect(()=>{
    loginRequired();
  },[])

  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const[message, setMessage] = useState();

  async function sendresponce()
  {
    const response = await axios.post('/contact',{
      name : name,
      email : email,
      message : message
    })

    if (response.data.success) {

      await swal({
        title: "Success",
        text: response.data.message,
        icon: "success",
        button: "Success",
      });
      
    }
    else {
      await swal({
        title: "Error",
        text: response.data.message,
        icon: "error",
        button: "Try Again!",
      });
  }
  setEmail('')
  setMessage('')
  setName('')
  }
  return (
    <div>
        <Navbar />
       
    
        <div id="section-wrapper">
        <div class="box-wrapper" >
            <div class="info-wrap">
                <h2 class="info-title">Contact Information</h2>
                <h3 class="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
                <ul class="info-details">
                    <li>
                        <i class="fas fa-phone-alt"></i>
                        <span>Phone:</span> <a href="tel:+ 1235 2355 98">+91 - 8261025656</a>
                    </li>
                    <li>
                        <i class="fas fa-paper-plane"></i>
                        <span>Email:</span> <a href="mailto:info@yoursite.com">Gym@gym.com</a>
                    </li>
                    <li>
                        <i class="fas fa-globe"></i>
                        <span>Website:</span> <a href="https://gymsystem.onrender.com/login">gymsystem.onrender.com</a>
                    </li>
                </ul>
                <ul class="social-icons">
                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            <div class="form-wrap form-height">
              
                    <h2 class="form-title">Send us a message</h2>
                    <div class="form-fields ">
                        <div class="form-group ">
                            <input type="text" class="fname " placeholder=" Name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    
                        <div class="form-group">
                            <input type="email" class="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                       
                        <div class="form-group">
                            <textarea name="message" id="" placeholder="Write your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        </div>
                    </div>
                    <input type="submit" onClick={sendresponce} value="Send Message" class="submit-button" / >
            </div>
        </div>
        </div>
        <Footer />
    </div>
    
  )
}

export default Contactus