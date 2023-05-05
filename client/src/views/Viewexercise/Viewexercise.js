import React, { useEffect, useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import Footer from '../../component/Footer/Footer'
import axios from 'axios'
import { loginRequired } from '../../util/LoginRequired'
import './Viewexercise.css'
function Viewexercise() {

    const [currentExercise, setAllexercise] = useState([])

    async function fetchAllExercise() {
        const response = await axios.get('viewexercise')
        setAllexercise(response.data.data)
    }

    useEffect(()=>{
        loginRequired();
      },[])

    useEffect(() => {
        fetchAllExercise();
    }, [])

    return (
        <div>
            <Navbar />
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <span className='page-title'>View All Exercise</span>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <table class="table table-dark  table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Exercise No</th>
                                <th scope="col">Exercise Name</th>
                                <th scope="col">Sets</th>
                                <th scope="col">Img</th>

                            </tr>
                        </thead>
                        
                    
                    {
                        currentExercise?.map((index, item) => {
                            return (
                                <>
                                <tbody>
                            <tr>
                                <th scope="row">{item+1}</th>
                                <td>  {index.exername}</td>
                                <td>{index.sets}</td>
                                <td><img src={index.imgUrl} className='img-fluid img-size' /></td>

                           
                            </tr>
                        </tbody>
                                  
                                </>
                            )
                        })
                    }
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Viewexercise