import React, { useContext } from "react";
import { Button, Row, Col, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { products, data } = props;
  // console.log(data);
  return (
    <Card style={{ width: "18rem" }}>
      <Link
        to={{
          pathname: `/product/${products.id}`,
          state: { test: "test" },
        }}
      >
        <Card.Img variant="top" src={products.image} />
        <Card.Body>
          <Card.Title>{products.name}</Card.Title>
          <Card.Text>
            {products.desc.split(" ").slice(0, 12).join(" ")}
          </Card.Text>
        </Card.Body>
      </Link>
      <Container>
        <Card.Footer>
          <Row>
            <Col>
              <Card.Text style={{ textAlign: "left" }}> Buy Now:</Card.Text>
            </Col>
            <Col style={{ textAlign: "right" }}>£{products.buy}</Col>
          </Row>
          <br />

          <Row>
            <Col>
              <Card.Text style={{ textAlign: "left", fontSize: "80%" }}>
                {" "}
                Ticket price:
              </Card.Text>
            </Col>
            <Col style={{ textAlign: "right" }}>£{products.ticket}</Col>
          </Row>
        </Card.Footer>
      </Container>
    </Card>
  );
};

export default ProductCard;
