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
import RafPro from "./RafPro";
const Raffle = () => {
  var [raffle, setRaffle] = useState([]);
  var [product, setProduct] = useState([]);
  var [win, setWin] = useState("");
  var [weiner, setWeiner] = useState(false);
  var [load, setLoad] = useState(false);
  
  var getRaffle = () => {
    const userraffle = JSON.parse(localStorage.getItem("user"));
    var u = [];
    var t = [];
    var w = [];
    if (userraffle !== "") {
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
  };

  
  useEffect(() => {
    getRaffle();
    // console.log(raffle);
    // console.log(product);
    getWins();

    if (win) {
      // console.log(win);

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
        f.push(k);
        setWeiner(f);
      });
      setLoad(false);
    } else {
      setLoad(true);
    }
    console.log(weiner);
  }, [load]);

  return (
    <Container
      
    >
      {raffle.map((products, i) => {
        return (
          <div>
            <h1>{product[i].name}</h1>
            <br />
            {weiner[i] ? (
              <RafPro win={weiner[i]} name={product[i].name} ticks={products} />
            ) : (
              <RafPro win={false} name={product[i].name} ticks={products} />
            )}
          </div>
        );
      })}
    </Container>
  );
};

export default Raffle;
