import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import AdminChart from "../components/AdminChart";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Table from "react-bootstrap/Table";

const AdminDashboard = () => {
  const [totalVisitors, setTotalVisitors] = useState();
  const [allUsers, setAllUsers] = useState();
  const [totalRengers, setTotalRengers] = useState();
  const [allRengers, setAllRengers] = useState();
  const [allVisitors, setAllVisitors] = useState();
  const [totalTicketSell, setTotalTicketSell] = useState();
  const [totalPrice, setTotalPrice] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo?.user?.role !== "admin") {
      window.location.href = "/";
    }
    getTickets();
    getUsers();
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
      setAllUsers(users);
      const totalRengers = users.filter(
        (user) => user.role === "ranger"
      ).length;
      setAllRengers(users.filter((user) => user.role === "ranger"));
      setAllVisitors(users.filter((user) => user.role === "visitor"));
      setTotalRengers(totalRengers);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(totalVisitors, totalTicketSell, totalPrice);

  return (
    <>
      <Navigation />
      <div className=" py-5 d-flex gap-3 justify-content-between">
        <div className="w-100 bg-info text-start p-3 rounded">
          <h1>Total Visitor </h1>
          <h2>
            <b>{totalVisitors}</b>
          </h2>
        </div>
        <div className="w-100 bg-info text-start p-3 rounded">
          <h1>Rengers </h1>
          <h2>
            <b>{totalRengers}</b>
          </h2>
        </div>
        <div className="w-100 bg-info text-start p-3 rounded">
          <h1>Ticket sell </h1>
          <h2>
            <b>{totalTicketSell}</b>
          </h2>
        </div>
        <div className="w-100 bg-info text-start p-3 rounded">
          <h1>Total price </h1>
          <h2>
            <b>{totalPrice}</b>
          </h2>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-around py-5">
        <AdminChart />
      </div>
      <div className="w-100 ">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <b>All Rengers List </b>
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
                  {allRengers?.map((user, index) => (
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
          <Accordion.Item eventKey="1">
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

export default AdminDashboard;
