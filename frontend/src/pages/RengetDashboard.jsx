import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import AdminChart from "../components/AdminChart";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";

const RengerDashboard = () => {
  const [totalVisitors, setTotalVisitors] = useState();
  const [totalTicketSell, setTotalTicketSell] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [allVisitors, setAllVisitors] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    console.log(userInfo);
    if (userInfo?.user?.role !== "ranger") {
      window.location.href = "/";
    }
    getUsers();
    getTickets();
  }, []);

  const getTickets = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/ticket/get-tickets"
      );
      const tickets = response.data;
      const totalVisitors = tickets
        .map((ticket) => ticket.totalVisitors)
        .reduce((acc, totalVisitors) => acc + totalVisitors, 0);
      const totalTicketSell = tickets.length;
      const totalPrice = tickets.reduce(
        (acc, ticket) => acc + ticket.totalPrice,
        0
      );
      setTotalVisitors(totalVisitors);
      setTotalTicketSell(totalTicketSell);
      setTotalPrice(totalPrice);
    } catch (error) {
      console.log(error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/user/get-users"
      );
      const users = response.data;
      setAllVisitors(users.filter((user) => user.role === "visitor"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navigation />
      <div className=" py-5 d-flex gap-3 justify-content-between">
        <div className="w-100 bg-info text-start p-3 rounded">
          <h1>Total Visitor </h1>
          <h2>{totalVisitors}</h2>
        </div>
        <div className="w-100 bg-info text-start p-3 rounded">
          <h1>Ticket sell </h1>
          <h2>{totalTicketSell}</h2>
        </div>
        <div className="w-100 bg-info text-start p-3 rounded">
          <h1>Total price </h1>
          <h2>{totalPrice}</h2>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-around py-5">
        <AdminChart />
      </div>
      <div className="w-100 ">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <b>All Visitors List</b>
            </Accordion.Header>
            <Accordion.Body>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {allVisitors?.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default RengerDashboard;
