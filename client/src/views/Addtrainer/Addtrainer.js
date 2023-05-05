import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import './Addtrainer.css'
import Select from 'react-select';
import './../Signup/Signup.css'
import axios from 'axios';
import swal from 'sweetalert'
import { loginRequired } from '../../util/LoginRequired';
function Addtrainer() {
    useEffect(()=>{
        loginRequired();
        },[])
     
    const [category, setCategory] = useState(null);
    const [name, setName] = useState();
    const [mono, setMono] = useState();

    const [email, setEmail] = useState();


    const Countries = [
        { label: "Barbell hip thrust", value: 355 },
        { label: "Bench press", value: 54 },
        { label: "Farmer Walk", value: 43 },
        { label: "Deadlift", value: 61 }
        
    ];
    async function addTrainer() {

        if(name || category || mono || email)
        {
            const response = await axios.post('/addTrainer',{
                name : name,
                category : category.label,
                phone : mono,
                email : email
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
                 setEmail('');
                 setName('');
                 setCategory(null);
                 setMono('');
              }
        }
        else
        {
            await swal({
                title: "Error",
                text: "All Feilds Are Compulsory",
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
                                    Add Trainer
                                    <hr />
                                </div>
                                <div>
                                    <label htmlFor='email'>Email: </label>
                                    <input type='email' id='email' placeholder='Email' className='user-input'
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor='name'>Name Of Trainer: </label>
                                    <input type='text' id='name' placeholder='Name' className='user-input'
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div>



                                    <label htmlFor='class'>Select Class : </label>

                                    <Select options={Countries} id='class' placeholder='Select Class' className='text-color user-input' onChange={setCategory}/>


                                </div>
                                <div>
                                    <label htmlFor='mono'>Trainer Contact Number: </label>
                                    <input type='text' id='mono' placeholder='Phone' className='user-input'
                                        value={mono} onChange={(e) => setMono(e.target.value)} />
                                </div>

                                <div>
                                    <hr />
                                    <button type='button' className='login-button add-trainer-btn' onClick={addTrainer} >Add Trainer</button>
                                    <hr />

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

export default Addtrainer