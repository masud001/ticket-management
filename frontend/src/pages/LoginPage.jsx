import React from 'react'
import Navigation from '../components/Navigation'
import Card from 'react-bootstrap/Card';
const LoginPage = () => {
  return (
    <div className=''>
    <Navigation/>
    <div className=" w-100 h-100 d-flex justify-content-center align-items-center">
      <Card style={{ width: '25rem' }} className=' text-start my-4'>
      <Card.Body>
        <Card.Title className=' mb-5'>Login</Card.Title>
        <Card.Text>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" placeholder='Email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" placeholder='Password' className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default LoginPage