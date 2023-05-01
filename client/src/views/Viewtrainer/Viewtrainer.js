import React, { useEffect, useState } from 'react'
import { loginRequired } from '../../util/LoginRequired';
import axios from 'axios';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
function Viewtrainer() {
    const [currenttrainer, setAlltrainer] = useState([])

    useEffect(() => {
        loginRequired();
    }, [])

    async function fetchAllExercise() {
        const response = await axios.get('/viewtrainer')
        setAlltrainer(response.data.data)
    }
    useEffect(() => {
        fetchAllExercise();
    }, [])


    return (
        <div>
            <Navbar />
            <div className='row'>
                <div className='col-md-12'>
                    <div className='text-center trainer-title'>All Trainer Details</div>
                </div>
            </div>
            <hr  className='mb-4'/>
            <div className='row'>
                <div className='col-md-12'>
                <table class="table  table-hover">
                <thead>
                    <tr>
                        <th scope="col">Trainer No</th>
                        <th scope="col">Trainer Name</th>
                        <th scope="col">Category/Class</th>
                        <th scope="col">Contact</th>  
                        <th scope="col">Email</th>

                    </tr>
                </thead>
                {
                    currenttrainer?.map((index, item) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{item + 1}</th>
                                        <th scope="row">{index.name}</th>
                                        <th scope="row">{index.category}</th>
                                        <th scope="row">{index.phone}</th>
                                        <th scope="row">{index.email}</th> 
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

export default Viewtrainer