import { Link } from "react-router";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Navigation from "../components/Navigation";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import CarouselComponent from "../components/CarouselComponent";

const Home = () => {
  const [user, setUser] = useState(null);
  const [customModalShow, setCustomModalShow] = useState(false);
  const [totalVisitors, setTotalVisitors] = useState(1);
  const [selectedRides, setSelectedRides] = useState([]);
  const rides = [
    { name: "Roller Coaster", price: 50 },
    { name: "Ferris Wheel", price: 30 },
    { name: "Carousel", price: 20 },
    { name: "Swing", price: 15 },
  ];

  const handleRideSelect = (ride) => {
    if (selectedRides.some((r) => r.name === ride.name)) {
      console.log("ride already selected");
      setSelectedRides(selectedRides.filter((r) => r.name !== ride.name));
    } else {
      console.log("ride selected");
      setSelectedRides([...selectedRides, ride]);
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedRides.forEach((ride) => {
      totalPrice += ride.price;
    });
    return totalPrice * totalVisitors;
  };

  const rideSelected = (ride) => {
    return selectedRides.some((r) => r.name === ride.name);
  };

  React.useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  const handleModalClose = () => {
    setCustomModalShow(false);
    setTotalVisitors(1);
    setSelectedRides([]);
  };
  const handleModalShow = (e) => {
    e.preventDefault();
    setCustomModalShow(true);
  };

  const handleCustomSubmition = () => {
    if (!user) {
      window.location.href = "/login";
      return;
    }

    const ticketInfo = {
      totalVisitors,
      selectedRides,
      totalPrice: calculateTotalPrice(),
    };
    localStorage.setItem("ticketInfo", JSON.stringify(ticketInfo));
    handleModalClose();
    window.location.href = "/ticket-purchase";
  };

  const handleStaticTicket = (count) => {
    if (!user) {
      window.location.href = "/login";
      return;
    }

    let ticketInfo;
    if (count === 1) {
      ticketInfo = {
        totalVisitors: count,
        selectedRides: [{ name: "Roller Coaster", price: 50 }],
        totalPrice: 50,
      };
    } else if (count === 2) {
      ticketInfo = {
        totalVisitors: count,
        selectedRides: [
          { name: "Roller Coaster", price: 50 },
          { name: "Ferris Wheel", price: 30 },
        ],
        totalPrice: 160,
      };
    } else if (count === 3) {
      ticketInfo = {
        totalVisitors: count,
        selectedRides: [
          { name: "Roller Coaster", price: 50 },
          { name: "Ferris Wheel", price: 30 },
          { name: "Carousel", price: 20 },
        ],
        totalPrice: 300,
      };
    }
    localStorage.setItem("ticketInfo", JSON.stringify(ticketInfo));
    window.location.href = "/ticket-purchase";
  };

  return (
    <>
      <Navigation />

      <CarouselComponent />

      <div className="container">
        <div className="row">
          <div className="col-12 text-center py-4">
            <h1> Ticket Booking</h1>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="text-start d-flex justify-content-start gap-4">
          <Link onClick={handleStaticTicket.bind(this, 1)}>
            <Card>
              <Card.Img variant="top" src="https://placehold.co/600x400" />
              <Card.Body>
                <Card.Title>Ticket</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>For one person</ListGroup.Item>
                  <ListGroup.Item>
                    Unlimited Rides at Water Kingdom
                  </ListGroup.Item>
                  <ListGroup.Item>Only Entry at Fantasy Kingdom</ListGroup.Item>
                  <ListGroup.Item>Entry at Water Kingdom</ListGroup.Item>
                </ListGroup>
                <Card.Text>Price : TK :200</Card.Text>
                <Button variant="outline-info">Buy now</Button>
              </Card.Body>
            </Card>
          </Link>

          <Link onClick={handleStaticTicket.bind(this, 2)}>
            <Card>
              <Card.Img variant="top" src="https://placehold.co/600x400" />
              <Card.Body>
                <Card.Title>Ticket</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>For one person</ListGroup.Item>
                  <ListGroup.Item>
                    Unlimited Rides at Water Kingdom
                  </ListGroup.Item>
                  <ListGroup.Item>Only Entry at Fantasy Kingdom</ListGroup.Item>
                  <ListGroup.Item>Entry at Water Kingdom</ListGroup.Item>
                </ListGroup>
                <Card.Text>Price : TK :300</Card.Text>
                <Button variant="outline-info">Buy now</Button>
              </Card.Body>
            </Card>
          </Link>

          <Link onClick={handleStaticTicket.bind(this, 3)}>
            <Card>
              <Card.Img variant="top" src="https://placehold.co/600x400" />
              <Card.Body>
                <Card.Title>Ticket</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>For one person</ListGroup.Item>
                  <ListGroup.Item>
                    Unlimited Rides at Water Kingdom
                  </ListGroup.Item>
                  <ListGroup.Item>Only Entry at Fantasy Kingdom</ListGroup.Item>
                  <ListGroup.Item>Entry at Water Kingdom</ListGroup.Item>
                </ListGroup>
                <Card.Text>Price : TK :400</Card.Text>
                <Button variant="outline-info">Buy now</Button>
              </Card.Body>
            </Card>
          </Link>

          <Link onClick={handleModalShow}>
            <Card>
              <Card.Img variant="top" src="https://placehold.co/600x400" />
              <Card.Body>
                <Card.Title>Ticket</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>For one person</ListGroup.Item>
                  <ListGroup.Item>
                    Unlimited Rides at Water Kingdom
                  </ListGroup.Item>
                  <ListGroup.Item>Only Entry at Fantasy Kingdom</ListGroup.Item>
                  <ListGroup.Item>Entry at Water Kingdom</ListGroup.Item>
                </ListGroup>
                <Card.Text>Price : TK based on your choice</Card.Text>
                <Button variant="outline-info">Custom Buy</Button>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>

      <Modal show={customModalShow} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Custom Ticket Purchase</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                defaultValue={user ? user.user.email : ""}
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTotalVisitors">
              <Form.Label>Total Visitors</Form.Label>
              <Form.Control
                type="number"
                min="1"
                defaultValue="1"
                onChange={(e) => setTotalVisitors(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRides">
              <Form.Label>Select Rides</Form.Label>
              <ListGroup>
                {rides.map((ride, index) => (
                  <ListGroup.Item
                    key={index}
                    onClick={() => handleRideSelect(ride)}
                    active={selectedRides.includes(ride)}
                    className={
                      rideSelected(ride)
                        ? "bg-secondary text-white"
                        : " text-black"
                    }
                  >
                    {ride.name} - TK {ride.price}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Form.Group>
          </Form>
          <div className="mt-3">
            <h5>Total Price: TK {calculateTotalPrice()}</h5>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={handleCustomSubmition}
            disabled={selectedRides.length === 0}
          >
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
