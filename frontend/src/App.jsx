import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import AdminDashboard from "./pages/AdminDashboard";
import TicketPurchasePage from "./pages/TicketPurchasePage";
import RengerDashboard from "./pages/RengetDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="registration" element={<RegistrationPage />} />
      <Route path="admin" element={<AdminDashboard />} />
      <Route path="ranger" element={<RengerDashboard />} />
      <Route path="/ticket-purchase" element={<TicketPurchasePage />} />
    </Routes>
  );
}

export default App;
