import React from "react";
import Navigation from "../components/Navigation";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";
const Home = () => {
  React.useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    console.log("USER INFO:", userInfo);
  }, []);

  return (
    <>
      <Navigation />
      <div className="py-5">
        <div className="text-start d-flex justify-content-start gap-4">
          <Link to="/ticket/200">
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
          <Link to="/ticket/300">
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
          <Link to="/ticket/400">
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
          <Link to="/ticket/custom">
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
    </>
  );
};

export default Home;
