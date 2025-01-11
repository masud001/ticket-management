import React from 'react'
import locationIcons from '../assets/images/location.jpg'
const Footer = () => {
  return (
    <div>
        <div className="container">
      <h2 className='text-center py-5'>Contact Us</h2>
      <div className="row d-flex align-items-stretch gap-4 gap-lg-0">
        <div className="col-md-4 h-100">
          <div className="text-center card p-3" style={{height: "200px"}}>
            <h4 className='text-center'>Address</h4>
            <img src={locationIcons} className='img-fluid pb-2 mx-auto' width="50" height="50" alt="location" />
            <address className=' font-italic'>
              <p className='m-0'>IUBAT, Kingdom</p>
              <p className='m-0'>123 Main Street</p>
              <p className='m-0'>City, Country</p>
            </address>
          </div>
        </div>
        <div className="col-md-4 h-100">
          <div className="text-center card p-3" style={{height: "200px"}}>
            <h4 className='text-center'>Phone</h4>
            <img src={locationIcons} className='img-fluid pb-2 mx-auto' width="50" height="50" alt="location" />
            <address className=' font-italic'>
              <p className='m-0'>+880 1234 5678</p>
            </address>
          </div>
        </div>
        <div className="col-md-4 h-100">
          <div className="text-center card p-3"  style={{height: "200px"}}>
            <h4 className='text-center'>Email</h4>
            <img src={locationIcons} className='img-fluid pb-2 mx-auto' width="50" height="50" alt="location" />
            <address className=' font-italic'>
              <p className='m-0'>example@gmail.com</p>
            </address>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer