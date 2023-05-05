import React, { useState, useEffect } from 'react'
import Footer from '../component/Footer/Footer'
import Navbar from '../component/Navbar/Navbar'
import { loginRequired } from '../util/LoginRequired'
import Select from 'react-select';
import { currentUser } from '../util/currentUser';
import swal from 'sweetalert';
import axios from 'axios';
function Assignexercise() {

    useEffect(() => {
        loginRequired();
    }, [])

    const [uname, setUname] = useState()
    const [exername, setExerame] = useState()
    const [sets, setSets] = useState()
    const [amount, setAmount] = useState();


    const Countries = [
        { label: "Monday", value: 1 },
        { label: "Tuesday", value: 2 },
        { label: "Wednesday", value: 3 },
        { label: "Thursday", value: 4 },
        { label: "Friday", value: 5 },
        { label: "Saturday", value: 6 },
        { label: "Sunday", value: 7 }
    ];

    const Exercises = [
        { label: "Pilates", value: 1200 },
        { label: "Push-up", value: 1245 },
        { label: "Squats", value: 3000},
        { label: "Lunge", value: 1520 },
        { label: "Plank", value: 1996 },
        { label: "Aerobics", value: 1738 },
        { label: "Bench press", value: 1212 }
    ];

    

    async function conformbtn()
    {   
        
       
       
    }

function title()
{
    if(currentUser.role == 'Admin')
    {
        return(
            <>
            <div className='form-title' >
            Assign Exercise
            </div>
    
            </>
        )
    }
    else
    {
        return(
            <>
            <div className='form-title' >
              Exercise registration
            </div>
    
            </>
        )
    }
}

async function Assign()
{
    console.log(exername.label)
    if(!uname || !exername)
    {
        await swal({
            title: "Error",
            text: "All Fields Are compulsory ",
            icon: "error",
            button: "Try Again!",
          });
    }
    const Amount = exername.value
    const amount ="You Have to Pay : "+"\n"+ Amount +""+"/-"+" "+"Rs"+"\n"+"Pay At Counter"
     alert(amount)
     const response = await axios.post('/assignexer', {
        ID : currentUser._id,
        name : uname,
        exer : exername.label,
        amount : Amount
      })
      console.log(response.data)
      if (response.data.success) {
        await swal({
          title: "Success",
          text: response.data.message,
          icon: "success",
          button: "Okk!",
        });
        window.location.reload();
       
      }
      else {
        await swal({
          title: "Error",
          text: response.data.message,
          icon: "error",
          button: "Try Again!",
        });
       setAmount('');
       setExerame('');
       setUname('');
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
                                
                                   {
                              title()
                                   }
                                    <hr />
                               
                                <div>
                                    <label htmlFor='uname'> Name :  </label>
                                    <input type='text' id='uname' placeholder='Name' className='user-input'
                                        value={uname} onChange={(e) => setUname(e.target.value)} />
                                </div>
                                <label htmlFor='uname'>Select Exercise :  </label>
                                <Select options={Exercises} id='class' placeholder='Select Exercise' className='user-input text-color' onChange={setExerame} />
                                

                                <hr />
                                <button type='button' className='login-button btn-width' id='btn' onClick={(event) => [Assign(), conformbtn()]}>Add / Assign exercise </button>
                                <div className='notecontainer'>

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

export default Assignexercise