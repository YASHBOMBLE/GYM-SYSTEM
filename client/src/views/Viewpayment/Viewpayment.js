import React ,{useEffect,useState}from 'react'
import './Viewpayment.css'
import { loginRequired } from '../../util/LoginRequired'
import axios from 'axios'
import Footer from '../../component/Footer/Footer'
import Navbar from '../../component/Navbar/Navbar'
function Viewpayment() {
    const [currentpayment, setAllpayment] = useState([])

    useEffect(() => {
        loginRequired();
    }, [])

    async function fetchAllPayment() {
        const response = await axios.get('/viewnewassignexercise')
        setAllpayment(response.data.data)
    }
    useEffect(() => {
        fetchAllPayment();
    }, [])
  return (

    


    <div>
        <Navbar />
            <div className='row'>
                <div className='col-md-12'>
                    <div className='text-center trainer-title'>All Payment Details</div>
                </div>
            </div>
            <hr  className='mb-4'/>
            <div className='row'>
                <div className='col-md-12'>
                <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Exercise</th>
                        <th scope="col">Payable Amount</th>  
                    </tr>
                </thead>
                {
                    currentpayment?.map((index, item) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <th scope="row">{item + 1}</th>
                                        <th scope="row">{index.name}</th>
                                        <th scope="row">{index.exer}</th>

                                        <th scope="row">{index.amount} /- Rs.</th>
                                         
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

export default Viewpayment