import React,{ useState ,useEffect} from 'react'
import Navigation from '../components/Navigation'
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [show, setShow] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5001/api/user/login', { email, password });
            console.log(email, password);
            // Save the token in local storage or session storage
            localStorage.setItem('token', response.data.token);
            setMessage('Login Successful');
            setMessageType('success');

            // Redirect or perform additional actions as needed
        } catch (error) {
            
            setMessage(error.response?.data || 'Login Failed Please check your credentials');
            setMessageType('error');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setMessage('Logged out successfully');
        setMessageType('success');
        // Redirect or perform additional actions as needed
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
    <div className=''>
    <Navigation/>
    <div className=" w-100 h-100 d-flex justify-content-center align-items-center">
      <Card style={{ width: '25rem' }} className=' text-start my-4'>
      <Card.Body>
        <Card.Title className=' mb-5'>Login</Card.Title>
        {message && (
          <Alert show={show}  variant={messageType === 'success' ? 'success' : 'danger'} >
          {message}
        </Alert>
        )}
        <Card.Text>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email' className="form-control" id="email" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <label htmlFor="pass" className="form-label">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' className="form-control" id="pass"/>
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