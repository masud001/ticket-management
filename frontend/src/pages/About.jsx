import React from 'react'
import Navigation from '../components/Navigation'
import storyImage from '../assets/images/storyImage.jpeg'
import Footer from '../components/Footer'
const About = () => {
  return (
    <>
    <Navigation/>
     <div className="container my-3">
      <h2 className='text-center py-3'>About Us</h2>
      <div className="row">
        <div className="col-12">
          <p>Established on 10 January 2025, IUBAT Kingdom is a premier amusement park and 
            entertainment venue that offers a world of excitement and magic. 
            It has a water park with adrenaline-inducing slides, interactive play areas, 
            a dry park that offers thrilling rides, and kid-friendly attractions. 
            There’s something to please all ages. Couples can enjoy the perfect spot to enjoy a 
            romantic getaway in beautiful landscapes and tasty food choices. 
            As part of the Concord Group, IUBAT Kingdom maintains the highest standards of quality, 
            safety, and satisfaction. Be part of the IUBAT Kingdom family, 
            and stay connected via newsletters and social media. And plan your visit to begin an 
            unforgettable journey where dreams are made into reality.</p>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-md-6">
          <img src={storyImage} className='img-fluid w-100' alt="" />
        </div>
        <div className="col-md-6 text-center">
          <h3 className='text-center py-1'>Our story</h3>
          <h5>A Tale of Magic and Adventure</h5>
          <p>In IUBAT Kingdom, our story is one of wonder and adventure. The story began with a desire to create a location where dreams can come true. With unrelenting dedication and passion for the cause, we created an amusement park and an entertainment and amusement destination that would delight minds and hearts.

<br />
Each element in the IUBAT Kingdom has been thoughtfully created to take our guests to a place filled with excitement and enchantment. When you first step through our gate, you will be in a place unlike others.

</p>
        </div>
      </div>
     </div>

    <Footer/>

    </>
  )
}

export default About