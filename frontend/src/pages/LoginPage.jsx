import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State for messages
  const [messageType, setMessageType] = useState(""); // State for message type (success/error)
  const [show, setShow] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5001/api/user/login",
        {
          email,
          password,
        }
      );
      localStorage.setItem("user", JSON.stringify(response.data));

      setMessage("Login Successful");
      setMessageType("success");
      setShow(true);

      if (response.data.user.role === "admin") {
        window.location.href = "/admin";
      } else if (response.data.user.role === "ranger") {
        window.location.href = "/ranger";
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      setMessage(error.response?.data || "Login Failed");
      setMessageType("error");
      setShow(true);
    }
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
    <div className="">
      <Navigation />
      <div className=" w-100 h-100 d-flex justify-content-center align-items-center">
        <Card style={{ width: "25rem" }} className=" text-start my-4">
          <Card.Body>
            <Card.Title className=" mb-5">Login</Card.Title>
            {message && (
              <Alert
                show={show}
                variant={messageType === "success" ? "success" : "danger"}
                onClose={() => setShow(false)}
                dismissible
              >
                {message}
              </Alert>
            )}
            <Card.Text>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
