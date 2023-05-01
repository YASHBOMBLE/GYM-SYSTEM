import React, { useEffect, useState } from 'react'
import { loginRequired } from '../../util/LoginRequired';
import axios from 'axios';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import './Viewusers.css'
function Viewusers() {


  useEffect(() => {
    loginRequired();
  }, [])

  const [currentUser, setAlluser] = useState([])


  async function fetchAllUsers() {
    const response = await axios.get('users')

    setAlluser(response.data.data)
  }

  useEffect(() => {
    fetchAllUsers();
  }, [])

  return (
    <div>
      <Navbar />
      <div className='row'>
        <div className='col-md-12'>
          <div className='usertitle'>All User's</div>
          <hr  className='mb-4' />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
          <table class="table  table-hover">
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">UserID</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Weight</th>
                <th scope="col">Age</th>
              </tr>
            </thead>


            {
              currentUser?.map((index, item) => {
                return (
                  <>
                    <tbody>
                      <tr>
                        <th scope="row">{item + 1}</th>
                        <th scope="row">{index.userid}</th>
                        <td>  {index.name}</td>
                        <td>{index.email}</td>
                        <td>{index.weight} Kg</td>
                        <td>{index.age} Year</td>

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

export default Viewusers