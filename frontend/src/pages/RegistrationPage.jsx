import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import Navigation from '../components/Navigation'
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
const RegistrationPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('visitor');
    const [message, setMessage] = useState(''); // State for messages
    const [messageType, setMessageType] = useState(''); // State for message type (success/error)
    const [show, setShow] = useState(true);

    // handel submit function
   const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5001/api/user/register', { name, email, password, role });
           
            setMessage('Registration Successful');
            setMessageType('success');
            clearForm();
            setShow(true);
        } catch (error) {
            setMessage(error.response?.data || 'Registration Failed');
            setMessageType('error');
            setShow(true);
        }
    };
    // clear form data after submit
    const clearForm = () => {
        setName('');
        setEmail('');
        setPassword('');
        setRole('visitor');
    };
    

    useEffect(() => {
        let timer;
        if (message && show) {
            timer = setTimeout(() => {
                setShow(false);
            }, 3000); // Dismiss alert after 3 seconds
        }
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [message, show]);


  return (
    <>
    <Navigation/>
      <div className=" w-100 h-100 d-flex justify-content-center align-items-center">
      <Card style={{ width: '25rem' }} className=' text-start my-4'>
      <Card.Body>
        <Card.Title className=' mb-5'>Registration</Card.Title>
        {message && (
          <Alert show={show}  variant={messageType === 'success' ? 'success' : 'danger'} onClose={() => setShow(false)} dismissible >
          {message} 
        </Alert>
        )}
        
        <Card.Text>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input onChange={(e) => setName(e.target.value)} required value={name} type="text" placeholder='Enter your full name' className="form-control" id="name" aria-describedby="usernameHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label">Email address</label>
              <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} required value={email} className="form-control" id="userEmail" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required value={password} className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role</label>
              <select onChange={(e) => setRole(e.target.value)} value={role} required className="form-select" id="role">
                <option value="visitor">Visitor</option>
                <option value="ranger">Rengers</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
          </form>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    </>
  )
}

export default RegistrationPage