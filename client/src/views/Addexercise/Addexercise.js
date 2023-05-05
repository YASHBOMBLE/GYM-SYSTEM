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
    const [price, setPrice] = useState();



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
        { label: "Pilates", value: 1 },
        { label: "Push-up", value: 2 },
        { label: "Squats", value: 3 },
        { label: "Lunge", value: 4 },
        { label: "Plank", value: 5 },
        { label: "Aerobics", value: 6 },
        { label: "Bench press", value: 7 }
    ];

    const dayId = 1;

async function validation()
{
    if(!uname)
    {
        await swal({
            title: "Error",
            text: 'All feilds are complesoury',
            icon: "Error",
            button: "okk!",
        });
    }
}

    async function addexercise() {
        
        if(uname || day || name || sets || url){
            const response = await axios.post('/addexercise', {
                uname: uname,
                day: day.label,
                exername: name.label,
                sets: sets,
                imgUrl: url,
                price : price
    
            })
    
    
    
            const status = response.data.success;
            
            if (response.data.success) {
                await swal({
                    title: "Success",
                    text: response.data.message,
                    icon: "success",
                    button: "okk!",
                });
                window.location.reload();
                setUname('');
                setName('');
                setDay('');
                setSets('');
                setUrl('');
                setPrice('');
            }
            

        }
        else{
            await swal({
                title: "Error",
                text: "All Feilds Are Compulsory",
                icon: "error",
                button: "Try Again!",
              });
        }

       
        // if(status === 'false')
        // {
        //     await swal({
        //         title: "Success",
        //         text: response.data.message,
        //         icon: "Error",
        //         button: "okk!",
        //     });
        //     setUname('');
        //     setName('');
        //     setDay('');
        //     setSets('');
        //     setUrl('');
        // }
        
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
                                    Add New Exercise (In System)
                                    <hr />
                                </div>
                                <div>
                                    <label htmlFor='uname'>Trainer Name :  </label>
                                    <input type='text' id='uname' placeholder=' Name ' className='user-input'
                                        value={uname} onChange={(e) => setUname(e.target.value)} />
                                </div>
                                <label htmlFor='exername'> Exercise Name:  </label>
                                <input type='text' id='exername' placeholder='Exercise name' className='user-input'
                                        value={name} onChange={(e) => setName(e.target.value)} />

<div>
                                    <label htmlFor='uname'>Price :  </label>
                                    <input type='text' id='uname' placeholder='Price' className='user-input'
                                        value={price} onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <label htmlFor='class'>Select Day : </label>

                                <Select options={Countries} id='class' placeholder='Select Day' className='user-input text-color' onChange={setDay} />
                                <div>
                                    <label htmlFor='set'>Number of sets :  </label>
                                    <input type='text' id='set' placeholder='Name' className='user-input'
                                        value={sets} onChange={(e) => setSets(e.target.value)}  required/>
                                </div>
                                <div>
                                    <label htmlFor='url'>Image Url :  </label>
                                    <input type='text' id='url' placeholder='ImgUrl/Optional' className='user-input'
                                        value={url} onChange={(e) => setUrl(e.target.value)} />
                                </div>
                                <hr />
                                <button type='button' className='login-button btn-width'  onClick={(event) => [validation(), addexercise()]}>Add / Assign exercise </button>
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

export default Addexercise