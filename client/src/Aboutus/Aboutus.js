import React,{useEffect} from 'react'
import './Aboutus.css'
import Navbar from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import { loginRequired } from '../util/LoginRequired'
import yash from './../images/yash.jpeg'
import sakshi from './../images/sakshi.jpeg'
import samruddhi from './../images/samruddhi.jpeg'

function Aboutus() {
    useEffect(() => {
        loginRequired();
    }, [])

  return (
    <div>
<Navbar />
<h3 class="team-title" id="team">Our Team</h3>
<section>
    <div class="team-container">
        <div class="team-card">
            <div class="team-content">
            <div class="imgbx"><img src={yash}/></div>
                <div class="contentbox">
                <h3>Yash Bomble<br /><br /><span>RSMDP Collage,Deolali Pravara</span><br />BSc(Computer Science)</h3>
                </div>
            </div>
        </div>
        <ul class="sci">
            <li><a href="https://github.com/YASHBOMBLE"><i class="fa fa-github" aria-hidden="true"></i></a></li>
            <li><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>

        </ul>
    </div>
    <div class="team-container">
        <div class="team-card">
            <div class="team-content">
            <div class="imgbx"><img src={sakshi}/></div>
                <div class="contentbox">
                <h3>Sakshi Sansare<br /><br /><span>RSMDP Collage,Deolali Pravara</span><br />BSc(Computer Science)</h3>
                </div>
            </div>
        </div>
        <ul class="sci">
            <li><a href="https://github.com/sakshisansare1812"><i class="fa fa-github" aria-hidden="true"></i></a></li>
            <li><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>

        </ul>
    </div>

    <div class="team-container">
        <div class="team-card">
            <div class="team-content">
            <div class="imgbx"><img src={samruddhi}/></div>
                <div class="contentbox">
                <h3>Samruddhi Shinde<br /><br /><span>RSMDP Collage,Deolali Pravara</span><br />BSc(Computer Science)</h3>
                </div>
            </div>
        </div>
        <ul class="sci">
            <li><a href="https://github.com/samruddhi303"><i class="fa fa-github" aria-hidden="true"></i></a></li>
            <li><a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
    </div>
</section>
<Footer />
    </div>
  )
}

export default Aboutus