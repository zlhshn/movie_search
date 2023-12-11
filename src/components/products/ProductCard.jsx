import React from "react";
import { Card } from "react-bootstrap";
import { MdFavorite } from "react-icons/md";
import { useState } from "react";
import { IoStarSharp } from "react-icons/io5";

const ProductCard = ({title,price ,image ,id,director}) => {

  const [show, setShow] = useState(false)

  return (
    <Card key={id} className="rounded-2 m-auto card" role="button">
      <Card.Header className="d-flex justify-content-between">
        <Card.Title className="d-flex align-items-center gap-2"><IoStarSharp className="text-warning" /> {price} </Card.Title>
        <MdFavorite size={30} className={show ? "text-danger" : "text-dark"} onClick={()=>setShow(!show)}/>
      </Card.Header>
      <Card.Img variant="top" src={image} className="player-logo" />

      <Card.Footer className="card__over">
        <Card.Title> <p>{title}</p> <p>Director :{director}</p> </Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;
