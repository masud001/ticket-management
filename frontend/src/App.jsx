import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import AdminDashboard from './pages/AdminDashboard';
function App() {

  return (
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="admin" element={<AdminDashboard />} />
      </Routes>
      
  )
}

export default App
