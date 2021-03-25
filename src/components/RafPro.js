import React from 'react'
import {
  Button,
  Row,
  Col,
  Container,
  CardDeck,
  Nav,
  NavDropdown,
} from "react-bootstrap";
const RafPro = (props) => {
    // console.log(props)
    return (
      <Row >
        <br />
        <Col>
          Status:
          {props.win ? <h4>winner</h4> : <h4>loser</h4>}
        </Col>
        <Col>
          Tickets:
          <br />
          {props.ticks.map((tick, i) => {
            return <>{i % 2 ===0? <>{tick.ticket}, </>: <>{tick.ticket},  <br/></>}</>;
          })}
        </Col>
        <Col>Claim?</Col>
      </Row>
    );
}

export default RafPro
