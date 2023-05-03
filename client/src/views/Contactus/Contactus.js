import React,{useState} from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import './Contactus.css'
import axios from 'axios';
import swal from 'sweetalert';
function Contactus() {

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
        <div className='row'>
            <div className = 'col-md-12 main-container'>
                <div className='contactus-container container-width'>
                  
                 <h2 className=''>Contact Us</h2>
                 <hr />
                 <div>
                 
                  <input type='text' id='name' placeholder='Name' className='m-2'
                    value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                 <div>
                  
                  <input type='email' id='email' placeholder='Email' className='m-2'
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                  
                  <textarea id='message' placeholder='Message' className='m-2 textarea-height'
                    value={message} onChange={(e) => setMessage(e.target.value)}>

                  </textarea>
                 
                </div>
                <button className='btn btn-primary btn-width' onClick={sendresponce}>Submit</button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    
  )
}

export default Contactus