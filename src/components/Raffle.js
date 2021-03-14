import React, { useRef, useState, useEffect } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  CardDeck,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import data from "../data/product_data.json";
const Raffle = () => {
  var [clicked, setClicked] = useState(false);
  var [raffle, setRaffle] = useState([]);
  var clickContainer = useRef();
  var [product, setProduct] = useState([]);
  var [id, setId] = useState("");
  var [showWin, setShowWin] = useState([]);
  var [win, setWin] = useState("");
  var [weiner, setWeiner] = useState(false);
  var getRaffle = () => {
    const userraffle = JSON.parse(localStorage.getItem("user"));
    var u = [];
    var t = [];
    var w = [];
    if (userraffle) {
      data.map((pro) => {
        userraffle.entered.map((product) => {
          var i = [product];

          if (product[0].product === pro.id) {
            u.push(product);
            t.push(pro);
            w.push(pro.winningNums);
          }
        });
      });
      setRaffle(u);
      setProduct(t);
      setWin(w);
    }
    // console.log(t);
  };

  var getWins = () => {
    var t = [];

    raffle.map((products, i) => {
      // return (
      // <Row>
      // <h1>{product[i].name}</h1>
      // Tickets:
      products.map((l) => {
        if (product[i].winningNums.includes(l.ticket)) {
          // console.log(product[i].winningNums.includes(l.ticket));
          t.push(product[i].id);
        }
      });
      // </Row>
      // );
    });
    setShowWin(t);
  };

  function q() {
    
  };
  useEffect(() => {
    getRaffle();
    // console.log(raffle);
    // console.log(product);
    getWins();

    if (win) {
      // console.log(win);
      win.map((y, i) => {
        console.log(i);
        var e = y.some((a) => product[i].winningNums.indexOf(a) !== -1);
        console.log(e);
      });
      var k;
      var f = [];
      raffle.map((r, i) => {
        win.map((q, it) => {
          // console.log(product[i].winningNums);
          k = q.some((val) => product[i].winningNums.indexOf(val) !== -1);
          // setWeiner(k)
          // return <div>{k ? <h1>weiner</h1> : <h1>no ween</h1>}</div>;
          console.log(k);
        });
        f.push(!k);
        console.log(f);
        setWeiner(f);
      });
    }
    console.log("ye")
  }, []);

  return (
    <Container>
      {raffle.map((products, i) => {
        console.log(weiner);
        return (
          <Row>
            <h1>{product[i].name}</h1>
            {weiner[i] && <h1>weiner</h1>}
            Tickets:
            {products.map((l) => {
              return (
                <Col>
                  <h5>{l.ticket}</h5>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
};

export default Raffle;
