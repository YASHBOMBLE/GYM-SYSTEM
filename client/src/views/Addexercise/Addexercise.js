import React, { useEffect, useState } from 'react'
import { loginRequired } from '../../util/LoginRequired';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import Select from 'react-select';
import axios from 'axios';
import swal from 'sweetalert'
import './Addexercise.css'


function Addexercise() {
    useEffect(() => {
        loginRequired();
    }, [])
    
    const [uname, setUname] = useState()
    const [name, setName] = useState()
    const [sets, setSets] = useState()
    const [day, setDay] = useState(null);
    const [url, setUrl] = useState();


    const Countries = [
        { label: "Monday", value: 1 },
        { label: "Tuesday", value: 2 },
        { label: "Wednesday", value: 3 },
        { label: "Thursday", value: 4 },
        { label: "Friday", value: 5 },
        { label: "Saturday", value: 6 },
        { label: "Sunday", value: 7 }
    ];


    async function addexercise() {
        const response = await axios.post('/addexercise',{
         uname : uname,
         exername : name,
         day : day.label,
         sets : sets,
         imgUrl : url,
         dayId : null
        })
 
        const status = response.data.success;
        if (response.data.success) {
 
         await swal({
           title: "Success",
           text: response.data.message,
           icon: "success",
           button: "okk!",
         });
          setUname('');
          setName('');
          setDay(null);
          setSets('');
          setUrl('');
          

       }
       else
       {
        await swal({
            title: "Error",
            text: "Enter Correct Details",
            icon: "error",
            button: "Try Again!",
          });
       }
     }
    

    return (
        <div>
            <Navbar />
            <div className='row'>
                <div className='col-md-4'>

                </div>
                <div className='col-md-4'>

                    <div className='login-form-container'>
                        <div className='form-container main-form-container mt-3 '>
                            <form>
                                <div className='form-title' >
                                    Add Exercise
                                    <hr />
                                </div>
                                <div>
                                    <label htmlFor='uname'>User Name :  </label>
                                    <input type='text' id='uname' placeholder='User Name / Optional' className='user-input'
                                        value={uname} onChange={(e) => setUname(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor='name'>Name of Exercise :  </label>
                                    <input type='text' id='name' placeholder='Name' className='user-input'
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <label htmlFor='class'>Select Day : </label>

                                <Select options={Countries} id='class' placeholder='Select Day' className='user-input text-color' onChange={setDay} />
                                <div>
                                    <label htmlFor='set'>Number of sets :  </label>
                                    <input type='text' id='set' placeholder='Name' className='user-input'
                                        value={sets} onChange={(e) => setSets(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor='url'>Name of Exercise :  </label>
                                    <input type='text' id='url' placeholder='ImgUrl/Optional' className='user-input'
                                        value={url} onChange={(e) => setUrl(e.target.value)} />
                                </div>
                                <hr />
                                <button type='button' className='login-button btn-width' onClick={addexercise}>Add / Assign exercise </button>
                           <div className='notecontainer'>
                           <b className='note'>Note : For Optional Field Enter Na.</b>
                           </div>
                           
                           </form>
                          
                        </div>
                    </div>

                </div>
                <div className='col-md-4'>
             
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Addexercise