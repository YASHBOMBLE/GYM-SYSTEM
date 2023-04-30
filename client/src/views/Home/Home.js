import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Home.css'
import SimpleImageSlider from "react-simple-image-slider";
import bg1 from "./../../images/bg1.jpg"
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import { currentUser } from './../../util/currentUser'
function Home() {

  const [currentExercise,setAllexercise] = useState([])
  

  const Days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

  async function fetchAllItems() {
    const response = await axios.get('/viewexercise')
    setAllexercise(response.data.data)
  }
  useEffect(()=>{
    fetchAllItems();
  },[])

 
  const [imageNum, setImageNum] = useState(1);
  const sliderImages = [
     {
        url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fgym&psig=AOvVaw2Yul5iO_JtncIWEjqzBeO8&ust=1682948745470000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJCrvefe0f4CFQAAAAAdAAAAABAQ",
     },
     {
        url: "https://media.istockphoto.com/id/1437851885/photo/weight-training-equipment-in-a-modern-gym.jpg?s=1024x1024&w=is&k=20&c=U-xQFJDSVe8fMmW67yq7vL7pu9mtK9s-g7QozeUrYx8=",
     },
     {
        url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcSprPgYofGmXXPfuEDcZ_XI294n0bME5dTX9TGvINmPiA&s",
     },
     {
        url: "https://i.pinimg.com/474x/81/ca/47/81ca47eaae35615ba9a9bb57560aaa3c.jpg",
     },
     {
        url: "https://encryptedtbn0.gstatic.com/images?q=tbn:ANd9GcTof2fniv0mZzN8DByLmb6ILU4MvV_SGr_wptMeAut_dPaYMBkeHnHhD5egzU7MB0GSqE&usqp=CAU",
     },
  ];

  async function logOut() {
    
    localStorage.removeItem('currentUser');
    window.location.href = '/login'
  }

  if (!currentUser) {
    window.location.href = '/login'
  }

  return (
    
    <div>
      <Navbar />
      <div className='row'>
       <div className='col-md-4'>
          <div className='text-center home-title'>Days</div>
          <div className='Dayscontainer'>
          <span className='day-title'>Working Days</span>
          <hr />
          {
            Days?.map((index,item)=>{
              return (
              
                <>
              
                <span className='dayname' >{index}</span> 
                </>
              )
            })
          }
          </div>
       </div>
       <div className='col-md-4 viewExer'>
       <div className='viewExer '>
       <SimpleImageSlider
            width={500}
            height={350}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
          
               autoPlayDelay = {3}
         />
       </div>

        
       </div>
       <div className='col-md-4'>
       <div className='text-center home-title'>Exercise</div>
       <div className='Dayscontainer'>
       {
              currentExercise?.map((index,item)=>{
                return(
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
      <div className='row'>
      
   
      {
              currentExercise?.map((index,item)=>{
                const url = index.imgUrl;
                return(
                    <>
                   <div className='col-md-3'>
                    <div className='card-container'>
                    <span className='d-block mt-3'>{index.exername}</span>
                    <img src={url} className='img-fluid card-img' />
                    <span className='d-block mt-3'>Sets : {index.sets}</span>
                    </div>
                   
                   </div>
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
