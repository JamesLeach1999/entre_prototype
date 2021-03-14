import React, { useContext } from "react";
import { Button, Row, Col, Container, Card } from "react-bootstrap";
import ProductContext from "../context/productContext";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const { product } = useContext(ProductContext);

  return (
    <Card style={{ width: "18rem" }}>
      <Link
        to={{
          pathname: `/product/${product.id}`,
          props: {
            product: product,
          },
        }}
      >
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.desc.split(" ").slice(0, 12).join(" ")}
          </Card.Text>
        </Card.Body>
      </Link>
      <Container>
        <Card.Footer>
          <Row>
            <Col>
              <Card.Text style={{ textAlign: "left" }}> Buy Now:</Card.Text>
            </Col>
            <Col style={{ textAlign: "right" }}>£{product.buy}</Col>
          </Row>
          <br />

          <Row>
            <Col>
              <Card.Text style={{ textAlign: "left", fontSize: "80%" }}>
                {" "}
                Ticket price:
              </Card.Text>
            </Col>
            <Col style={{ textAlign: "right" }}>£{product.ticket}</Col>
          </Row>
        </Card.Footer>
      </Container>
    </Card>
  );
};

export default ProductCard;
