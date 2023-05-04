import React,{useState,useEffect} from 'react'
import { loginRequired } from '../../util/LoginRequired';
import axios from 'axios';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
function Messageview() {

    const [currentmessage, setAllmessage] = useState([])

    useEffect(() => {
        loginRequired();
    }, [])

    async function fetchAllMessages() {
        const response = await axios.get('/viewmessage')
        setAllmessage(response.data.data)
    }
    useEffect(() => {
        fetchAllMessages();
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
                        <th scope="col">Sr.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Message</th> 
                    </tr>
                </thead>
                {
                    currentmessage?.map((index, item) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{item + 1}</th>
                                        <th scope="row">{index.name}</th>
                                        <th scope="row">{index.email}</th>
                                        <th scope="row">{index.message}</th>
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

export default Messageview