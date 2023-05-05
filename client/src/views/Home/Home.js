import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Home.css'
import SimpleImageSlider from "react-simple-image-slider";
import bg1 from "./../../images/bg1.jpg"
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import { currentUser } from './../../util/currentUser'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Link } from 'react-router-dom';
function Home() {

  const [currentExercise, setAllexercise] = useState([])


  const Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  async function fetchAllItems() {
    const response = await axios.get('viewexercise')
    setAllexercise(response.data.data)
  }
  useEffect(() => {
    fetchAllItems();
  }, [])


  const [imageNum, setImageNum] = useState(1);


  async function logOut() {

    localStorage.removeItem('currentUser');
    window.location.href = '/login'
  }

  if (!currentUser) {
    window.location.href = '/login'
  }


  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '300px',
    marginBottom: '20px'
  }
  const slideImages = [
    {
      url: 'https://www.palco23.com/files/2020/19_redaccion/fitness/the%20gym/the-gym-728.jpg',
      caption: 'Decide. Commit. Succeed.'
    },
    {
      url: 'https://img.freepik.com/free-photo/strong-man-training-gym_1303-23478.jpg?w=2000',
      caption: 'Make yourself stronger than your excuses'
    },
    {
      url: 'https://inspirefitnessacademy.co.uk/wp-content/uploads/2021/05/danielle-cerullo-CQfNt66ttZM-unsplash-1536x1024.jpg',
      caption: 'Power, perseverance, and discipline'
    },
  ];

  return (

    <div>
      <Navbar />
      <div className='row'>
        <div className='col-md-12'>
          <div className="slide-container">
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div key={index}>
                  <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                    <span style={spanStyle}>{slideImage.caption}</span>
                  </div>
                </div>
              ))}
            </Slide>
          </div>
        </div>
      </div>

      
      <div className='row mt-4'>
        <div className='col-md-6'>
          <div className='text-center home-title'>Days</div>
          <div className='Dayscontainer'>
            <span className='day-title'>Working Days</span>
            <hr />
            {
              Days?.map((index, item) => {
                return (

                  <>

                    <span className='dayname' >{index}</span>
                  </>
                )
              })
            }
          </div>
        </div>

        <div className='col-md-6'>
          <div className='text-center home-title'>Exercise</div>
          <div className='Dayscontainer exer-container'>
            {
              currentExercise?.map((index, item) => {
                return (
                  <>

                    <span className='d-block mt-3'>{index.exername}</span>
                  </>
                )
              })
            }
          </div>
        </div>

      </div>
      <hr />
      <div className='row'>
        <div className='col-md-12'>
          <div className='tag-line-container'></div>
          <span className='tag-line d-block'>No pain no gain</span>
          <span className=' center-text d-block'>Available Exercises</span>
        </div>
      </div>
      <hr />
      <div className='row mb-2'>

    

          {
            currentExercise?.map((index, item) => {
              const url = index.imgUrl;
              return (
                <>
                  <div class="team-container col-md-3">
                    <div class="team-card">

                      <div class="team-content">
                    <h4 className='d-block mt-3'>{index.exername}</h4>

                        <Link to='/assignexercise'><img src={url} className='img-fluid card-img' /></Link>

                        <div class="">
                          <span className='d-block mt-3'>Sets : {index.sets}</span>
                          <span className='mt-3'>Price : {index.price} /-</span>

                        </div>
                      </div>
                    </div>

                  </div>




                  {/* <div className='col-md-3'>
                  <div className='card-container'>
                    <h4 className='d-block mt-3'>{index.exername}</h4>
                    <Link to='/assignexercise'><img src={url} className='img-fluid card-img' /></Link>
                    <span className='d-block mt-3'>Sets : {index.sets}</span>
                    <span className='mt-3'>Price : {index.price} /-</span>

                  </div>

                </div> */}
                </>
              )
            })
          }

      </div>
      <div class="d-grid gap-2 logout-btn">
        <button type="button" className='btn btn-primary' onClick={logOut}><p className='logOut-text'>Logout</p><i class="fa-solid fa-right-from-bracket"></i></button>

      </div>
      <Footer />
    </div>


  )
}

export default Home
