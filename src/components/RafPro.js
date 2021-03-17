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
    console.log(props)
    return (
        <Row>
            <p>{props.win ? <h1>winner</h1>: <h1>loser</h1>}</p>
            Tickets :{props.ticks.map((tick) => {
                return <Col>{tick.ticket}</Col>
            })}
        </Row>
    )
}

export default RafPro
