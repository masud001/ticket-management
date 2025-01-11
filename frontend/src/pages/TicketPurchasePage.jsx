import React from "react";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
// import { toast } from "react-toastify";

const Ticket = () => {
  const [ticketInfo, setTicketInfo] = useState(null);
  const [user, setUser] = useState(null);
  const [transactionId, setTransactionId] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [show, setShow] = useState(true);

  useEffect(() => {
    const storedTicketInfo = localStorage.getItem("ticketInfo");
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (storedTicketInfo) {
      setTicketInfo(JSON.parse(storedTicketInfo));
      localStorage.removeItem("ticketInfo");
    }
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  const confirmPurchase = async (e) => {
    console.log("Transaction ID: ", transactionId);
    console.log("Ticket Info: ", ticketInfo);

    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/ticket/create-ticket", {
        email: user?.user.email,
        totalVisitors: ticketInfo.totalVisitors,
        selectedRides: ticketInfo.selectedRides,
        totalPrice: ticketInfo.totalPrice,
        transactionId: transactionId,
      });

      setMessage("Ticket Purchased Successfully");
      setMessageType("success");
      setShow(true);
    } catch (error) {
      console.log(error);
      setMessage(error.response?.data || "Ticket Purchase Failed");
      setMessageType("error");
      setShow(true);
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <Navigation />

      {!message && (
        <>
          <div className="ticket-info">
            <h3>
              Hi {user?.name}! <br></br> Please recheck your ticket information
              and complete payment
            </h3>
            {ticketInfo && (
              <div>
                <p>Purchasing Date: {new Date().toLocaleDateString()}</p>
                <p>Your Email: {user?.user.email}</p>
                <p>Total Visitors: {ticketInfo.totalVisitors}</p>
                <p>Selected Rides:</p>
                <div>
                  {ticketInfo.selectedRides.map((ride, index) => (
                    <p key={index}>{ride.name}</p>
                  ))}
                </div>

                <p>Total payable amount: {ticketInfo.totalPrice} Tk</p>
              </div>
            )}

            <div className="payment-gateway"></div>
            <h4>Payment Option</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Bkash Transection Id:</Form.Label>
                <Form.Control
                  type="number"
                  onChange={(e) => setTransactionId(e.target.value)}
                />
              </Form.Group>
            </Form>
          </div>

          <button
            onClick={confirmPurchase}
            className="btn btn-success"
            disabled={!transactionId}
          >
            Confirm Purchase
          </button>
        </>
      )}

      {message && (
        <>
          <Alert
            show={show}
            variant={messageType === "success" ? "success" : "danger"}
            onClose={() => setShow(false)}
            dismissible
          >
            {message}
          </Alert>
          <button onClick={goBack} className="btn btn-success">
            Go Back
          </button>
        </>
      )}
    </>
  );
};

export default Ticket;
