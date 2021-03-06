import React, { useState, useEffect } from "react";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";
import request from "superagent";
const Add = () => {
  var [name, setName] = useState("");
  var [buy, setBuy] = useState(0);
  var [ticket, setTicket] = useState(0);
  var [numTickets, setNumTickets] = useState(0);
  var [cat, setCat] = useState("");
  var [desc, setDesc] = useState("");
  var [errors, setErrors] = useState([]);
  var [img, setImg] = useState("");
  var [idk, setIdk] = useState("");
  var [sub, setSub] = useState(false);

  var imgUpload = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "tfrl2p4i");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dhey8vvcx/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setIdk(file.secure_url);
  };

  useEffect(() => {
    var winningNums = [];

    for (var i = 0; i < 10; i++) {
      winningNums.push(Math.floor(Math.random() * numTickets + 1));
    }
    var addedProd = {
      id: Math.floor(Math.random() * 20 + 1) + 8,
      name: name,
      buy: buy,
      ticket: ticket,
      image: idk,
      numTicks: numTickets,
      cat: cat,
      desc: desc,
      winningNums,
    };
    console.log(idk);

    var t = JSON.parse(localStorage.getItem("localProducts"));
    if (t && t.length > 0) {
      t.push(addedProd);
      localStorage.setItem("localProducts", JSON.stringify(t));
    } else {
      localStorage.setItem("localProducts", JSON.stringify([addedProd]));
    }
    setImg(addedProd);
    console.log(addedProd);
  }, [sub]);

  return (
    <form
      enctype="multipart/form-data"
      onSubmit={() => setSub(true)}
      style={{ textAlign: "left", paddingLeft: "50px" }}
    >
      {idk && console.log(idk)}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Add Item</h1>
      <h3>Item name</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <br />
      <h3>Item Buy Now Price</h3>

      <input
        type="number"
        value={buy}
        onChange={(e) => setBuy(e.target.value)}
      />
      <br />
      <br />
      <h4>Ticket Price</h4>

      <input
        type="number"
        value={ticket}
        onChange={(e) => {
          if (buy / 200 < e.target.value) {
            setErrors((oldErrors) => [
              ...oldErrors,
              "Please pick appropriate ticket price",
            ]);
          } else {
            setTicket(e.target.value);
          }
        }}
      />
      <br />
      <br />
      <h4>Number of tickets</h4>

      <input
        type="number"
        value={numTickets}
        onChange={(e) => {
          if (buy * 2 < e.target.value) {
            setErrors((oldErrors) => [...oldErrors, "Please use less tickets"]);
          } else {
            setNumTickets(e.target.value);
          }
        }}
      />
      <br />
      <br />
      <h4>Category</h4>

      <input type="text" value={cat} onChange={(e) => setCat(e.target.value)} />
      <br />
      <br />
      <h4>Description</h4>

      <input
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <br />
      <h4>Upload Images</h4>

      <input
        type="file"
        // value={img}
        multiple
        accept="image/*"
        onChange={(e) => imgUpload(e)}
      />
      <br />
      <br />

      {/* <Image cloudName="dheyvvcx" onChange={(e) => onPhotoSelected(e.target.value)} /> */}
      <h4>Upload</h4>

      <button type="submit">submit</button>
      {errors
        ? errors.map((err) => {
            return <h1>{err}</h1>;
          })
        : ""}
        <br/>
    </form>
  );
};

export default Add;
